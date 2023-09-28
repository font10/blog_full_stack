import React from 'react'
import { AiOutlineEye } from 'react-icons/ai'

export const FeaturedBlogs = () => {
  const blogs = [
    { title: 'Blog 1', desc: 'Desc 1', img: 'https://wallpapercave.com/wp/g5mmi4F.jpg', category: 'Nature', views: 120874, author: 'Font', created: '25/09/2023' },
    { title: 'Blog 2', desc: 'Desc 2', img: 'https://wallpapercave.com/wp/D0LRLnk.jpg', category: 'Trekking', views: 12, author: 'Font', created: '25/09/2023' },
    { title: 'Blog 3', desc: 'Desc 3', img: 'https://wallpapercave.com/wp/bfa45pD.jpg', category: 'Landscape', views: 34, author: 'Font', created: '25/09/2023' },
    { title: 'Blog 4', desc: 'Desc 4', img: 'https://wallpapercave.com/wp/oowTzBW.jpg', category: 'Stars', views: 5453, author: 'Font', created: '25/09/2023' },
    { title: 'Blog 5', desc: 'Desc 5', img: 'https://wallpapercave.com/wp/rGiHpuz.jpg', category: 'Mountains', views: 722, author: 'Font', created: '25/09/2023' },
    { title: 'Blog 6', desc: 'Desc 6', img: 'https://wallpapercave.com/wp/oYVbJir.jpg', category: 'Water', views: 13, author: 'Font', created: '25/09/2023' },
  ]

  

  return (
    <div className='flex flex-col justify-center items-center max-w-[1440px] mx-auto p-5'>    
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        {
          blogs.map((blog) => (
            <div className='relative text-white'>
              <img src={blog.img} alt='milky way' className='rounded-xl' />
              <div className='absolute z-10 h-40 bottom-0 p-5 w-full bg-stone-500 bg-opacity-30 rounded-xl'>
                <div className='mb-3 h-8 flex flex-row items-center'>
                  <span className='px-5 py-1 border-2 rounded-3xl text-sm'>{blog.category}</span>
                  <span className='px-1 py-1 ml-3 text-sm'>{blog.views}</span><AiOutlineEye />
                </div>
                <span className='text-[22px] font-semibold'>{blog.title}</span>
                <p className='text-[12px]'>{blog.desc}</p>
                <div className='text-xs mt-3 flex justify-between'>
                  <span>Author: {blog.author}</span>
                  <span>Created: {blog.created}</span>
                </div>
              </div>
            </div>
          ))
        }
        </div>
    </div>
  )
}
