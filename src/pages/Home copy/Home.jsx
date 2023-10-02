import React, { useEffect, useState } from 'react'
import { getBlogs } from '../../helpers/blog.api'
import { categoriesSearch } from '../../utils/constants'
import { FilteredBlogs } from './Blogs/FilteredBlogs'
import { Tabs } from './Blogs/Tabs'

export const Home = () => {
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
  
  return (
    <div className='flex flex-col justify-center items-center max-w-[1440px] mx-auto p-5 mt-16'>    
      <Tabs 
        categoriesSearch={categoriesSearch} 
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

      <FilteredBlogs filteredBlogs={filteredBlogs} />
    </div>
  )
}
