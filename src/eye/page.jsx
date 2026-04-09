"use client";
import { useEffect, useRef } from "react";

export default function ReadyToStart() {
  const leftEyeRef = useRef(null);
  const rightEyeRef = useRef(null);

  useEffect(() => {
    const moveEyes = (e) => {
      [leftEyeRef, rightEyeRef].forEach((ref) => {
        if (!ref.current) return;
        const eye = ref.current;
        const rect = eye.getBoundingClientRect();
        const eyeCX = rect.left + rect.width / 2;
        const eyeCY = rect.top + rect.height / 2;
        const dx = e.clientX - eyeCX;
        const dy = e.clientY - eyeCY;
        const angle = Math.atan2(dy, dx);
        const dist = Math.min(Math.hypot(dx, dy), 22);
        const px = Math.cos(angle) * dist;
        const py = Math.sin(angle) * dist;
        const pupil = eye.querySelector(".pupil");
        if (pupil) {
          pupil.style.transform = `translate(${px}px, ${py}px)`;
        }
      });
    };
    window.addEventListener("mousemove", moveEyes);
    return () => window.removeEventListener("mousemove", moveEyes);
  }, []);

  const Eye = ({ refProp }) => (
    <div
      ref={refProp}
      style={{
        width: "clamp(110px, 13vw, 190px)",
        height: "clamp(110px, 13vw, 190px)",
        borderRadius: "50%",
        backgroundColor: "#f0f0ee",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      <div
        className="pupil"
        style={{
          width: "62%",
          height: "62%",
          borderRadius: "50%",
          backgroundColor: "#1a1a1a",
          transition: "transform 0.07s ease-out",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "12%",
            left: "16%",
            width: "26%",
            height: "26%",
            borderRadius: "50%",
            backgroundColor: "#f0f0ee",
          }}
        />
      </div>
    </div>
  );

  const textStyle = {
    fontSize: "clamp(80px, 14.5vw, 220px)",
    fontWeight: "900",
    color: "#1a1a1a",
    fontFamily: "'Inter', 'Arial Black', sans-serif",
    letterSpacing: "-4px",
    lineHeight: 0.9,
    textTransform: "uppercase",
    textAlign: "center",
    display: "block",
    width: "100%",
  };

  return (
    <section
      style={{
        backgroundColor: "#c8f135",
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "60px 24px 80px",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1300px",
          textAlign: "center",
          position: "relative",
        }}
      >
        {/* READY row */}
        <div
          style={{
            position: "relative",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* READY text behind */}
          <span style={{ ...textStyle, position: "absolute", zIndex: 0 }}>
            READY
          </span>

          {/* Eyes on top, perfectly centered */}
          <div
            style={{
              position: "relative",
              zIndex: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "clamp(8px, 1.5vw, 20px)",
              padding: "clamp(10px, 2vw, 24px) 0",
            }}
          >
            <Eye refProp={leftEyeRef} />
            <Eye refProp={rightEyeRef} />
          </div>
        </div>

        {/* TO START */}
        <span style={{ ...textStyle, marginTop: "-4px" }}>TO START</span>

        {/* THE PROJECT? */}
        <span style={{ ...textStyle, marginTop: "-4px" }}>THE PROJECT?</span>
      </div>

      {/* CTA Buttons */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "16px",
          marginTop: "56px",
        }}
      >
        <button
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            backgroundColor: "#1a1a1a",
            color: "#ffffff",
            border: "none",
            borderRadius: "999px",
            padding: "18px 36px",
            fontSize: "12px",
            fontWeight: "600",
            letterSpacing: "0.14em",
            fontFamily: "sans-serif",
            cursor: "pointer",
            whiteSpace: "nowrap",
          }}
        >
          START THE PROJECT
          <span
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              backgroundColor: "#c8f135",
              flexShrink: 0,
            }}
          />
        </button>

        <span
          style={{
            fontSize: "12px",
            fontWeight: "500",
            color: "#1a1a1a",
            letterSpacing: "0.1em",
            fontFamily: "sans-serif",
          }}
        >
          OR
        </span>

        <button
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            backgroundColor: "transparent",
            color: "#1a1a1a",
            border: "1.5px solid #1a1a1a",
            borderRadius: "999px",
            padding: "18px 36px",
            fontSize: "12px",
            fontWeight: "600",
            letterSpacing: "0.14em",
            fontFamily: "sans-serif",
            cursor: "pointer",
            whiteSpace: "nowrap",
          }}
        >
          HELLO@OCHI.DESIGN
          <span
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              backgroundColor: "#1a1a1a",
              flexShrink: 0,
            }}
          />
        </button>
      </div>
    </section>
  );     
}