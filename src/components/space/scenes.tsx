import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useEffect, useMemo, useRef, type ReactNode } from "react";
import * as THREE from "three";
import { paintBody } from "./paint";

export type SceneKind = "hero" | "solar" | "blackhole" | "galaxy" | "body" | "web";

export interface SceneProps {
  kind: SceneKind;
  visual?: string;
  selected?: string;
  onSelect?: (id: string) => void;
  solarMode?: "orbit" | "size";
  reduced: boolean;
}

const PLANETS = [
  { id: "mercury", radiusKm: 2439.7, orbit: 6, color: "#b7b1a8", angle: 0.4 },
  { id: "venus", radiusKm: 6051.8, orbit: 8, color: "#e6d3a1", angle: 1.4 },
  { id: "earth", radiusKm: 6371, orbit: 10.2, color: "#6f8fbf", angle: 2.2 },
  { id: "mars", radiusKm: 3389.5, orbit: 12.4, color: "#c4653a", angle: 3.1 },
  { id: "jupiter", radiusKm: 69911, orbit: 16.5, color: "#c9a27a", angle: 4.0 },
  { id: "saturn", radiusKm: 58232, orbit: 20.2, color: "#e6d2a8", angle: 5.1 },
  { id: "uranus", radiusKm: 25362, orbit: 23.6, color: "#b7ece8", angle: 0.9 },
  { id: "neptune", radiusKm: 24622, orbit: 27, color: "#2456c9", angle: 2.6 },
] as const;

function useTexture(kind: string) {
  const tex = useMemo(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 512;
    canvas.height = 256;
    const g = canvas.getContext("2d");
    if (!g) return null;
    paintBody(g, kind);
    const texture = new THREE.CanvasTexture(canvas);
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.wrapS = THREE.RepeatWrapping;
    return texture;
  }, [kind]);
  useEffect(() => () => tex?.dispose(), [tex]);
  return tex;
}

function Starfield({ count, radius }: { count: number; radius: number }) {
  const geo = useMemo(() => {
    const positions = new Float32Array(count * 3);
    let seed = 42;
    const rand = () => {
      seed = (seed + 0x6d2b79f5) | 0;
      let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
    for (let i = 0; i < count; i++) {
      const r = radius * (0.4 + rand() * 0.6);
      const theta = rand() * Math.PI * 2;
      const phi = Math.acos(2 * rand() - 1);
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.cos(phi) * 0.55;
      positions[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta);
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return geometry;
  }, [count, radius]);
  useEffect(() => () => geo.dispose(), [geo]);
  return (
    <points geometry={geo}>
      <pointsMaterial color="#f5f3ee" size={0.045} sizeAttenuation />
    </points>
  );
}

function Spin({ speed, reduced, children }: { speed: number; reduced: boolean; children: ReactNode }) {
  const ref = useRef<THREE.Group>(null);
  useFrame((_, delta) => {
    if (!ref.current || reduced) return;
    ref.current.rotation.y += Math.min(delta, 0.05) * speed;
  });
  return <group ref={ref}>{children}</group>;
}

function TexturedSphere({
  kind,
  radius,
  emissive,
}: {
  kind: string;
  radius: number;
  emissive?: string;
}) {
  const map = useTexture(kind);
  return (
    <mesh>
      <sphereGeometry args={[radius, 48, 32]} />
      <meshStandardMaterial
        map={map ?? undefined}
        color={map ? "#ffffff" : "#ff653e"}
        roughness={0.85}
        metalness={0.02}
        emissive={emissive ?? "#000000"}
        emissiveIntensity={emissive ? 0.45 : 0}
      />
    </mesh>
  );
}

function HeroScene({ reduced }: { reduced: boolean }) {
  const body = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (!body.current || reduced) return;
    body.current.rotation.y += Math.min(delta, 0.05) * 0.08;
  });
  return (
    <>
      <color attach="background" args={["#050607"]} />
      <fog attach="fog" args={["#050607", 8, 28]} />
      <ambientLight intensity={0.15} />
      <pointLight position={[4, 2, 4]} intensity={40} color="#ffb86b" />
      <Starfield count={900} radius={22} />
      <mesh ref={body} position={[3.1, 0.4, -2]}>
        <sphereGeometry args={[3.1, 64, 48]} />
        <meshStandardMaterial color="#ff653e" emissive="#ff653e" emissiveIntensity={0.55} roughness={0.72} />
      </mesh>
      <mesh position={[3.1, 0.4, -2]} scale={1.18}>
        <sphereGeometry args={[3.1, 32, 24]} />
        <meshBasicMaterial color="#ffb86b" transparent opacity={0.12} side={THREE.BackSide} />
      </mesh>
      <mesh rotation={[-Math.PI / 2.15, 0, 0.1]} position={[0, -2.15, 1]}>
        <circleGeometry args={[18, 48]} />
        <meshStandardMaterial color="#101216" roughness={1} />
      </mesh>
      <group position={[-2.35, -1.05, 2.4]} scale={0.16}>
        <mesh position={[0, 1.6, 0]}>
          <capsuleGeometry args={[0.42, 1.3, 4, 8]} />
          <meshBasicMaterial color="#050607" />
        </mesh>
        <mesh position={[0, 2.85, 0]}>
          <sphereGeometry args={[0.42, 12, 12]} />
          <meshBasicMaterial color="#050607" />
        </mesh>
      </group>
    </>
  );
}

