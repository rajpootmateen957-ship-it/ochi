import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ochi10 from "../../src/assets/ochi-10.png";

/* ─── Fonts ───────────────────── */
const FontLoader = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;800;900&family=Inter:wght@300;400;500&display=swap');
    *, *::before, *::after { box-sizing: border-box; margin: 3px; padding: 0; }
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


function MarqueeSection() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  
  const scrollY = useTransform(scrollYProgress, [0, 1], [0, -25]);

  return (
    <motion.section
      ref={ref}
      style={{ y: scrollY }}
      animate={{
        y: [0, -35, 0],           
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


function AboutSection() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  
  const sectionY = useTransform(scrollYProgress, [0, 1], [-70, 45]);

  
  const imageY = useTransform(scrollYProgress, [0, 1], [100, -80]);

  return (
    <motion.section
      ref={ref}
      className="relative z-0"
      style={{
        y: sectionY,
        background: "#c8e64c",
        padding: "clamp(70px, 9vw, 120px) clamp(24px, 7vw, 90px)",
        marginTop: "-85px",
        borderTop: "1px solid rgba(0,0,0,0.12)",
      }}
    >
    
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

     
      <div style={{ borderTop: "1px solid rgba(0,0,0,0.18)", marginBottom: "clamp(45px, 7vw, 80px)" }} />

      
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

     
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "clamp(40px, 6vw, 80px)",
          alignItems: "start", 
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

     
        <motion.div style={{ y: imageY }}>
          <div
            style={{
              width: "100%",
              borderRadius: 24,
              position: "relative",
              overflow: "hidden",
              boxShadow: "0 30px 80px rgba(0,0,0,0.18)",
              lineHeight: 0, // Removes extra space below image
            }}
          >
            <img
              src={ochi10}
              alt="Ochi creative showcase"
              style={{
                width: "100%",
                height: "auto", 
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}


export default function Page() {
  return (
    <>
      <FontLoader />
      <MarqueeSection />
      <AboutSection />
    </>
  );
}