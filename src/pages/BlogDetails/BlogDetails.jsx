import React, { useEffect, useState } from 'react'
import { getBlogById } from '../../services/blog.api'
import { footer_img, profile } from '../../utils/images'
import { useParams } from 'react-router-dom'
import { getIconCategory } from '../../utils/functions'

export const BlogDetails = () => {
  const [blogs, setBlogs] = useState()
  const { id } = useParams()
  console.log(id)

  useEffect(() => {
    getBlogById(id)
      .then(res => { console.log(res); setBlogs(res)})
      .catch(err => console.log(err))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // Optional if you want to skip the scrolling animation
    });
  }, []);

  return (
    <div>
      { blogs && <div className='flex flex-col justify-center items-center min-w-full w-full bg-[a0a0a]'>   
        <img src={blogs.image}   alt='' className='lg:h-[850px] w-full' />
        <div className='w-full h-36 bg-stone-950 absolute bottom-12 blur-2xl m-0'></div>

        <div className='absolute top-[60%] flex flex-col justify-end items-end'>
          <span className='text-white font-londrina text-7xl'>{blogs.title}</span>
        </div>

        <div className='flex flex-col items-center w-full px-12'>

          <div className='flex flex-row justify-between  items-center w-8/12 mt-8 z-20 text-white font-londrina'>
            <div className='flex flex-row items-center gap-2 font-londrina'>
              <img src={profile} alt='' width={40} />
              {blogs.userId.username}
            </div>

            <div className='flex flex-row items-center gap-2 font-londrina'>
              <img src={getIconCategory(blogs)} alt='' width={40} />
              {blogs.category}
            </div>
          </div>

          <div className='flex flex-col items-center w-full mt-14'>                    
            <span className='text-white font-londrina text-3xl w-8/12 flex flex-row'>Description</span>
            <p className='font-londrina text-white w-8/12 mt-6'>
              {
                blogs.desc.split('\n').map(blog => (
                  <p key={crypto.randomUUID()} className='text-justify font-londrina'>{blog}<br/></p>
                ))
              }
            </p>          
          </div>
          
          <div className='mt-16 w-8/12 rounded-xl'>            
            
          </div>

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