function OrbitRing({ radius }: { radius: number }) {
  const geo = useMemo(() => {
    const points: THREE.Vector3[] = [];
    for (let i = 0; i <= 128; i++) {
      const a = (i / 128) * Math.PI * 2;
      points.push(new THREE.Vector3(Math.cos(a) * radius, 0, Math.sin(a) * radius));
    }
    return new THREE.BufferGeometry().setFromPoints(points);
  }, [radius]);
  useEffect(() => () => geo.dispose(), [geo]);
  return (
    <lineLoop geometry={geo}>
      <lineBasicMaterial color="#79d8ff" transparent opacity={0.35} />
    </lineLoop>
  );
}

function SolarScene({
  mode,
  selected,
  onSelect,
  reduced,
}: {
  mode: "orbit" | "size";
  selected?: string;
  onSelect?: (id: string) => void;
  reduced: boolean;
}) {
  const focus = useMemo(() => {
    if (mode === "size" || !selected || selected === "sun") return [0, 0, 0] as [number, number, number];
    const planet = PLANETS.find((item) => item.id === selected);
    if (!planet) return [0, 0, 0] as [number, number, number];
    return [Math.cos(planet.angle) * planet.orbit, 0, Math.sin(planet.angle) * planet.orbit] as [number, number, number];
  }, [mode, selected]);
  const controls = useRef<{ target: THREE.Vector3; update: () => void } | null>(null);
  const dest = useRef(new THREE.Vector3());
  useFrame(() => {
    if (!controls.current) return;
    dest.current.set(focus[0], focus[1], focus[2]);
    controls.current.target.lerp(dest.current, reduced ? 1 : 0.08);
    controls.current.update();
  });

  return (
    <>
      <color attach="background" args={["#050607"]} />
      <ambientLight intensity={0.25} />
      <pointLight position={[0, 0, 0]} intensity={80} color="#ffb86b" distance={80} />
      <Starfield count={500} radius={40} />
      <OrbitControls ref={controls as never} enablePan={false} minDistance={4} maxDistance={70} />
      {mode === "orbit" ? (
        <group>
          <mesh onClick={(event) => { event.stopPropagation(); onSelect?.("sun"); }}>
            <sphereGeometry args={[1.7, 32, 24]} />
            <meshStandardMaterial color="#ff653e" emissive="#ff653e" emissiveIntensity={0.8} />
          </mesh>
          {PLANETS.map((planet) => {
            const boost = 0.18 + (planet.radiusKm / 69911) * 0.85;
            const x = Math.cos(planet.angle) * planet.orbit;
            const z = Math.sin(planet.angle) * planet.orbit;
            return (
              <group key={planet.id}>
                <OrbitRing radius={planet.orbit} />
                <mesh
                  position={[x, 0, z]}
                  onClick={(event) => {
                    event.stopPropagation();
                    onSelect?.(planet.id);
                  }}
                >
                  <sphereGeometry args={[boost, 24, 16]} />
                  <meshStandardMaterial
                    color={planet.color}
                    emissive={selected === planet.id ? "#79d8ff" : "#000000"}
                    emissiveIntensity={selected === planet.id ? 0.35 : 0}
                  />
                  {planet.id === "saturn" && (
                    <mesh rotation={[1.2, 0, 0]}>
                      <ringGeometry args={[boost * 1.4, boost * 2.3, 48]} />
                      <meshBasicMaterial color="#ffb86b" side={THREE.DoubleSide} transparent opacity={0.8} />
                    </mesh>
                  )}
                </mesh>
              </group>
            );
          })}
        </group>
      ) : (
        <SizeRow selected={selected} onSelect={onSelect} />
      )}
    </>
  );
}

