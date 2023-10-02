import React, { useEffect, useState } from 'react'
import { getBlogs } from '../../helpers/blog.api'
import { beach, bled, boat, coast, footer_img, blogs_img } from '../../utils/images'
import { FilteredBlogs } from '../Home/Blogs/FilteredBlogs'
import { Tabs } from './Tabs'

export const Blogs = () => {
  const [blogs, setBlogs] = useState()
  const [filteredBlogs, setFilteredBlogs] = useState()
  const [activeCategory, setActiveCategory] = useState('All')

  useEffect(() => {
    getBlogs()
      .then(res => { setBlogs(res.blogs); setFilteredBlogs(res.blogs) })
      .catch(err => console.log(err))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if(activeCategory === 'All'){
      setFilteredBlogs(blogs)
    } else {
      setFilteredBlogs(() => {
        const filteredBlogs = blogs.filter((blog) => blog.category.toLowerCase() === activeCategory.toLowerCase())
        return filteredBlogs
      })
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeCategory])

  const cards = [
    { country: 'Spain', site: 'Delta de l\'Ebre', image: boat },
    { country: 'Slovenia', site: 'Lake Bled', image: bled },
    { country: 'Spain', site: 'Cala Canyet', image: coast },
    { country: 'Spain', site: 'Cala Illa Roja', image: beach },
  ]
  
  return (
    <div className='flex flex-col justify-center items-center bg-[#0a0a0a]'>   
      <img src={blogs_img}  alt='' className='lg:h-[850px] w-full' />
      <div className='w-full h-36 bg-stone-950 absolute bottom-12 blur-2xl m-0'></div>
      <div className='absolute top-[30%] flex flex-col justify-center items-center'>
        <span className='text-white font-londrina text-7xl'>Blogs</span>
        <p className='font-londrina text-white w-8/12 mt-6'>Nullam scelerisque id magna et accumsan. Nulla facilisi. Integer tempus lacus eget urna egestas, ac suscipit nulla auctor. Fusce efficitur, elit sagittis lobortis volutpat</p>
      </div>

      <div className='max-w-[1440px] flex flex-col items-center mt-20'>
        <div className='flex flex-col w-full px-14 justify-center items-center text-center'>
          <Tabs activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
        </div> 

        <div className='flex flex-col gap-8 my-16 px-5'>
          <FilteredBlogs filteredBlogs={filteredBlogs} />
          <FilteredBlogs filteredBlogs={filteredBlogs} />
          <FilteredBlogs filteredBlogs={filteredBlogs} />
        </div>

        <span className='font-londrina text-blue-300 mt-14'>All blogs</span>
        
      </div>

      <div className='relative flex flex-row justify-center bottom-0 w-full mt-36'>  
        <img src={footer_img}  alt='' className='lg:h-[850px] w-full' />
        <div className='w-full h-48 bg-stone-950 absolute -top-24 blur-2xl m-0'></div>
        <div className='absolute text-white bottom-10 flex flex-row items-center gap-2 justify-center font-londrina text-lg'>©2023 DAVID FONT. <span className='text-sm font-londrina'>All rights reserved | HOME BLOGS LOCATIONS</span> </div>
      </div>
    </div>
  )
}
