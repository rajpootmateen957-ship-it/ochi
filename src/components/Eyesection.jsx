import { motion, useMotionValue } from 'framer-motion';
import { useRef, useEffect } from 'react';

export default function InteractiveEyes() {
  const containerRef = useRef(null);

  const dot1X = useMotionValue(0);
  const dot1Y = useMotionValue(0);
  const dot2X = useMotionValue(0);
  const dot2Y = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const maxMove = 12;

      let dx1 = e.clientX - (centerX - 70);
      let dy1 = e.clientY - centerY;
      const angle1 = Math.atan2(dy1, dx1);
      const dist1 = Math.sqrt(dx1 * dx1 + dy1 * dy1);

      dot1X.set(Math.cos(angle1) * Math.min(dist1 * 0.08, maxMove));
      dot1Y.set(Math.sin(angle1) * Math.min(dist1 * 0.08, maxMove));

      // Right Eye
      let dx2 = e.clientX - (centerX + 70);
      let dy2 = e.clientY - centerY;
      const angle2 = Math.atan2(dy2, dx2);
      const dist2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);

      dot2X.set(Math.cos(angle2) * Math.min(dist2 * 0.08, maxMove));
      dot2Y.set(Math.sin(angle2) * Math.min(dist2 * 0.08, maxMove));
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen">
      
      {/* 🔹 Container */}
      <div
        ref={containerRef}
        className="relative w-[700px] h-[480px] bg-[#003D2F] rounded-3xl flex items-center justify-center overflow-hidden"
      >
        
        {/* Eyes */}
        <div className="flex gap-14">
          
          {/* Left Eye */}
          <div className="w-[140px] h-[140px] bg-white rounded-full flex items-center justify-center shadow-inner">
            <div className="w-[75px] h-[75px] bg-black rounded-full flex items-center justify-center relative overflow-hidden">
              
              <span className="text-white text-[11px] font-bold tracking-widest z-10">
                PLAY
              </span>

              <motion.div
                className="absolute w-[10px] h-[10px] bg-white rounded-full"
                style={{ x: dot1X, y: dot1Y }}
              />
            </div>
          </div>

          {/* Right Eye */}
          <div className="w-[140px] h-[140px] bg-white rounded-full flex items-center justify-center shadow-inner">
            <div className="w-[75px] h-[75px] bg-black rounded-full flex items-center justify-center relative overflow-hidden">
              
              <span className="text-white text-[11px] font-bold tracking-widest z-10">
                PLAY
              </span>

              <motion.div
                className="absolute w-[10px] h-[10px] bg-white rounded-full"
                style={{ x: dot2X, y: dot2Y }}
              />
            </div>
          </div>

        </div>

        {/* Decorative Balls */}
        <div className="absolute inset-0 pointer-events-none">
          
          {/* Left */}
          <div className="absolute top-[25%] left-[10%] w-6 h-6 bg-[#CDEA68] rounded-full" />
          <div className="absolute top-[55%] left-[8%] w-4 h-4 bg-[#CDEA68] rounded-full" />
          <div className="absolute bottom-[15%] left-[18%] w-5 h-5 bg-yellow-300 rounded-full" />

          {/* Right */}
          <div className="absolute top-[20%] right-[12%] w-10 h-10 bg-[#CDEA68] rounded-full" />
          <div className="absolute top-[50%] right-[8%] w-6 h-6 bg-yellow-400 rounded-full" />
          <div className="absolute bottom-[18%] right-[15%] w-5 h-5 bg-[#CDEA68] rounded-full" />

          {/* Center */}
          <div className="absolute top-[10%] left-[45%] w-4 h-4 bg-yellow-300 rounded-full" />
        </div>

      </div>
    </div>
  );
}
