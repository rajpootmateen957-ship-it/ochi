import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './navbar'


/* ─────────────────────────────────────────────────────
   ONLY injects what LandingPage itself needs.
   NO html/body height, NO overflow rules that could
   clip or reposition the fixed Navbar.
───────────────────────────────────────────────────── */
const Fonts = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500;600&display=swap');
  `}</style>
)

/* ── Loading Screen ──────────────────────────────────── */
function LoadingScreen({ onDone }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const DURATION = 2800
    let startTs = null
    let raf

    const tick = (ts) => {
      if (!startTs) startTs = ts
      const raw = Math.min((ts - startTs) / DURATION, 1)
      const eased = raw === 1 ? 1 : 1 - Math.pow(2, -10 * raw)
      setCount(Math.floor(eased * 100))
      if (raw < 1) {
        raf = requestAnimationFrame(tick)
      } else {
        setCount(100)
        setTimeout(onDone, 700)
      }
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [onDone])

  return (
    <motion.div
      exit={{ y: '-100%', transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] } }}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,          
        background: '#111',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '32px',
      }}
    >
    
      <div
        style={{
          position: 'relative',
          background: '#1c1c1c',
          borderRadius: '16px',
          width: '100%',
          height: '100%',
          display: 'grid',
          gridTemplateRows: 'auto 1fr auto',
          padding: '40px 48px',
          overflow: 'hidden',
        }}
      >
        {/* Stack shadow layers */}
        <div style={{ position: 'absolute', background: '#282828', borderRadius: '16px', top: 12, bottom: 12, left: 0, right: -16, zIndex: -1 }} />
        <div style={{ position: 'absolute', background: '#222', borderRadius: '16px', top: 24, bottom: 24, left: 0, right: -28, zIndex: -2 }} />

        {/* Logo */}
        <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '16px', fontWeight: 500, color: '#f0eeea', letterSpacing: '-0.3px' }}>
          ochi
          <span style={{ display: 'inline-block', width: '5px', height: '5px', background: '#f0eeea', borderRadius: '50%', marginLeft: '2px', verticalAlign: 'super' }} />
        </div>

        {/* Headline */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(60px, 10vw, 140px)', textTransform: 'uppercase', lineHeight: 0.9, letterSpacing: '-1px', color: '#f0eeea', margin: 0 }}>
            WE CREATE<br />
            EYE-OPENING<br />
            PRESENTATIONS
          </h1>
        </div>

        {/* Bottom: Loading + Counter */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '13px', color: '#555', letterSpacing: '0.5px', paddingBottom: '8px' }}>
            Loading:
          </span>
          <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(60px, 10vw, 140px)', color: '#3a3a3a', lineHeight: 1, fontVariantNumeric: 'tabular-nums' }}>
            {count}%
          </span>
        </div>
      </div>
    </motion.div>
  )
}

/* ── Hero Section ────────────────────────────────────── */
function Hero() {
  return (
    <section
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        background: '#EDEBE5',
        /* 90px = nav height (~84px py-7) + a little breathing room */
        padding: '110px clamp(64px, 5vw, 80px) 0',
        boxSizing: 'border-box',
      }}
    >
      {/* Headlines */}
      <div>
        <motion.h1
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(60px, 10.5vw, 148px)', lineHeight: 0.9, letterSpacing: '-1px', color: '#1a1a1a', textTransform: 'uppercase', margin: 0 }}
        >
          WE CREATE
        </motion.h1>

        {/* Line 2 — thumbnail + EYE-OPENING */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          style={{ display: 'flex', alignItems: 'center', gap: 'clamp(12px, 1.8vw, 24px)' }}
        >
          {/* Thumbnail */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0, rotate: -10 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ duration: 0.75, delay: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
            style={{
              width: 'clamp(90px, 9.5vw, 140px)',
              height: 'clamp(64px, 6.8vw, 98px)',
              borderRadius: '10px',
              flexShrink: 0,
              position: 'relative',
              overflow: 'hidden',
              background: '#111',
            }}
          >
            <div style={{ position: 'absolute', width: '58%', height: '72%', background: '#D4521A', borderRadius: '7px', transform: 'rotate(-20deg)', top: '4%', left: '-4%', zIndex: 1 }} />
            <div style={{ position: 'absolute', width: '60%', height: '72%', background: '#8AB832', borderRadius: '7px', transform: 'rotate(-5deg)', top: '10%', left: '16%', zIndex: 2 }} />
            <div style={{ position: 'absolute', width: '56%', height: '68%', background: '#1a2a18', borderRadius: '7px', transform: 'rotate(10deg)', bottom: '4%', right: '-2%', zIndex: 3, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '6px 8px' }}>
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '7px', fontWeight: 700, color: '#8AB832' }}>ochi·</span>
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '6px', color: 'rgba(138,184,50,0.5)' }}>ochi·</span>
            </div>
          </motion.div>

          <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(60px, 10.5vw, 148px)', lineHeight: 0.9, letterSpacing: '-1px', color: '#1a1a1a', textTransform: 'uppercase', margin: 0 }}>
            EYE-OPENING
          </h1>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(60px, 10.5vw, 148px)', lineHeight: 0.9, letterSpacing: '-1px', color: '#1a1a1a', textTransform: 'uppercase', margin: 0 }}
        >
          PRESENTATIONS
        </motion.h1>
      </div>

      {/* Bottom Bar */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6, ease: 'easeOut' }}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          borderTop: '1px solid rgba(26,26,26,0.12)',
          marginTop: 'clamp(28px, 4vw, 56px)',
          padding: '20px 0 24px',
          gap: '14px',
        }}
      >
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 'clamp(12px, 1vw, 15px)', color: 'rgba(26,26,26,0.5)', fontWeight: 400, margin: 0 }}>
          Presentation and storytelling agency
        </p>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 'clamp(12px, 1vw, 15px)', color: 'rgba(26,26,26,0.5)', fontWeight: 400, margin: 0 }}>
          For innovation teams and global brands
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <motion.a
            href="#"
            whileHover={{ background: '#1a1a1a', color: '#EDEBE5' }}
            style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '11px', fontWeight: 500, color: '#1a1a1a', border: '1px solid rgba(26,26,26,0.3)', padding: '13px 26px', borderRadius: '100px', letterSpacing: '1.2px', textTransform: 'uppercase', transition: 'all 0.25s ease', whiteSpace: 'nowrap', textDecoration: 'none' }}
          >
            Start the project
          </motion.a>
          <motion.a
            href="#"
            whileHover={{ background: '#1a1a1a', color: '#EDEBE5' }}
            style={{ width: '44px', height: '44px', borderRadius: '50%', border: '1px solid rgba(26,26,26,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#1a1a1a', fontSize: '18px', flexShrink: 0, transition: 'all 0.25s ease', textDecoration: 'none' }}
          >
            ↗
          </motion.a>
        </div>
      </motion.div>
    </section>
  )
}

/* ── Root ────────────────────────────────────────────── */
export default function LandingPage() {
  const [loading, setLoading] = useState(true)

  return (
    <div style={{ background: '#EDEBE5', minHeight: '100vh' }}>
      <Fonts />

      {/* Loader sits at z-9999, always above Navbar z-999 */}
      <AnimatePresence>
        {loading && (
          <LoadingScreen key="loader" onDone={() => setLoading(false)} />
        )}
      </AnimatePresence>

      {/* Navbar always mounted — loader visually covers it during loading */}
      <Navbar />

      {/* Content fades in after loader exits */}
      <motion.div
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 0.5 }}
        style={{ willChange: 'opacity' }}
      >
        <Hero />
      </motion.div>
    </div>
  )
}