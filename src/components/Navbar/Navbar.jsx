import React, { useState } from 'react'
import { route } from '../../models/router.model'
import { Link } from 'react-router-dom'
import { diafragma } from '../../utils/images'
import { AiOutlineMenu } from '../../utils/icons'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const tabs = [
    { name: 'Home', path: route.root.path },
    { name: 'Blogs', path: route.blogs.path },
  ]
  
  return (
    <div className='w-full h-14 fixed z-40 justify-between flex items-center bg-transparent shadow-sm'>
      <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full text-sm py-3 sm:py-0">
        <nav className="relative max-w-7xl w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8" aria-label="Global">
          
          <div className="flex items-center justify-between">
            <Link to='/' className='flex flex-row items-center text-gray-500 font-londrina text-xl gap-3'>
              <img src={diafragma} alt='' width={40} />
              Colourvid
            </Link>
            <div className="sm:hidden bg-gray-100 bg-opacity-70 p-2 rounded-lg">
              <AiOutlineMenu 
                size={18}
                onClick={() => setIsOpen(!isOpen)}
              />
            </div>
          </div>

          <div className="hidden overflow-hidden transition-all duration-300 basis-full grow sm:block">
            <div className="flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:pl-7">

              {
                tabs.map(tab => (
                  <Link 
                  to={tab.path} 
                  key={crypto.randomUUID()}
                  className='font-medium text-gray-400 hover:text-blue-600 font-londrina'
                  >{tab.name}</Link>
                ))
              }

            </div>


          </div>

          <div className={`${ isOpen ? 'block' : 'hidden'} top-12 left-0 bg-gray-300 bg-opacity-50 w-full absolute overflow-hidden transition-all duration-300 m-0 grow`}>
            <div className="flex flex-col gap-y-3 gap-x-0 p-5 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0">

              {
                tabs.map(tab => (
                  <Link 
                  to={route.root.path} 
                  key={crypto.randomUUID()}
                  className='font-medium text-gray-700 sm:text-gray-500 hover:text-blue-600 font-londrina cursor-pointer'
                  >{tab.name}</Link>
                ))
              }
            
            </div>

          </div>
        </nav>
      </header>
    </div>
  )
}
