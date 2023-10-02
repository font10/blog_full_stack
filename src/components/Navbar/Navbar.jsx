import React, { useState } from 'react'
import { route } from '../../models/router.model'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logout } from '../../redux/authSlice'
import diafragma from '../../assets/images/diafragma.png'
import { AiOutlineMenu } from '../../utils/icons'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  //const auth = useSelector(state => state.auth)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logout())
    navigate(route.auth.path)
  }
  
  const tabs = [
    { name: 'Home', path: route.root.path },
    { name: 'Blogs', path: route.blogs.path },
    { name: 'Locations', path: route.create.path },
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

              <Link to='/auth' className="flex items-center gap-x-2 font-medium text-gray-500 hover:text-blue-600 sm:border-l sm:border-gray-300 sm:my-6 sm:pl-6 dark:border-gray-700 dark:text-gray-400 dark:hover:text-blue-500" href="#">
                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                </svg>
                <span className='font-londrina text-gray-400 hover:text-blue-600'>Log in</span>
              </Link>
            </div>


          </div>

          <div className={`${ isOpen ? 'block' : 'hidden'} top-12 left-0 bg-gray-300 bg-opacity-50 w-full absolute overflow-hidden transition-all duration-300 m-0 grow`}>
            <div className="flex flex-col gap-y-3 gap-x-0 p-5 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0">

              {
                tabs.map(tab => (
                  <Link 
                  to='/' 
                  key={crypto.randomUUID()}
                  className='font-medium text-gray-700 sm:text-gray-500 hover:text-blue-600 font-londrina cursor-pointer'
                  >{tab.name}</Link>
                ))
              }

              <Link to='/auth' className="flex items-center gap-x-2 font-medium text-gray-500 hover:text-blue-600 sm:border-l sm:border-gray-300 sm:my-6 sm:pl-6 dark:border-gray-700 dark:text-gray-400 dark:hover:text-blue-500" href="#">
                <svg className="w-4 h-4 text-gray-700 sm:text-gray-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                </svg>
                <span className='font-londrina text-gray-700 sm:text-gray-500'>Log in</span>
              </Link>
            </div>


          </div>
        </nav>
      </header>
    </div>
  )
}
