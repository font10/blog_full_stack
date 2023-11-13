import React, { useEffect, useState } from 'react'
import { getBlogs } from '../../services/blog.api'
import { camera, footer_img, hero_2, mountain, vertical } from '../../utils/images'
import { FilteredBlogs } from '../Home/Blogs/FilteredBlogs'
import { ExploreWorld } from './Blogs/ExploreWorld'
import { route } from '../../models/router.model'
import { Link } from 'react-router-dom'

export const Home = () => {
  const [filteredBlogs, setFilteredBlogs] = useState()

  useEffect(() => {
    getBlogs()
      .then(res => { setFilteredBlogs(res.blogs) })
      .catch(err => console.log(err))
  }, [])
  
  return (
  <div className='flex flex-col relative justify-center items-center bg-[#0a0a0a]'>   
    <section className="relative w-full">        
      <img src={mountain}  alt='' className='lg:h-[850px] w-full' />
      <section className="absolute flex flex-col md:flex-row w-full top-28 lg:top-40 xl:top-1/2 -translate-x-1/12 xl:-translate-y-1/2">
        <div className='flex flex-col w-full md:w-3/5 lg:-ml-14 ml-0 items-center lg:mt-20'>
          <p className='text-3xl md:text-5xl lg:text-6xl xl:text-8xl font-londrina text-white mb-10 drop-shadow-3xl'>Capture what</p>
          <div className='flex flex-row gap-5 items-center xl:ml-72'>
            <img src={camera} alt='' className='w-14 h-14 md:w-28 md:h-28' /> 
            <span className='text-3xl md:text-5xl lg:text-6xl xl:text-8xl font-londrina text-white py-3 drop-shadow-3xl'>the eyes see</span>
          </div>
        </div>
        <div className='hidden md:w-2/5 md:flex justify-start'>
          <img src={hero_2} alt='' className='border-2 border-gray-300 w-60 h-60 inline-block border-dashed shadow-3xl rounded-md shadow-black z-30 -rotate-12' />
          <img src={vertical} alt=''  className='border-2 border-gray-300 w-60 lg:w-72 h-[25rem] inline-block border-dashed z-20 shadow-5xl shadow-black drop-shadow-4xl mt-20 rounded-md -ml-40 rotate-12' fill='none' stroke='black' strokeWidth='2' strokeDasharray='12%2c 17%2c 16'  />
        </div>

      </section>
      <div className='hidden md:flex w-full h-48 bg-stone-950 absolute -bottom-14 blur-2xl z-10 m-0'></div>
    </section>
      
      <ExploreWorld />

      <div className='max-w-[1440px] flex flex-col items-center mt-40'>
        <div className='flex flex-col justify-center items-center text-center'>
          <h1 className='font-londrina text-5xl text-white'>Last Blogs</h1>
          <p className='w-7/12 text-white font-londrina mt-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam feugiat a lectus luctus.
            Lorem ipsum dolor sit amet, consectetur
          </p>
        </div>

        <div className='flex flex-col gap-8 my-16 px-5'>
          <FilteredBlogs filteredBlogs={filteredBlogs} />
        </div>

        <Link to={route.blogs.path} className='font-londrina text-blue-300 border-2 border-blue-300 hover:text-blue-200 hover:border-blue-200 px-8 py-2 rounded-3xl mt-14'>All blogs</Link>
        
      </div>

      <div className='relative flex flex-row justify-center bottom-0 w-full mt-36'>  
        <img src={footer_img}  alt='' className='lg:h-[850px] w-full' />
        <div className='w-full h-48 bg-stone-950 absolute -top-24 blur-2xl m-0'></div>
        <div className='absolute text-white bottom-1 0 flex flex-row items-center gap-2 justify-center font-londrina text-lg'>©2023 DAVID FONT. <span className='text-sm font-londrina'>All rights reserved | HOME BLOGS LOCATIONS</span> </div>
      </div>
    </div>
  )
}
