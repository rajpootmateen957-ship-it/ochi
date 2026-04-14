import { useEffect, useRef, useState } from "react";

function Eye({ mouseX, mouseY, size = 150 }) {
  const eyeRef = useRef(null);
  const [dotPos, setDotPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!eyeRef.current) return;
    const rect = eyeRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const dx = mouseX - centerX;
    const dy = mouseY - centerY;

    const dist = Math.sqrt(dx * dx + dy * dy);

    // normalize direction
    const nx = dist === 0 ? 0 : dx / dist;
    const ny = dist === 0 ? 0 : dy / dist;

    const maxDist = size * 0.22; // FULL movement inside black circle

    setDotPos({
      x: nx * maxDist,
      y: ny * maxDist,
    });
  }, [mouseX, mouseY, size]);

  const innerBlackSize = size * 0.68;
  const whiteDotSize = size * 0.08;

  return (
    <div
      ref={eyeRef}
      className="rounded-full flex items-center justify-center flex-shrink-0"
      style={{
        width: size,
        height: size,
        background: "white",
        position: "relative",
      }}
    >
      {/* Fixed black circle */}
      <div
        style={{
          width: innerBlackSize,
          height: innerBlackSize,
          borderRadius: "50%",
          background: "#111",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Moving white dot (CENTER BASED) */}
        <div
          style={{
            position: "absolute",
            transform: `translate(${dotPos.x}px, ${dotPos.y}px)`,
            width: whiteDotSize,
            height: whiteDotSize,
            borderRadius: "50%",
            background: "white",
            transition: "transform 0.09s ease-out",
          }}
        />
      </div>
    </div>
  );
}

export default function Ready() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const eyeSize = 155;

  return (
    <section
      className="w-full min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
      style={{ background: "#c5e131" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@900&display=swap');
        .ready-font {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 900;
          text-transform: uppercase;
          color: #111;
          line-height: 0.88;
          letter-spacing: -0.01em;
        }
      `}</style>

      <div className="flex flex-col items-center select-none" style={{ gap: 0 }}>

        <div className="flex items-center justify-center" style={{ gap: "0px" }}>
          <span className="ready-font" style={{ fontSize: "clamp(90px, 13vw, 180px)" }}>R</span>

          <div style={{ marginBottom: "-14px", marginLeft: "2px", marginRight: "2px" }}>
            <Eye mouseX={mouse.x} mouseY={mouse.y} size={eyeSize} />
          </div>

          <span className="ready-font" style={{ fontSize: "clamp(90px, 13vw, 180px)" }}>A</span>

          <div style={{ marginBottom: "-14px", marginLeft: "2px", marginRight: "2px" }}>
            <Eye mouseX={mouse.x} mouseY={mouse.y} size={eyeSize} />
          </div>

          <span className="ready-font" style={{ fontSize: "clamp(90px, 13vw, 180px)" }}>Y</span>
        </div>

        <div>
          <span className="ready-font" style={{ fontSize: "clamp(90px, 13vw, 180px)" }}>
            TO START
          </span>
        </div>

        <div>
          <span className="ready-font" style={{ fontSize: "clamp(90px, 13vw, 180px)" }}>
            THE PROJECT?
          </span>
        </div>
      </div>

      <div className="mt-14">
        <button
          className="flex items-center gap-4 rounded-full px-8 py-4 text-white font-semibold tracking-widest transition-all duration-300 hover:scale-105 hover:opacity-90 active:scale-95"
          style={{
            background: "#111",
            letterSpacing: "0.12em",
            fontSize: "13px",
          }}
        >
          START THE PROJECT
          <span
            className="rounded-full bg-white"
            style={{ width: 9, height: 9, display: "inline-block", flexShrink: 0 }}
          />
        </button>
      </div>
    </section>
  );
}