import React from 'react'
import { Navbar } from '../Navbar/Navbar'

export const Layout = ({children}) => {
  return (
    <div className='flex flex-col h-full'>
      <Navbar />
      <div className='flex-1 mx-auto max-w-[1440px] bg-[#0a0a0a] w-full justify-center'>
        { children }
      </div>
    </div>
  )
}
