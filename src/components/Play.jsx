import React from 'react'
import { motion } from 'framer-motion'

function About() {
  return (
    <div className='w-full'>

      {/* Dark green marquee */}
      <div className='w-full bg-[#004D29] py-5 overflow-hidden'>
        <motion.div
          className='flex whitespace-nowrap'
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 12, ease: 'linear', repeat: Infinity }}
        >
          {[...Array(10)].map((_, i) => (
            <span
              key={i}
              className='text-white text-[8vw] font-extrabold uppercase tracking-tight mx-6'
            >
              WE ARE OCHI •{' '}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Lime green about section */}
      <div className='w-full bg-[#CDEA68] px-20 py-20'>

        {/* Big heading */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true }}
          className='text-5xl font-bold leading-tight tracking-tight text-[#1a1a1a] max-w-4xl mb-16'
        >
          We craft category-defining presentations, brand identities, and
          digital experiences that{' '}
          <span className='underline underline-offset-4'>drive funding</span>,{' '}
          <span className='underline underline-offset-4'>sales</span>, and{' '}
          <span className='underline underline-offset-4'>market leadership</span>.
        </motion.h1>

        {/* Divider */}
        <div className='border-t border-[#1a1a1a]/30 mb-10' />

        {/* Two columns */}
        <div className='flex gap-10'>

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            viewport={{ once: true }}
            className='w-1/2'
          >
            <p className='text-sm text-[#1a1a1a]'>What you can expect:</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
            viewport={{ once: true }}
            className='w-1/2'
          >
            <p className='text-sm text-[#1a1a1a] leading-relaxed mb-6'>
              We don't just make slides. We shape strategy, storytelling, design
              scalable brand systems, and build presentations that make people
              say: "I want in!"
            </p>
            <p className='text-sm text-[#1a1a1a] leading-relaxed'>
              Our clients make the world go round – from deep tech, aerospace
              and robotics to consumer brands and Fortune 500s.
            </p>
          </motion.div>

        </div>

        {/* How we can help */}
        <div className='flex items-start gap-10 mt-20'>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            viewport={{ once: true }}
            className='w-1/2 pt-4'
          >
            <h2 className='text-4xl font-bold tracking-tight text-[#1a1a1a] mb-8'>
              How we can help:
            </h2>
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: '#333' }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
              className='flex items-center gap-4 bg-[#1a1a1a] text-white text-xs tracking-widest uppercase px-6 py-4 rounded-full'
            >
              READ MORE
              <span className='w-2 h-2 bg-white rounded-full'></span>
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
            viewport={{ once: true }}
            className='w-1/2'
          >
            <img
              src='https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80'
              alt='Team'
              className='w-full h-[60vh] object-cover rounded-2xl'
            />
          </motion.div>

        </div>
      </div>
    </div>
  )
}

export default About