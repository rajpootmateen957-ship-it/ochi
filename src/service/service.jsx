import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
   
const FontLoader = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;800;900&family=Inter:wght@300;400;500;600&display=swap');
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; }
    body { background: #f0ede8; font-family: 'Inter', sans-serif; }
    a { text-decoration: none; color: inherit; }
    ul { list-style: none; }

    .nav-center { display: flex; gap: clamp(20px,3vw,40px); align-items: center; }
    .nav-right { display: flex; align-items: center; }
    .hamburger {
      display: none;
      flex-direction: column;
      gap: 5px;
      cursor: pointer;
      padding: 4px;
    }
    .hamburger span {
      display: block;
      width: 24px;
      height: 2px;
      background: #1a1a1a;
      border-radius: 2px;
      transition: all 0.3s ease;
    }
    .mobile-menu {
      display: none;
      flex-direction: column;
      background: #f0ede8;
      border-top: 1px solid rgba(0,0,0,0.06);
      overflow: hidden;
      max-height: 0;
      transition: max-height 0.4s cubic-bezier(0.16,1,0.3,1), padding 0.3s ease;
    }
    .mobile-menu.open { max-height: 400px; padding: 12px 0 20px; }
    .mobile-menu a {
      font-family: 'Inter', sans-serif;
      font-size: 15px;
      color: #1a1a1a;
      padding: 12px clamp(20px,4vw,48px);
      display: block;
    }
    .mobile-menu .mob-contact {
      margin: 8px clamp(20px,4vw,48px) 0;
      border: 1px solid #1a1a1a;
      border-radius: 999px;
      padding: 10px 20px;
      font-size: 14px;
      font-family: 'Inter', sans-serif;
      text-align: center;
      display: block;
    }

    @media (max-width: 680px) {
      .nav-center { display: none !important; }
      .nav-right { display: none !important; }
      .hamburger { display: flex !important; }
      .mobile-menu { display: flex !important; }
    }
    @media (max-width: 480px) {
      .hero-pill { display: none !important; }
    }
  `}</style>
);

// ─── Loader ────────────────────────────────────────────────────────────────
function LoaderScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const words = document.querySelectorAll(".loader-word");
    words.forEach((w, i) => {
      setTimeout(() => {
        w.style.transform = "translateY(0)";
        w.style.opacity = "1";
      }, 200 + i * 130);
    });

    let current = 0;
    const interval = setInterval(() => {
      current += Math.floor(Math.random() * 7) + 2;
      if (current >= 100) {
        current = 100;
        clearInterval(interval);
        setTimeout(onComplete, 500);
      }
      setProgress(current);
    }, 70);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      key="loader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.03 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: "fixed",
        inset: 0,
        background: "#1a1a1a",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
      }}
    >
      <div
        style={{
          background: "#f0ede8",
          borderRadius: 20,
          width: "min(88vw, 900px)",
          padding: "clamp(24px,4vw,48px) clamp(24px,5vw,56px) clamp(28px,4vw,52px)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Logo */}
        <div
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 500,
            fontSize: 18,
            color: "#1a1a1a",
            letterSpacing: "-0.5px",
            marginBottom: "clamp(32px,5vw,60px)",
            display: "flex",
            alignItems: "flex-start",
            gap: 2,
          }}
        >
          ochi
          <span
            style={{
              width: 5,
              height: 5,
              background: "#1a1a1a",
              borderRadius: "50%",
              display: "inline-block",
              marginTop: 3,
            }}
          />
        </div>

        {/* Headline */}
        <div
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(36px,9vw,96px)",
            lineHeight: 0.9,
            color: "#1a1a1a",
            textTransform: "uppercase",
            marginBottom: "clamp(28px,4vw,52px)",
          }}
        >
          {["WE CREATE", "EYE-OPENING", "PRESENTATIONS"].map((line, i) => (
            <div key={i} style={{ overflow: "hidden" }}>
              <span
                className="loader-word"
                style={{
                  display: "block",
                  transform: "translateY(105%)",
                  opacity: 0,
                  transition: "transform 0.75s cubic-bezier(0.16,1,0.3,1), opacity 0.5s ease",
                }}
              >
                {line}
              </span>
            </div>
          ))}
        </div>

        {/* Footer row */}
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
          <span style={{ fontSize: 13, color: "#888", fontFamily: "'Inter', sans-serif" }}>
            Loading:
          </span>
          <span
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(32px,6vw,64px)",
              color: "#1a1a1a",
              lineHeight: 1,
            }}
          >
            {progress}%
          </span>
        </div>

        {/* Progress bar */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            height: 4,
            background: "#1a1a1a",
            width: `${progress}%`,
            transition: "width 0.08s linear",
            borderRadius: "0 2px 2px 0",
          }}
        />
      </div>
    </motion.div>
  );
}

// ─── Navbar ────────────────────────────────────────────────────────────────
function Navbar({ animate }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = ["Services", "Our work", "About us", "Insights"];

  return (
    <div style={{ position: "sticky", top: 0, zIndex: 100, background: "#f0ede8" }}>
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "clamp(16px,3vw,24px) clamp(20px,4vw,48px)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
        }}
      >
        {/* Logo — left */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={animate ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 500,
            fontSize: 18,
            color: "#1a1a1a",
            letterSpacing: "-0.5px",
            display: "flex",
            alignItems: "flex-start",
            gap: 2,
            cursor: "pointer",
          }}
        >
          ochi
          <span
            style={{
              width: 5,
              height: 5,
              background: "#1a1a1a",
              borderRadius: "50%",
              display: "block",
              marginTop: 3,
            }}
          />
        </motion.div>

        {/* Links — center */}
        <div className="nav-center">
          {links.map((link, i) => (
            <motion.a
              key={link}
              href="#"
              initial={{ opacity: 0, y: -10 }}
              animate={animate ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.05 * i, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 14,
                color: "#1a1a1a",
                fontWeight: 400,
              }}
              whileHover={{ opacity: 0.4 }}
            >
              {link}
            </motion.a>
          ))}
        </div>

        {/* Contact — right */}
        <div className="nav-right">
          <motion.a
            href="#"
            initial={{ opacity: 0, y: -10 }}
            animate={animate ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 14,
              color: "#1a1a1a",
              fontWeight: 400,
            }}
            whileHover={{ opacity: 0.4 }}
          >
            Contact us
          </motion.a>
        </div>

        {/* Hamburger — mobile only */}
        <motion.div
          className="hamburger"
          initial={{ opacity: 0 }}
          animate={animate ? { opacity: 1 } : {}}
          transition={{ duration: 0.4 }}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span style={{ transform: menuOpen ? "rotate(45deg) translate(5px,5px)" : "none" }} />
          <span style={{ opacity: menuOpen ? 0 : 1 }} />
          <span style={{ transform: menuOpen ? "rotate(-45deg) translate(5px,-5px)" : "none" }} />
        </motion.div>
      </nav>

      {/* Mobile dropdown */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        {links.map((link) => (
          <a key={link} href="#">{link}</a>
        ))}
        <a href="#" className="mob-contact">Contact us</a>
      </div>
    </div>
  );
}

// ─── Hero ──────────────────────────────────────────────────────────────────
function HeroSection({ animate }) {
  const lines = ["WE CREATE", "EYE-OPENING", "PRESENTATIONS"];

  return (
    <section
      style={{
        padding: "clamp(32px,5vw,64px) clamp(20px,4vw,48px) clamp(40px,6vw,80px)",
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <h1
        style={{
          fontFamily: "'Barlow Condensed', sans-serif",
          fontWeight: 800,
          fontSize: "clamp(52px,11vw,130px)",
          lineHeight: 0.88,
          textTransform: "uppercase",
          color: "#1a1a1a",
        }}
      >
        {lines.map((line, i) => (
          <div key={i} style={{ overflow: "hidden", display: "block" }}>
            {i === 1 && (
              <motion.span
                className="hero-pill"
                initial={{ y: "110%", opacity: 0, scale: 0.85 }}
                animate={animate ? { y: 0, opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.85, delay: 0.26, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  display: "inline-block",
                  width: "clamp(72px,9vw,130px)",
                  height: "clamp(48px,6vw,88px)",
                  borderRadius: 12,
                  background: "linear-gradient(135deg, #2d6a27 0%, #b8ce44 50%, #c94218 100%)",
                  marginRight: "clamp(6px,1.2vw,18px)",
                  verticalAlign: "middle",
                  position: "relative",
                  overflow: "hidden",
                  flexShrink: 0,
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    top: 8,
                    left: 8,
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 9,
                    fontWeight: 600,
                    background: "#1a1a1a",
                    color: "#fff",
                    padding: "2px 6px",
                    borderRadius: 3,
                  }}
                >
                  ochi
                </span>
                <span
                  style={{
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    width: "55%",
                    height: "45%",
                    background: "#b8ce44",
                    borderRadius: "8px 0 0 0",
                  }}
                />
              </motion.span>
            )}
            <motion.span
              initial={{ y: "110%", opacity: 0 }}
              animate={animate ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.85, delay: 0.1 + i * 0.13, ease: [0.16, 1, 0.3, 1] }}
              style={{ display: "inline-block" }}
            >
              {line}
            </motion.span>
          </div>
        ))}
      </h1>

      {/* Sub row */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={animate ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
        style={{
          marginTop: "clamp(24px,4vw,52px)",
          display: "flex",
          flexWrap: "wrap",
          gap: "clamp(12px,2vw,24px)",
          alignItems: "center",
        }}
      >
        <span
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "clamp(13px,1.5vw,15px)",
            color: "#888",
            maxWidth: 320,
            lineHeight: 1.6,
          }}
        >
          We partner with ambitious teams to craft presentations that move people and close deals.
        </span>
        <motion.a
          href="#"
          whileHover={{ scale: 1.04, background: "#1a1a1a", color: "#f0ede8" }}
          whileTap={{ scale: 0.97 }}
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 14,
            fontWeight: 500,
            color: "#1a1a1a",
            border: "1px solid #1a1a1a",
            padding: "12px 28px",
            borderRadius: 999,
            transition: "background 0.25s ease, color 0.25s ease",
            display: "inline-block",
          }}
        >
          See our work ↗
        </motion.a>
      </motion.div>
    </section>
  );
}

// ─── Main Export ───────────────────────────────────────────────────────────
export default function Services() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <FontLoader />
      <div style={{ minHeight: "100vh", background: "#f0ede8" }}>
        <AnimatePresence>
          {!loaded && <LoaderScreen onComplete={() => setLoaded(true)} />}
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0 }}
          animate={loaded ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          <Navbar animate={loaded} />
          <HeroSection animate={loaded} />
        </motion.div>
      </div>
    </>
  );
}