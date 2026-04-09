"use client";
import { useEffect, useRef } from "react";

export default function EyeSection() {
  const pupil1Ref = useRef(null);
  const pupil2Ref = useRef(null);
  const eye1Ref = useRef(null);
  const eye2Ref = useRef(null);
     
  useEffect(() => {
    const pairs = [
      { pupil: pupil1Ref.current, eye: eye1Ref.current },
      { pupil: pupil2Ref.current, eye: eye2Ref.current },
    ];

    const onMove = (mx, my) => {
      pairs.forEach(({ pupil, eye }) => {
        if (!pupil || !eye) return;
        const er = eye.getBoundingClientRect();
        const ecx = er.left + er.width / 2;
        const ecy = er.top + er.height / 2;
        const dx = mx - ecx;
        const dy = my - ecy;
        const angle = Math.atan2(dy, dx);
        const maxMove = er.width * 0.18;
        const dist = Math.min(Math.sqrt(dx * dx + dy * dy), er.width * 0.6);
        const move = (dist / (er.width * 0.6)) * maxMove;
        pupil.style.transform = `translate(${Math.cos(angle) * move}px, ${Math.sin(angle) * move}px)`;
      });
    };

    const handleMouse = (e) => onMove(e.clientX, e.clientY);
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  const eyeOuter = {
    width: "clamp(110px, 18vw, 200px)",
    height: "clamp(110px, 18vw, 200px)",
    background: "#f0eeea",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    flexShrink: 0,
  };

  const pupilWrap = {
    position: "absolute",
    width: "58%",
    height: "58%",
    borderRadius: "50%",
    willChange: "transform",
    transition: "transform 0.05s ease-out",
  };

  return (
    <div style={{
      width: "100%",
      aspectRatio: "16/7",
      background: "#0d6b5a",
      borderRadius: "12px",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Decorative dots */}
      {[
        { w: "9%", t: "55%", l: "27%", c: "#b5e832" },
        { w: "7%", t: "72%", l: "43%", c: "#d4f53c" },
        { w: "9%", t: "68%", l: "59%", c: "#b5e832" },
        { w: "8%", t: "15%", l: "76%", c: "#b5e832" },
        { w: "5%", t: "40%", l: "10%", c: "#c8f135" },
      ].map((d, i) => (
        <div key={i} style={{
          position: "absolute", borderRadius: "50%",
          width: d.w, aspectRatio: "1",
          background: d.c, top: d.t, left: d.l,
        }} />
      ))}

      {/* Eyes */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", alignItems: "center",
        justifyContent: "center", gap: "8%",
      }}>
        {[
          { eyeRef: eye1Ref, pupilRef: pupil1Ref },
          { eyeRef: eye2Ref, pupilRef: pupil2Ref },
        ].map(({ eyeRef, pupilRef }, i) => (
          <div key={i} ref={eyeRef} style={eyeOuter}>
            <div ref={pupilRef} style={pupilWrap}>
              <div style={{
                width: "100%", height: "100%",
                background: "#1a1a1a", borderRadius: "50%",
                display: "flex", alignItems: "center",
                justifyContent: "center", position: "relative",
              }}>
                <div style={{
                  position: "absolute", top: "14%", left: "14%",
                  width: "18%", height: "18%",
                  background: "white", borderRadius: "50%",
                }} />
                <span style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "clamp(9px, 1.4vw, 16px)",
                  fontWeight: 500, color: "white", letterSpacing: "1px",
                }}>PLAY</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}