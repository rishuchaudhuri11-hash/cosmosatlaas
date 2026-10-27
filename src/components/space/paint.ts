export function paintBody(g: CanvasRenderingContext2D, kind: string) {
  const w = 512;
  const h = 256;
  const band = (y0: number, y1: number, color: string) => {
    g.fillStyle = color;
    g.fillRect(0, y0, w, y1 - y0);
  };

  if (kind === "sun" || kind === "star") {
    const glow = g.createLinearGradient(0, 0, 0, h);
    glow.addColorStop(0, "#ffb86b");
    glow.addColorStop(0.5, "#ff653e");
    glow.addColorStop(1, "#c4381c");
    g.fillStyle = glow;
    g.fillRect(0, 0, w, h);
    g.fillStyle = "rgba(90, 20, 8, 0.35)";
    for (let i = 0; i < 18; i++) g.fillRect((i * 97) % w, (i * 53) % h, 28, 14);
    return;
  }
  if (kind === "red-giant") {
    g.fillStyle = "#8c2a22";
    g.fillRect(0, 0, w, h);
    g.fillStyle = "rgba(255, 184, 107, 0.35)";
    for (let i = 0; i < 30; i++) g.fillRect((i * 61) % w, (i * 37) % h, 40, 18);
    return;
  }
  if (kind === "mercury" || kind === "moon" || kind === "callisto") {
    g.fillStyle = kind === "callisto" ? "#6d675f" : "#b7b1a8";
    g.fillRect(0, 0, w, h);
    g.fillStyle = "rgba(40, 36, 32, 0.45)";
    for (let i = 0; i < 40; i++) {
      g.beginPath();
      g.arc((i * 80) % w, (i * 47) % h, 4 + (i % 7), 0, Math.PI * 2);
      g.fill();
    }
    return;
  }
  if (kind === "venus" || kind === "titan") {
    const y = g.createLinearGradient(0, 0, 0, h);
    y.addColorStop(0, kind === "titan" ? "#e38b3a" : "#f0d7a0");
    y.addColorStop(1, kind === "titan" ? "#a35320" : "#c9a15a");
    g.fillStyle = y;
    g.fillRect(0, 0, w, h);
    g.fillStyle = "rgba(255,255,255,0.15)";
    g.fillRect(0, 40, w, 18);
    g.fillRect(0, 120, w, 28);
    return;
  }
  if (kind === "earth") {
    g.fillStyle = "#1d4e89";
    g.fillRect(0, 0, w, h);
    g.fillStyle = "#6f8f4e";
    g.beginPath();
    g.ellipse(120, 90, 50, 34, 0.4, 0, Math.PI * 2);
    g.ellipse(150, 130, 28, 40, 0.2, 0, Math.PI * 2);
    g.ellipse(300, 110, 70, 36, -0.2, 0, Math.PI * 2);
    g.ellipse(390, 150, 36, 24, 0.5, 0, Math.PI * 2);
    g.fill();
    g.fillStyle = "rgba(245,243,238,0.85)";
    g.fillRect(0, 0, w, 16);
    g.fillRect(0, h - 16, w, 16);
    return;
  }
  if (kind === "mars" || kind === "io") {
    g.fillStyle = kind === "io" ? "#e2b15a" : "#c4653a";
    g.fillRect(0, 0, w, h);
    g.fillStyle = kind === "io" ? "rgba(160, 50, 20, 0.45)" : "rgba(90, 30, 16, 0.4)";
    for (let i = 0; i < 26; i++) {
      g.beginPath();
      g.ellipse((i * 73) % w, (i * 41) % h, 18, 8, i, 0, Math.PI * 2);
      g.fill();
    }
    if (kind === "mars") {
      g.fillStyle = "#f5f3ee";
      g.fillRect(0, 0, w, 18);
      g.fillRect(0, h - 14, w, 14);
    }
    return;
  }
  if (kind === "jupiter" || kind === "saturn") {
    const colors = kind === "saturn"
      ? ["#e6d2a8", "#c8a36a", "#f0e2c4", "#b8894e", "#efe6d2"]
      : ["#c9a27a", "#efe6d2", "#a86b45", "#d8c4a4", "#8c4e32"];
    colors.forEach((color, i) => band((h / colors.length) * i, (h / colors.length) * (i + 1) + 2, color));
    if (kind === "jupiter") {
      g.fillStyle = "#a33b32";
      g.beginPath();
      g.ellipse(180, 150, 28, 16, 0, 0, Math.PI * 2);
      g.fill();
    }
    return;
  }
  if (kind === "uranus" || kind === "neptune" || kind === "europa" || kind === "enceladus") {
    g.fillStyle = kind === "neptune" ? "#2456c9" : kind === "uranus" ? "#b7ece8" : kind === "enceladus" ? "#f4f7fb" : "#d5e4ef";
    g.fillRect(0, 0, w, h);
    if (kind === "europa") {
      g.strokeStyle = "rgba(90, 110, 130, 0.8)";
      g.lineWidth = 2;
      for (let i = 0; i < 8; i++) {
        g.beginPath();
        g.moveTo(0, 20 + i * 28);
        g.bezierCurveTo(120, 40 + i * 20, 280, i * 12, 512, 30 + i * 24);
        g.stroke();
      }
    }
    return;
  }
  if (kind === "ganymede" || kind === "triton" || kind === "ceres" || kind === "pluto") {
    g.fillStyle = kind === "triton" ? "#d7c4d4" : kind === "pluto" ? "#d7c3a4" : "#8d8478";
    g.fillRect(0, 0, w, h);
    if (kind === "pluto") {
      g.fillStyle = "#f3efe4";
      g.beginPath();
      g.ellipse(230, 140, 50, 36, -0.4, 0, Math.PI * 2);
      g.fill();
    }
    return;
  }
  if (kind === "exoplanet") {
    g.fillStyle = "#3d4e68";
    g.fillRect(0, 0, w, h);
    g.fillStyle = "rgba(121, 216, 255, 0.25)";
    g.fillRect(0, 70, w, 40);
    return;
  }
  g.fillStyle = "#2a2e36";
  g.fillRect(0, 0, w, h);
}
