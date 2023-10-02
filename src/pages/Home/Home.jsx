import React, { useEffect, useState } from 'react'
import { getBlogs } from '../../helpers/blog.api'
import { beach, bled, boat, coast, footer_img, mountain } from '../../utils/images'
import { FilteredBlogs } from '../Home/Blogs/FilteredBlogs'
import { ExploreWorld } from './Blogs/ExploreWorld'
import { route } from '../../models/router.model'
import { Link } from 'react-router-dom'

export const Home = () => {
  const [blogs, setBlogs] = useState()
  const [filteredBlogs, setFilteredBlogs] = useState()

  useEffect(() => {
    getBlogs()
      .then(res => { setBlogs(res.blogs); setFilteredBlogs(res.blogs) })
      .catch(err => console.log(err))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const cards = [
    { country: 'Spain', site: 'Delta de l\'Ebre', image: boat },
    { country: 'Slovenia', site: 'Lake Bled', image: bled },
    { country: 'Spain', site: 'Cala Canyet', image: coast },
    { country: 'Spain', site: 'Cala Illa Roja', image: beach },
  ]
  
  return (
    <div className='flex flex-col justify-center items-center bg-[#0a0a0a]'>   
      <img src={mountain}  alt='' className='lg:h-[850px] w-full' />
      <div className='w-full h-48 bg-stone-950 absolute bottom-5 blur-2xl m-0'></div>
      
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
          <FilteredBlogs filteredBlogs={filteredBlogs} />
          <FilteredBlogs filteredBlogs={filteredBlogs} />
        </div>

        <Link to={route.blogs.path} className='font-londrina text-blue-300 mt-14'>All blogs</Link>
        
      </div>

      <div className='relative flex flex-row justify-center bottom-0 w-full mt-36'>  
        <img src={footer_img}  alt='' className='lg:h-[850px] w-full' />
        <div className='w-full h-48 bg-stone-950 absolute -top-24 blur-2xl m-0'></div>
        <div className='absolute text-white bottom-10 flex flex-row items-center gap-2 justify-center font-londrina text-lg'>©2023 DAVID FONT. <span className='text-sm font-londrina'>All rights reserved | HOME BLOGS LOCATIONS</span> </div>
      </div>
    </div>
  )
}