function SizeRow({ selected, onSelect }: { selected?: string; onSelect?: (id: string) => void }) {
  const max = 69911;
  let cursor = -8;
  return (
    <group>
      {PLANETS.map((planet) => {
        const radius = Math.max(0.08, (planet.radiusKm / max) * 3.2);
        const x = cursor + radius;
        cursor += radius * 2 + 0.35;
        return (
          <mesh
            key={planet.id}
            position={[x, 0, 0]}
            onClick={(event) => {
              event.stopPropagation();
              onSelect?.(planet.id);
            }}
          >
            <sphereGeometry args={[radius, 28, 18]} />
            <meshStandardMaterial
              color={planet.color}
              emissive={selected === planet.id ? "#79d8ff" : "#000000"}
              emissiveIntensity={selected === planet.id ? 0.4 : 0}
            />
          </mesh>
        );
      })}
    </group>
  );
}

function BlackHoleScene({ reduced }: { reduced: boolean }) {
  const disk = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (!disk.current || reduced) return;
    disk.current.rotation.z += Math.min(delta, 0.05) * 0.25;
  });
  return (
    <>
      <color attach="background" args={["#050607"]} />
      <ambientLight intensity={0.2} />
      <Starfield count={700} radius={18} />
      <OrbitControls enablePan={false} minDistance={3} maxDistance={12} />
      <mesh>
        <sphereGeometry args={[0.72, 48, 32]} />
        <meshBasicMaterial color="#000000" />
      </mesh>
      <group rotation={[1.15, 0.2, 0]}>
        <mesh ref={disk}>
          <ringGeometry args={[1.15, 2.8, 96]} />
          <meshBasicMaterial color="#ff653e" side={THREE.DoubleSide} transparent opacity={0.92} />
        </mesh>
        <mesh rotation={[0, 0, 0.4]}>
          <ringGeometry args={[1.02, 1.18, 80]} />
          <meshBasicMaterial color="#ffb86b" side={THREE.DoubleSide} />
        </mesh>
      </group>
    </>
  );
}

