import React from 'react'
import { no_blogs, profile } from '../../../utils/images'
import { getIconCategory } from '../../../utils/functions'
import { route } from '../../../models/router.model'
import { Link } from 'react-router-dom'

export const FilteredBlogs = ({filteredBlogs}) => {

  return (
    <div>
        {
          filteredBlogs?.length > 0
          ? <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full justify-center">
              {
                filteredBlogs && filteredBlogs.map((blog) => (
                  <div key={blog.title} className='group relative text-white w-full text-sm md:text-md'>
                    <img 
                      src={`http://localhost:5000/images/` + blog.image.split('_').splice(1).join(' ')} 
                      alt='milky way' 
                      className='rounded-[50px] p-8 h-full' 
                    />
                    <div className='absolute z-10 bottom-10 p-5 w-full flex flex-col items-center rounded-xl'>
                      <div className='flex flex-row justify-between items-center'>
                        <Link to={`${route.details.path}/${blog._id}`} className='text-2xl font-londrina'>{blog.title}</Link> 
                      </div>
                      <div className='flex flex-row justify-between items-center w-5/12 mt-5'>
                        <div className='flex flex-row items-center gap-3'>
                          <img src={profile} alt='user' width={30} />
                          <span className='font-londrina'>{blog.userId.username}</span>
                        </div>
                        <div className='flex flex-row items-center gap-2'>
                          <img src={getIconCategory(blog)} alt='' width={25} className='rounded-full' />
                          <span className='text-xs ml-2 font-londrina'>{blog.category}</span>                    
                        </div>
                      </div>
                    </div>
                    <p className='w-full px-14 flex justify-center text-center font-londrina'>
                      {blog.desc.slice(0,180)}
                    </p>
                  </div>
                ))
              }
            </div>  
          : <div className='flex flex-col justify-center items-center mx-auto mt-10'>
              <img src={no_blogs} alt='no blogs' width={700} />
              <span className='text-3xl text-white font-medium mt-10'>No blogs</span>
            </div>
        }
        </div>
  )
}
