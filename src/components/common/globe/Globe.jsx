import React, { useEffect, useRef, useState } from "react";

const Globe = () => {
  const canvasRef = useRef(null);
  const [shapeIndex, setShapeIndex] = useState(0);

  const STATES = ["globe", "gear", "face", "spiral"];
  const CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<>/{}[]!@#$%^&*".split("");
  const TOTAL_POINTS = 700;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationId;

    const size = Math.min(500, window.innerWidth * 0.9);
    canvas.width = size;
    canvas.height = size;
    const centerX = size / 2;
    const centerY = size / 2;
    const fontSize = size < 400 ? 12 : 14;
    ctx.font = `${fontSize}px monospace`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    let points = [];

    const getGlobePoints = () => {
      const coords = [];
      for (let i = 0; i < TOTAL_POINTS; i++) {
        const lat = Math.acos(2 * Math.random() - 1) - Math.PI / 2;
        const lon = 2 * Math.PI * Math.random();
        const r = (size / 2) * 0.75;
        const x = centerX + r * Math.cos(lat) * Math.cos(lon);
        const y = centerY + r * Math.cos(lat) * Math.sin(lon);
        coords.push({ x, y });
      }
      return coords;
    };

    const getGearShape = () => {
      const coords = [];
      const teeth = 12;
      const inner = 100;
      const outer = 130;
      for (let i = 0; i < TOTAL_POINTS; i++) {
        const t = (i / TOTAL_POINTS) * 2 * Math.PI;
        const r = i % 2 === 0 ? outer : inner;
        const x = centerX + r * Math.cos(t);
        const y = centerY + r * Math.sin(t);
        coords.push({ x, y });
      }
      return coords;
    };

    const getFaceShape = () => {
      const coords = [];

      // Eyes
      for (let a = 0; a < Math.PI * 2; a += 0.15) {
        coords.push({ x: centerX - 60 + 10 * Math.cos(a), y: centerY - 30 + 10 * Math.sin(a) });
        coords.push({ x: centerX + 60 + 10 * Math.cos(a), y: centerY - 30 + 10 * Math.sin(a) });
      }

      // Smile
      for (let a = 0; a < Math.PI; a += 0.1) {
        coords.push({ x: centerX + 40 * Math.cos(a), y: centerY + 40 * Math.sin(a) });
      }

      // Brackets as glasses
      for (let y = -20; y <= 20; y += 5) {
        coords.push({ x: centerX - 80, y: centerY + y });
        coords.push({ x: centerX + 80, y: centerY + y });
      }

      return coords;
    };

    const getSpiral = () => {
      const coords = [];
      const spiralTurns = 4;
      for (let i = 0; i < TOTAL_POINTS; i++) {
        const angle = 0.2 * i;
        const radius = 5 + i * 0.5;
        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);
        coords.push({ x, y });
      }
      return coords;
    };

    function getShapeCoords(type) {
      if (type === "globe") return getGlobePoints();
      if (type === "gear") return getGearShape();
      if (type === "face") return getFaceShape();
      if (type === "spiral") return getSpiral();
      return [];
    }

    points = Array.from({ length: TOTAL_POINTS }, () => ({
      x: Math.random() * size,
      y: Math.random() * size,
      tx: 0,
      ty: 0,
      vx: 0,
      vy: 0,
      char: CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)],
    }));

    function updateTargets() {
      const shape = STATES[shapeIndex];
      const targetPoints = getShapeCoords(shape);
      for (let i = 0; i < points.length; i++) {
        const p = points[i];
        const target = targetPoints[i % targetPoints.length];
        p.tx = target.x;
        p.ty = target.y;
      }
    }

    updateTargets();

    const animate = () => {
      ctx.clearRect(0, 0, size, size);

      points.forEach((p) => {
        const dx = p.tx - p.x;
        const dy = p.ty - p.y;
        p.vx += dx * 0.04;
        p.vy += dy * 0.04;
        p.vx *= 0.7;
        p.vy *= 0.7;
        p.x += p.vx;
        p.y += p.vy;

        ctx.fillStyle = "rgba(59,130,246,0.85)";
        ctx.fillText(p.char, p.x, p.y);
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    const handleClick = () => {
      setShapeIndex((prev) => (prev + 1) % STATES.length);
    };

    canvas.addEventListener("click", handleClick);
    return () => {
      cancelAnimationFrame(animationId);
      canvas.removeEventListener("click", handleClick);
    };
  }, [shapeIndex]);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <canvas ref={canvasRef} className="block cursor-pointer" />
    </div>
  );
};

export default Globe;
