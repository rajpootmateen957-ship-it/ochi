import React from 'react'

const reviews = [
  {
    id: 1,
    company: 'Karman Ventures',
    services: ['INVESTOR DECK', 'SALES DECK'],
    reviewer: 'William Barnes',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    review:
      'They were transparent about the time and the stages of the project. The end product is high quality, and I feel confident about how they were handholding the client through the process. I feel like I can introduce them to someone who needs to put a sales deck together from scratch, and they would be able to handhold the client experience from 0 to 100 very effectively from story to design. 5/5',
  },
]

function Reviews() {
  return (
    <div className='w-full py-20 px-20 bg-[#f5f5f0]'>

      {/* Heading */}
      <h1 className='text-6xl tracking-tight mb-10'>Clients' reviews</h1>

      {/* Review rows */}
      {reviews.map((review, index) => (
        <div key={review.id} className='border-t border-gray-300'>

          {/* Top row — company, services label, reviewer name, READ */}
          <div className='flex items-start py-8 gap-4'>

            {/* Company name */}
            <div className='w-1/4'>
              <span className='text-sm underline underline-offset-4 cursor-pointer'>
                {review.company}
              </span>
            </div>

            {/* Services label + pills */}
            <div className='w-1/4'>
              <p className='text-sm text-gray-500 mb-4'>Services:</p>
              <div className='flex flex-col gap-2'>
                {review.services.map((service, i) => (
                  <span
                    key={i}
                    className='border border-gray-400 rounded-full px-4 py-1.5 text-xs tracking-widest w-fit'
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>

            {/* Reviewer info + review text */}
            <div className='w-2/4 pr-16'>
              <p className='text-sm mb-6'>{review.reviewer}</p>
              <img
                src={review.image}
                alt={review.reviewer}
                className='w-24 h-24 rounded-xl object-cover mb-5 grayscale'
              />
              <p className='text-sm text-gray-700 leading-relaxed'>
                {review.review}
              </p>
            </div>

            {/* READ */}
            <div className='w-fit ml-auto'>
              <span className='text-sm text-gray-400 tracking-widest cursor-pointer hover:text-black transition-colors'>
                READ
              </span>
            </div>

          </div>
        </div>
      ))}

      {/* Bottom border */}
      <div className='border-t border-gray-300' />

    </div>
  )
}

export default Reviews