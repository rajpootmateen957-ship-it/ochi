import React from 'react'
import { motion } from 'framer-motion'

const cards = [
  {
    id: 1,
    title: 'FYDER',
    img: 'https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-1326x1101.png',
    tags: ['BRAND IDENTITY', 'PITCH DECK', 'STRATEGY', 'WEBSITE'],
  },
  {
    id: 2,
    title: 'VISE',
    img: 'https://ochi.design/wp-content/uploads/2025/08/Med_Website_0.png',
    tags: ['CONFERENCE', 'EXECUTIVE KEYNOTE', 'PRODUCT LAUNCH'],
  },
  {
    id: 3,
    title: 'FOLIO',
    img: 'https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-1326x1101.png',
    tags: ['BRAND IDENTITY', 'WEBSITE'],
  },
  {
    id: 4,
    title: 'ZAAN',
    img: 'https://ochi.design/wp-content/uploads/2025/08/Soma_Website_0-1.png',
    tags: ['STRATEGY', 'PRODUCT LAUNCH'],
  },
]

function Featured() {
  return (
    <div className='w-full py-20'>
      <div className='w-full px-20 border-b-[1px] border-gray-400 pb-10'>
        <h1 className='text-6xl tracking-tight'>Featured projects</h1>
      </div>

      <div className='px-20'>
        <div className='cards w-full gap-10 flex flex-wrap mt-10'>
          {cards.map((card) => (
            <div key={card.id} className='w-[calc(50%-20px)]'>

              
              <motion.div
                className='cardcontainer w-full rounded-xl h-[70vh] relative overflow-hidden'
                initial='rest'
                whileHover='hover'
                animate='rest'
              >
                
                <motion.div
                  className='w-full h-full rounded-xl overflow-hidden'
                  variants={{
                    rest: { scale: 1 },
                    hover: { scale: 1.05 },
                  }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                >
                  <img
                    className='w-full h-full object-cover'
                    src={card.img}
                    alt={card.title}
                  />
                </motion.div>

                
                <motion.div
                  className='absolute bottom-0 left-0 right-0 px-6 py-5 bg-black/50'
                  variants={{
                    rest: { y: '100%', opacity: 0 },
                    hover: { y: '0%', opacity: 1 },
                  }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                >
                  <h1 className='text-5xl leading-none tracking-tight text-[#CDEA68]'>
                    {card.title}
                  </h1>
                </motion.div>
              </motion.div>

              
              <div className='flex flex-wrap gap-3 mt-5'>
                {card.tags.map((tag, index) => (
                  <motion.span
                    key={index}
                    whileHover={{
                      backgroundColor: '#000',
                      color: '#fff',
                      borderColor: '#000',
                      scale: 1.05,
                    }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                    className='border border-gray-400 rounded-full px-4 py-2 text-xs font-medium tracking-widest text-gray-700 uppercase cursor-pointer'
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Featured