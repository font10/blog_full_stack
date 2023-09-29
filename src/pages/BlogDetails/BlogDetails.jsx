import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getBlogById } from '../../helpers/blog.api'
import { profile } from '../../utils/images'
import { getColorCategory, getIconCategory } from '../../utils/functions'
import { MorePhotos } from './MorePhotos'
import { Modal } from '../../components/Modal/Modal'

export const BlogDetails = () => {
  const { id } = useParams()
  const [blog, setBlog] = useState()
  const [modal, setModal] = useState(false)

  useEffect(() => {
    getBlogById(id)
      .then(res => { setBlog(res);})
      .catch(err => console.log(err))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])  

  const morePhotos = [
    'https://dreamypixel.com/wp-content/uploads/2017/08/Milky-Way-above-Tre-Cime-di-Lavaredo.jpg',
    'https://www.fredrickmuscat.com/wp-content/uploads/2018/09/AB5A0762-copy.jpg',
    'https://mediaim.expedia.com/destination/2/9173dbdc52b1c63abd1160fc4ad03c4d.jpg',
    'https://guerrinistefanocom.files.wordpress.com/2018/06/tre-cime-lavaredo-milky-way-guerrini-stefano.jpg',
    'https://guerrinistefanocom.files.wordpress.com/2018/06/tre-cime-lavaredo-milky-way-guerrini-stefano.jpg',
    'https://www.casadelpuzzle.com/images/productos/puzzle-ravensburger-las-tres-cimas-de-lavaredo-dolomitas-1000p-1-26041.jpg',
  ]

  return (
    <div className='bg-black'>
      {
        blog && <div>
          <div className='relative'>            
            {
              [0,1].map(() => (
                <img
                  key={crypto.randomUUID()}
                  src={`http://localhost:5000/images/` + blog.image.split('_').splice(1).join(' ')} 
                  alt='detail blog pic'
                  className='w-full object-cover blur-sm drop-shadow-none fixed h-screen'
                />
              ))
            }            
          </div>          

          <div className='absolute top-20 left-[9%] lg:left-[20%] md:w-10/12 lg:w-8/12 rounded-3xl p-1' onClick={() => setModal(true)}>
            <img 
              src={`http://localhost:5000/images/` + blog.image.split('_').splice(1).join(' ')} 
              alt='detail blog pic'
              className='w-full object-cover rounded-3xl'
            />
            <div className='flex flex-col bg-white h-full -mt-20 px-10 py-6 z-10 m-14 rounded-bl-lg rounded-br-lg'>
              <div className='flex flex-row justify-between items-center'>
                <span className='text-white font-semibold text-3xl'>{blog.title}</span>
                <div className='flex flex-row items-center mr-2'>
                  <img src={profile} alt='' width={35} />
                  <span className='text-white text-md font-medium ml-2'>{blog.userId.username}</span>
                </div>
              </div>
              <div className='flex flex-row justify-between items-center mt-12'>
                <h1 className='text-black font-semibold text-3xl'>Description</h1>
                <div className='flex flex-row justify-center items-center gap-2'>
                  <img src={getIconCategory(blog)} alt='' loading='lazy' decoding='async' width={35} />
                  <span className={`${getColorCategory(blog)} text-md font-semibold`}>{blog.category}</span>  
                </div>
              </div>
              <div>
                <div className='text-black mt-5'>
                  {
                    blog.desc.split('\n').map(blog => (
                      <p key={crypto.randomUUID()} className='text-justify'>{blog}<br/></p>
                    ))
                  }
                </div>
              </div>

              <MorePhotos photos={morePhotos} setModal={setModal} />
              
            </div>
          </div>

          {
            modal && <Modal 
              setModal={setModal} 
              image={`http://localhost:5000/images/` + blog.image.split('_').splice(1).join(' ')} 
            />
          }

        </div>
      }
      
       
    </div>
  )
}

