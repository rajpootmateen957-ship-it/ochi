import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/* ─── Fonts ─────────────────────────────────────────────────────────────── */
const FontLoader = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;800;900&family=Inter:wght@300;400;500&display=swap');
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    body { background: #f0ede8; font-family: 'Inter', sans-serif; overflow-x: hidden; }
   
    /* Marquee Animation */
    @keyframes marquee {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    .marquee-track {
      display: flex;
      width: max-content;
      animation: marquee 18s linear infinite;
    }
    .marquee-track:hover { animation-play-state: paused; }
  `}</style>
);

/* ─── 1. Green Marquee Section - Advanced Floating + Scroll Influence ───── */
function MarqueeSection() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Gentle floating combined with subtle scroll effect
  const y = useTransform(scrollYProgress, [0, 1], [0, -25]);

  return (
    <motion.section
      ref={ref}
      style={{ y }}
      animate={{
        y: [0, -35, 0],           // Smooth up and down floating
      }}
      transition={{
        duration: 7.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="relative z-10"
      style={{
        background: "#0f3d2e",
        overflow: "hidden",
        padding: "clamp(40px, 6vw, 70px) 0",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div style={{ overflow: "hidden" }}>
        <div className="marquee-track">
          {["OCHI", "WE ARE", "OCHI", "WE ARE", "OCHI", "WE ARE", "OCHI", "WE ARE"].map((t, i) => (
            <span
              key={i}
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(85px, 16vw, 195px)",
                textTransform: "uppercase",
                color: i % 2 === 0 ? "transparent" : "#fff",
                WebkitTextStroke: i % 2 === 0 ? "2px #fff" : "none",
                paddingRight: "clamp(40px, 7vw, 90px)",
                lineHeight: 0.82,
                whiteSpace: "nowrap",
                userSelect: "none",
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

/* ─── 2. Lime About Section - Strong Overlap + Coordinated Scroll Animation ─ */
function AboutSection() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Coordinated movement for perfect overlap feel
  const sectionY = useTransform(scrollYProgress, [0, 1], [-70, 45]);

  // Parallax for the image
  const imageY = useTransform(scrollYProgress, [0, 1], [100, -80]);

  return (
    <motion.section
      ref={ref}
      style={{ y: sectionY }}
      className="relative z-0"
      style={{
        background: "#c8e64c",
        padding: "clamp(70px, 9vw, 120px) clamp(24px, 7vw, 90px)",
        marginTop: "-85px",           // Strong visual overlap
        borderTop: "1px solid rgba(0,0,0,0.12)",
      }}
    >
      {/* Big Heading */}
      <h2
        style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 400,
          fontSize: "clamp(27px, 5.2vw, 56px)",
          lineHeight: 1.12,
          maxWidth: "940px",
          marginBottom: "clamp(55px, 8vw, 95px)",
          color: "#1a1a1a",
        }}
      >
        We craft category-defining presentations, brand identities, and digital
        experiences that{" "}
        <span style={{ textDecoration: "underline", textUnderlineOffset: "8px" }}>drive funding</span>,{" "}
        <span style={{ textDecoration: "underline", textUnderlineOffset: "8px" }}>sales</span>, and{" "}
        <span style={{ textDecoration: "underline", textUnderlineOffset: "8px" }}>market leadership</span>.
      </h2>

      {/* Divider */}
      <div style={{ borderTop: "1px solid rgba(0,0,0,0.18)", marginBottom: "clamp(45px, 7vw, 80px)" }} />

      {/* Expect Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "clamp(32px, 5vw, 65px)",
          marginBottom: "clamp(65px, 9vw, 110px)",
        }}
      >
        <p style={{ fontSize: "clamp(14.5px, 1.4vw, 17px)", lineHeight: 1.6, color: "#1a1a1a" }}>
          What you can expect:
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
          <p style={{ fontSize: "clamp(14.5px, 1.4vw, 17px)", lineHeight: 1.75, color: "#1a1a1a" }}>
            We don't just make slides. We shape strategy, storytelling, design scalable brand systems, and build presentations that make people say: "I want in!"
          </p>
          <p style={{ fontSize: "clamp(14.5px, 1.4vw, 17px)", lineHeight: 1.75, color: "#1a1a1a" }}>
            Our clients make the world go round – from deep tech, aerospace and robotics to music festivals and Michelin-starred restaurants.
          </p>
          <p style={{ fontSize: "clamp(14.5px, 1.4vw, 17px)", lineHeight: 1.75, color: "#1a1a1a" }}>
            Since 2019, we've been the go-to partner for Yahoo, Medallia, Uber, Lexus, Salience Labs, Trawa and AllThingsGo.
          </p>
        </div>

        <div>
          <p style={{ fontSize: 14, opacity: 0.65, marginBottom: 20 }}>S:</p>
          {["Instagram", "Behance", "Facebook", "Linkedin"].map((s) => (
            <a
              key={s}
              href="#"
              style={{
                display: "block",
                fontSize: "clamp(14.5px, 1.4vw, 17px)",
                color: "#1a1a1a",
                marginBottom: 14,
                textDecoration: "underline",
                textUnderlineOffset: 5,
              }}
            >
              {s}
            </a>
          ))}
        </div>
      </div>

      {/* How we can help + Image */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "clamp(40px, 6vw, 80px)",
          alignItems: "end",
        }}
      >
        <div>
          <h3
            style={{
              fontSize: "clamp(27px, 4.8vw, 48px)",
              lineHeight: 1.15,
              marginBottom: 36,
              color: "#1a1a1a",
            }}
          >
            How we can help:
          </h3>
          <button
            style={{
              background: "#1a1a1a",
              color: "#c8e64c",
              padding: "17px 34px",
              borderRadius: "9999px",
              fontSize: "13.5px",
              fontWeight: 500,
              letterSpacing: "0.6px",
              display: "inline-flex",
              alignItems: "center",
              gap: 12,
              border: "none",
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.04)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            READ MORE
            <span
              style={{
                width: 9,
                height: 9,
                background: "#c8e64c",
                borderRadius: "50%",
              }}
            />
          </button>
        </div>

        {/* Image with Parallax */}
        <div style={{ overflow: "hidden", borderRadius: 24 }}>
          <motion.div style={{ y: imageY }}>
            <div
              style={{
                width: "100%",
                aspectRatio: "16 / 9",
                background: "#b0b0a8",
                borderRadius: 24,
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Placeholder team image */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(160deg, #c8c8be 0%, #9a9a90 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div style={{ display: "flex", gap: 20, alignItems: "flex-end" }}>
                  <div style={{ textAlign: "center" }}>
                    <div style={{ width: 68, height: 68, borderRadius: "50%", background: "#1a1a1a", opacity: 0.75 }} />
                    <div style={{ width: 92, height: 135, background: "#1a1a1a", opacity: 0.75, borderRadius: "12px 12px 0 0", marginTop: -12 }} />
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <div style={{ width: 62, height: 62, borderRadius: "50%", background: "#1a1a1a", opacity: 0.68 }} />
                    <div style={{ width: 98, height: 122, background: "#1a1a1a", opacity: 0.68, borderRadius: "12px 12px 0 0", marginTop: -12 }} />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

/* ─── Main Export ───────────────────────────────────────────────────────── */
export default function Page() {
  return (
    <>
      <FontLoader />
      <MarqueeSection />
      <AboutSection />
    </>
  );
}