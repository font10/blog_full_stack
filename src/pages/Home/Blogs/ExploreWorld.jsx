import React from 'react'

export const ExploreWorld = ({cards}) => {
  return (
    <div className='max-w-[1440px] flex flex-col items-center mt-40'>
      <div className='flex flex-col justify-center items-center text-center'>
        <h1 className='font-londrina text-5xl text-white'>Explore the world</h1>
        <p className='w-5/12 text-white font-londrina mt-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam feugiat a lectus luctus.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum non turpis id massa imperdiet volutpat commodo id leo.
        </p>
      </div>

      <div className='flex flex-row gap-8 my-16 px-5'>
        {
          cards && cards.map(card => (
            <div key={crypto.randomUUID()} className='relative h-[500px] group overflow-hidden transition-shadow'>
              <img src={card.image} alt='' className='h-full object-cover transition-transform duration-500 mb-2 group-hover:rotate-3 group-hover:scale-125 rounded-xl' />
              <div className='absolute flex flex-col text-white w-full bottom-10 items-center'>
                <span className='font-londrina text-lg mb-6 cursor-pointer'>{card.country}</span>
                <span className='font-londrina text-3xl'>{card.site}</span>
              </div>
            </div>  
          ))            
        }
      </div>        
    </div>
  )
}
