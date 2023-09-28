import React from 'react'

export const Tabs = ({ categoriesSearch, activeCategory, setActiveCategory }) => {
  return (
    <div>
      <div className='mt-5 flex flex-row'>
        {
          categoriesSearch.map((category) => (
            <div className={`${activeCategory === category.name ? 'bg-blue-200 border-blue-300' : 'bg-transparent hover:bg-blue-100' } 
              flex flex-row px-5 items-center py-2 rounded-xl border-2 border-grey-200 mx-2 cursor-pointer`}              
              onClick={() => setActiveCategory(category.name)}
            >
              <img src={category.icon} alt='icon tab' width={30} />
              <span 
                key={crypto.randomUUID()}
                className='ml-2'
              >{category.name}</span>
            </div>
          ))
        }
      </div>
    </div>
  )
}
