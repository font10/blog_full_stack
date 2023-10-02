import React from 'react'
import { categoriesSearch } from '../../utils/constants'

export const Tabs = ({ activeCategory, setActiveCategory }) => {
  return (
    <div className='w-full flex flex-col sm:flex-row sm:justify-center w-full overflow-x-auto mt-5'>
      {
        categoriesSearch.map((category) => (
          <div className='flex flex-row px-2 lg:px-5 items-center py-2 my-1 mx-0.5 w-auto lg:w-full rounded-xl cursor-pointer'              
            onClick={() => setActiveCategory(category.name)}
          >
            <img src={category.icon} alt='icon tab' className='w-4 md:w-6 lg:w-8' />
            <span 
              key={crypto.randomUUID()}
              className={`${activeCategory === category.name ? 'text-blue-400 ' : 'text-transparent hover:text-blue-300' } ml-2 text-white`}
            >{category.name}</span>
          </div>
        ))
      }
    </div>
  )
}
