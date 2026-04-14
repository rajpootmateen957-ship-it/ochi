import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

// Circular SVG text for Futur Academy badge
function CircularText() {
  const text = "THE FUTUR ACADEMY • DESIGN EDUCATION • REVOLUTIONIZING • CALIFORNIA •";
  const radius = 52;
  const circumference = 2 * Math.PI * radius;
  const charCount = text.length;

  return (
    <svg viewBox="0 0 140 140" width="140" height="140" className="absolute inset-0 m-auto">
      <defs>
        <path
          id="circle-path"
          d={`M 70,70 m -${radius},0 a ${radius},${radius} 0 1,1 ${radius * 2},0 a ${radius},${radius} 0 1,1 -${radius * 2},0`}
        />
      </defs>
      {/* Outer decorative rings */}
      <circle cx="70" cy="70" r="64" fill="none" stroke="white" strokeWidth="0.8" opacity="0.4" />
      <circle cx="70" cy="70" r="58" fill="none" stroke="white" strokeWidth="0.4" opacity="0.3" />

      {/* Circular text */}
      <text fontSize="7.5" fill="white" letterSpacing="1.5" fontFamily="'DM Sans', sans-serif" fontWeight="500">
        <textPath href="#circle-path">{text}</textPath>
      </text>

      {/* Center "AA" monogram */}
      <circle cx="70" cy="70" r="22" fill="none" stroke="white" strokeWidth="0.8" opacity="0.5" />
      <text
        x="70"
        y="75"
        textAnchor="middle"
        fontSize="16"
        fill="white"
        fontFamily="'DM Sans', sans-serif"
        fontWeight="600"
        letterSpacing="1"
      >
        AA
      </text>
    </svg>
  );
}

export default function Ochi() {
  return (
    <section className="bg-[#EBEBEB] min-h-screen flex items-center justify-center px-8 py-16">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&display=swap');
        * { font-family: 'DM Sans', sans-serif; }
      `}</style>

      <div className="w-full max-w-6xl grid grid-cols-3 gap-5">

        {/* Card 1 — Ochi Brand (Green) */}
        <motion.div
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={cardVariants}
          whileHover={{ scale: 1.02, transition: { duration: 0.3, ease: "easeOut" } }}
          className="relative bg-[#1a5c4a] rounded-2xl overflow-hidden cursor-pointer"
          style={{ aspectRatio: "4/3" }}
        >
          {/* Subtle radial glow on hover */}
          <motion.div
            className="absolute inset-0 opacity-0"
            style={{
              background: "radial-gradient(circle at 50% 50%, rgba(180,255,100,0.08), transparent 70%)",
            }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          />

          {/* Ochi logo */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.span
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.35, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="text-[#b5f050] font-light tracking-tight select-none"
              style={{ fontSize: "clamp(48px, 7vw, 88px)", letterSpacing: "-0.02em" }}
            >
              ochi
              <span className="inline-block w-2 h-2 rounded-full bg-[#b5f050] ml-0.5 mb-6 align-bottom" />
            </motion.span>
          </div>

          {/* Bottom left tag */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.5 }}
            viewport={{ once: true }}
            className="absolute bottom-5 left-5"
          >
            <span className="border border-[#b5f050] text-[#b5f050] rounded-full px-4 py-1.5 text-xs tracking-widest font-medium">
              ©2019–2025
            </span>
          </motion.div>
        </motion.div>

        {/* Card 2 — Clutch Rating (Dark) */}
        <motion.div
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={cardVariants}
          whileHover={{ scale: 1.02, transition: { duration: 0.3, ease: "easeOut" } }}
          className="relative bg-[#1c1c1c] rounded-2xl overflow-hidden cursor-pointer flex flex-col items-center justify-center"
          style={{ aspectRatio: "4/3" }}
        >
          <motion.div
            className="absolute inset-0 opacity-0"
            style={{
              background: "radial-gradient(circle at 50% 50%, rgba(181,240,80,0.06), transparent 70%)",
            }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          />

          <div className="flex flex-col items-center gap-4 z-10">
            {/* Clutch text */}
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="text-white font-semibold"
              style={{ fontSize: "clamp(36px, 5vw, 64px)", letterSpacing: "-0.01em" }}
            >
              Clutch
            </motion.span>

            {/* Stars */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.55, duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
              className="flex gap-1.5"
            >
              {[...Array(5)].map((_, i) => (
                <motion.svg
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + i * 0.06, duration: 0.4 }}
                  viewport={{ once: true }}
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="#b5f050"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </motion.svg>
              ))}
            </motion.div>
          </div>

          {/* Bottom tag */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.5 }}
            viewport={{ once: true }}
            className="absolute bottom-5"
          >
            <span className="border border-[#555] text-white rounded-full px-5 py-2 text-xs tracking-widest font-medium">
              RATING 5.0 ON CLUTCH
            </span>
          </motion.div>
        </motion.div>

        {/* Card 3 — Futur Academy Badge (Dark) */}
        <motion.div
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={cardVariants}
          whileHover={{ scale: 1.02, transition: { duration: 0.3, ease: "easeOut" } }}
          className="relative bg-[#1c1c1c] rounded-2xl overflow-hidden cursor-pointer flex flex-col items-center justify-center"
          style={{ aspectRatio: "4/3" }}
        >
          <motion.div
            className="absolute inset-0 opacity-0"
            style={{
              background: "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.04), transparent 70%)",
            }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          />

          {/* Spinning badge */}
          <motion.div
            className="relative z-10"
            style={{ width: 140, height: 140 }}
            initial={{ opacity: 0, rotate: -20, scale: 0.8 }}
            whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <motion.div
              style={{ width: 140, height: 140, position: "relative" }}
              animate={{ rotate: 360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            >
              <CircularText />
            </motion.div>
          </motion.div>

          {/* Bottom tag */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.5 }}
            viewport={{ once: true }}
            className="absolute bottom-5"
          >
            <span className="border border-[#555] text-white rounded-full px-5 py-2 text-xs tracking-widest font-medium text-center leading-tight">
              BUSINESS BOOTCAMP<br />ALUMNI
            </span>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}