import React from 'react'

import { profile, no_blogs } from '../../../utils/images'
import { route } from '../../../models/router.model'
import { Link } from 'react-router-dom'
import { categoriesSearch } from '../../../utils/constants'

export const FilteredBlogs = ({filteredBlogs}) => {
  console.log(filteredBlogs)

  const getIconCategory = (blog) => {
    const cat = categoriesSearch.filter(cat =>  cat.name === blog.category)
    return cat[0].icon
  }

  const getColorCategory = (blog) => {
    const cat = categoriesSearch.filter(cat =>  cat.name === blog.category)
    return cat[0].color
  }

  const getBorderCategory = (blog) => {
    const cat = categoriesSearch.filter(cat =>  cat.name === blog.category)
    return cat[0].border
  }

  return (
    <div>
        {
          filteredBlogs?.length > 0
          ? <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full justify-center">
              {
                filteredBlogs && filteredBlogs.map((blog) => (
                  <div key={blog.title} className='relative text-white w-full'>
                    <img 
                      src={`http://localhost:5000/images/` + blog.image.split('_').splice(1).join(' ')} 
                      alt='milky way' 
                      className='rounded-[50px] p-8 h-full' 
                    />
                    <div className={`${ 'border-'+getBorderCategory(blog) } absolute flex flex-row items-center top-12 left-12 px-2 py-1 border-2 rounded-lg`}>
                      <img src={getIconCategory(blog)} alt='' width={25} />
                      <span className={`${getColorCategory(blog)} text-xs ml-2 font-semibold`}>{blog.category}</span>
                    </div>
                    <div className='absolute z-10 bottom-0 p-5 w-full bg-stone-700 bg-opacity-95 rounded-xl'>
                      <div className='flex flex-row justify-between items-center'>
                        <span className='text-[22px] font-semibold'>{blog.title}</span>
                        <span className='text-sm font-semibold flex flex-row items-center'>
                          <img src={profile} alt='' width={20} />
                          <span className='ml-2'>{blog.userId.username}</span>
                        </span>
                      </div>
                      <div className='flex flex-row justify-between items-center'>
                        <p className='text-[12px]'>{blog.desc}</p>
                        <Link to={`${route.details.path}/${blog._id}`} className='text-md font-medium text-blue-300 hover:text-blue-200'>Read more</Link>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>  
          : <div className='flex flex-col justify-center items-center mx-auto mt-10'>
              <img src={no_blogs} alt='no blogs' width={700} />
              <span className='text-3xl font-medium mt-10'>No blogs</span>
            </div>
        }
        </div>
  )
}