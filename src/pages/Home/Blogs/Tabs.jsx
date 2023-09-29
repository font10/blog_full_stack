import React from 'react'

export const Tabs = ({ categoriesSearch, activeCategory, setActiveCategory }) => {
  return (
      <div className='w-full flex flex-col sm:flex-row sm:justify-center w-full overflow-x-auto mt-5'>
        {
          categoriesSearch.map((category) => (
            <div className={`${activeCategory === category.name ? 'bg-blue-200 border-blue-300' : 'bg-transparent hover:bg-blue-100' } 
              flex flex-row px-2 lg:px-5 items-center py-2 my-1 mx-0.5 w-auto lg:w-full rounded-xl border-2 border-grey-200 cursor-pointer`}              
              onClick={() => setActiveCategory(category.name)}
            >
              <img src={category.icon} alt='icon tab' className='w-4 md:w-6 lg:w-8' />
              <span 
                key={crypto.randomUUID()}
                className='ml-2'
              >{category.name}</span>
            </div>
          ))
        }
      </div>
  )
}
