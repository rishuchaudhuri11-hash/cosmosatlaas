import { Component, useEffect, useState, type ReactNode } from "react";
import type { SceneProps } from "./scenes";
import { useReducedMotion } from "@/lib/motion";

class Boundary extends Component<{ children: ReactNode; fallback: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    return this.state.failed ? this.props.fallback : this.props.children;
  }
}

function Fallback({ label }: { label: string }) {
  return (
    <div className="flex h-full w-full items-end bg-midnight p-4">
      <p className="max-w-md text-sm text-mist">{label}</p>
    </div>
  );
}

export function SpaceHost(props: Omit<SceneProps, "reduced"> & { label: string }) {
  const reduced = useReducedMotion();
  const [Canvas, setCanvas] = useState<((p: SceneProps) => ReactNode) | null>(null);
  const [blocked, setBlocked] = useState(false);

  useEffect(() => {
    let live = true;
    const probe = document.createElement("canvas");
    const gl = probe.getContext("webgl2") || probe.getContext("webgl");
    if (!gl) {
      setBlocked(true);
      return;
    }
    import("./scenes")
      .then((mod) => {
        if (live) setCanvas(() => mod.default);
      })
      .catch(() => {
        if (live) setBlocked(true);
      });
    return () => {
      live = false;
    };
  }, []);

  if (blocked) return <Fallback label={props.label} />;

  return (
    <Boundary fallback={<Fallback label={props.label} />}>
      {Canvas ? <Canvas {...props} reduced={reduced} /> : <Fallback label="Preparing the 3D view. The text on this page stands on its own if the view cannot start." />}
    </Boundary>
  );
}
