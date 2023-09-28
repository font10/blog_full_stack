import React, { useState } from 'react'
import { route } from '../../models/router.model'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logout } from '../../redux/authSlice'

export const Navbar = () => {
  const [showModal, setShowModal] = useState(false)
  const dispatch = useDispatch()

  const tabs = [
    { name: 'Home', path: route.root.path },
    { name: 'About', path: route.about.path },
    { name: 'Categories', path: route.categories.path },
    { name: 'Contacts', path: route.contacts.path },
    { name: 'Create', path: route.create.path },
  ]

  return (
    <div className='w-full h-14 px-10 static justify-between flex items-center bg-blue-950'>
      <div>
        <span className='font-bold text-white'>Blog</span>
      </div>
      <div>
        <ul>
          { 
            tabs.map(tab => <Link to={tab.path} className='mx-3 text-sm  text-white hover:text-blue-300'>{tab.name}</Link>)
          }
        </ul>
      </div>
      <div>
        <img 
            src='https://imgs.search.brave.com/HTUyKk8Vb_9hSWmylY1BXPS4eO5MdJpnjz-4Mx69OFY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZs/YXRpY29uLmNvbS8x/MjgvMzEzNS8zMTM1/NzE1LnBuZw' 
            alt="profile" 
            width={35} 
            onClick={() => setShowModal(!showModal)}
          />
        {
          showModal &&
          <div className='flex flex-col gap-2 bg-stone-100 right-3 py-2 rounded-lg absolute top-16 '>
            <Link to={route.create.path} className='hover:bg-stone-300 rounded-lg px-5 py-1'>Create</Link>
            <span  className='hover:bg-stone-300 rounded-lg px-5 py-1 cursor-pointer' onClick={() => dispatch(logout())}>Logout</span>
          </div>
        }
      </div>
    </div>
  )
}