function spiralGeometry(seed: number, count: number, arms: number) {
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  let s = seed;
  const rand = () => {
    s = (s + 0x6d2b79f5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
  for (let i = 0; i < count; i++) {
    const arm = i % arms;
    const f = i / count;
    const theta = f * Math.PI * 5 + (arm * Math.PI * 2) / arms;
    const r = 0.15 + f * 5.2 + (rand() - 0.5) * 0.35;
    positions[i * 3] = Math.cos(theta) * r;
    positions[i * 3 + 1] = (rand() - 0.5) * 0.22 * (1 - f);
    positions[i * 3 + 2] = Math.sin(theta) * r;
    const warm = rand();
    colors[i * 3] = 0.85 + warm * 0.15;
    colors[i * 3 + 1] = 0.78;
    colors[i * 3 + 2] = 0.7 + (1 - warm) * 0.2;
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
  return geo;
}

function GalaxyScene({ reduced, irregular }: { reduced: boolean; irregular?: boolean }) {
  const geo = useMemo(() => spiralGeometry(7, irregular ? 1600 : 4200, irregular ? 1 : 2), [irregular]);
  const ref = useRef<THREE.Points>(null);
  useEffect(() => () => geo.dispose(), [geo]);
  useFrame((_, delta) => {
    if (!ref.current || reduced) return;
    ref.current.rotation.y += Math.min(delta, 0.05) * 0.05;
  });
  return (
    <>
      <color attach="background" args={["#050607"]} />
      <OrbitControls enablePan={false} minDistance={3} maxDistance={18} />
      <points ref={ref} geometry={geo}>
        <pointsMaterial size={0.035} vertexColors sizeAttenuation />
      </points>
    </>
  );
}

function WebScene() {
  const geo = useMemo(() => {
    const count = 900;
    const positions = new Float32Array(count * 3);
    let seed = 3;
    const rand = () => {
      seed = (seed + 0x6d2b79f5) | 0;
      let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
    for (let i = 0; i < count; i++) {
      const filament = rand();
      const along = rand() * 10 - 5;
      const scatter = (rand() - 0.5) * (filament > 0.72 ? 2.4 : 0.35);
      positions[i * 3] = along + scatter;
      positions[i * 3 + 1] = (rand() - 0.5) * (filament > 0.72 ? 2.2 : 0.4);
      positions[i * 3 + 2] = Math.sin(along * 0.7) * 2 + scatter;
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return geometry;
  }, []);
  useEffect(() => () => geo.dispose(), [geo]);
  return (
    <>
      <color attach="background" args={["#050607"]} />
      <OrbitControls enablePan={false} />
      <points geometry={geo}>
        <pointsMaterial color="#79d8ff" size={0.04} sizeAttenuation />
      </points>
    </>
  );
}

function BodyScene({ visual, reduced }: { visual: string; reduced: boolean }) {
  const irregular = visual === "asteroid" || visual === "phobos" || visual === "comet";
  return (
    <>
      <color attach="background" args={["#050607"]} />
      <ambientLight intensity={0.35} />
      <directionalLight position={[4, 2, 3]} intensity={2} />
      <Starfield count={300} radius={12} />
      <OrbitControls enablePan={false} minDistance={2.2} maxDistance={8} />
      <Spin speed={0.25} reduced={reduced}>
        {visual === "black-hole" ? (
          <BlackHoleInner />
        ) : irregular ? (
          <mesh scale={visual === "comet" ? [1.4, 0.7, 0.8] : [1.3, 0.9, 1.1]}>
            <dodecahedronGeometry args={[1, 0]} />
            <meshStandardMaterial color="#8a8175" roughness={1} />
          </mesh>
        ) : visual === "galaxy-spiral" || visual === "galaxy-barred" ? (
          <GalaxyPoints />
        ) : visual === "galaxy-irregular" ? (
          <GalaxyPoints irregular />
        ) : visual === "nebula-emission" || visual === "nebula-planetary" || visual === "nebula-remnant" || visual === "cluster" ? (
          <NebulaCloud tone={visual} />
        ) : visual === "neutron" ? (
          <mesh>
            <sphereGeometry args={[0.45, 32, 24]} />
            <meshStandardMaterial color="#d9e7ff" emissive="#79d8ff" emissiveIntensity={0.6} />
          </mesh>
        ) : (
          <TexturedSphere
            kind={visual}
            radius={1.35}
            emissive={visual === "sun" || visual === "star" || visual === "red-giant" ? "#ff653e" : undefined}
          />
        )}
        {visual === "saturn" && (
          <mesh rotation={[1.2, 0, 0]}>
            <ringGeometry args={[1.9, 2.8, 64]} />
            <meshBasicMaterial color="#ffb86b" side={THREE.DoubleSide} transparent opacity={0.85} />
          </mesh>
        )}
      </Spin>
    </>
  );
}

function BlackHoleInner() {
  return (
    <group>
      <mesh>
        <sphereGeometry args={[0.55, 32, 24]} />
        <meshBasicMaterial color="#000000" />
      </mesh>
      <mesh rotation={[1.1, 0.15, 0]}>
        <ringGeometry args={[0.85, 2.1, 80]} />
        <meshBasicMaterial color="#ff653e" side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
}

function GalaxyPoints({ irregular }: { irregular?: boolean }) {
  const geo = useMemo(() => spiralGeometry(11, irregular ? 800 : 1800, irregular ? 1 : 2), [irregular]);
  useEffect(() => () => geo.dispose(), [geo]);
  return (
    <points geometry={geo}>
      <pointsMaterial size={0.03} vertexColors />
    </points>
  );
}

function NebulaCloud({ tone }: { tone: string }) {
  const geo = useMemo(() => {
    const count = 1200;
    const positions = new Float32Array(count * 3);
    let seed = tone.length * 13;
    const rand = () => {
      seed = (seed + 0x6d2b79f5) | 0;
      let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
    for (let i = 0; i < count; i++) {
      const r = Math.pow(rand(), 0.6) * 2.2;
      const a = rand() * Math.PI * 2;
      positions[i * 3] = Math.cos(a) * r;
      positions[i * 3 + 1] = (rand() - 0.5) * r;
      positions[i * 3 + 2] = Math.sin(a) * r * 0.6;
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return geometry;
  }, [tone]);
  useEffect(() => () => geo.dispose(), [geo]);
  const color = tone === "nebula-planetary" ? "#79d8ff" : tone === "nebula-remnant" ? "#ffb86b" : "#ff653e";
  return (
    <points geometry={geo}>
      <pointsMaterial color={color} size={0.045} transparent opacity={0.85} />
    </points>
  );
}

function SceneBody(props: SceneProps) {
  if (props.kind === "hero") return <HeroScene reduced={props.reduced} />;
  if (props.kind === "solar") {
    return (
      <SolarScene
        mode={props.solarMode ?? "orbit"}
        selected={props.selected}
        onSelect={props.onSelect}
        reduced={props.reduced}
      />
    );
  }
  if (props.kind === "blackhole") return <BlackHoleScene reduced={props.reduced} />;
  if (props.kind === "galaxy") return <GalaxyScene reduced={props.reduced} />;
  if (props.kind === "web") return <WebScene />;
  return <BodyScene visual={props.visual ?? "earth"} reduced={props.reduced} />;
}

export default function SceneCanvas(props: SceneProps) {
  return (
    <Canvas
      camera={{ position: props.kind === "hero" ? [0, 0.4, 7.2] : [0, 2.2, 8], fov: props.kind === "hero" ? 42 : 50 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: props.kind === "hero", powerPreference: "default" }}
    >
      <SceneBody {...props} />
    </Canvas>
  );
}
