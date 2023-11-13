import React, { useEffect, useState } from 'react'
import { getLocation } from '../../services/blog.api'
import { footer_img, no_blogs, banyoles } from '../../utils/images'
import { FilteredBlogs } from '../Home/Blogs/FilteredBlogs'
import { useParams } from 'react-router-dom'


export const BlogsByPlace = () => {
  const [blog, setBlog] = useState()
  const { place } = useParams()

  useEffect(() => {
    getLocation(place)
      .then(res => { setBlog(res)})
      .catch(err => console.log(err))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      { blog && 
        <div className='flex flex-col justify-center items-center w-full bg-[#0a0a0a]'>   
          <img src={blog.length > 0 ? blog[0].place.image : banyoles}   alt='' className='lg:h-[850px] w-full' />
          <div className='w-full h-36 bg-stone-950 absolute bottom-12 blur-2xl m-0'></div>

          <div className='absolute top-[30%] flex flex-col justify-center items-center'>
            <span className='text-white font-londrina text-7xl'>{ blog.length > 0 ? blog[0].place.place : '' }</span>
            <p className='font-londrina text-xl text-white mt-6'>{ blog.length > 0 ? blog[0].place.country : '' }</p>
          </div>

          <div className='max-w-[1440px] flex flex-col items-center w-full mt-40'>
            <h1 className='font-londrina text-5xl text-white mb-10'>Blogs</h1>
            { blog.length > 0 ? <FilteredBlogs filteredBlogs={blog} /> : <div className='flex flex-col items-center w-full'>
                <img src={no_blogs} alt='no blogs' width={700} />
                <span className='text-3xl text-white font-medium mt-10'>No blogs</span>   
              </div>
            }
          </div>

          <div className='relative flex flex-row justify-center bottom-0 w-full mt-36'>  
            <img src={footer_img}  alt='' className='lg:h-[850px] w-full' />
            <div className='w-full h-48 bg-stone-950 absolute -top-24 blur-2xl m-0'></div>
            <div className='absolute text-white bottom-10 flex flex-row items-center gap-2 justify-center font-londrina text-lg'>©2023 DAVID FONT. <span className='text-sm font-londrina'>All rights reserved | HOME BLOGS LOCATIONS</span> </div>
          </div>
        </div>
      }
    </div>
  )
}
