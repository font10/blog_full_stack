import React from 'react'
import { AuthForm } from './AuthForm'

export const Auth = () => {
  
  return (
    <div>
      <div className='bg-transparent min-h-screen flex items-center justify-center px-16'>
        <div className='relative w-full max-w-lg'>

          <div className='absolute top-10 md:top-0 -left-3 md:-left-3 lg:-left-20 w-[280px] h-[280px] md:w-[350px] md:h-[350px] lg:w-[450px] lg:h-[450px] bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl'></div>
          <div className='absolute top-10 md:top-0 -right-5 md:-right-10 lg:-right-32 w-[280px] h-[280px] md:w-[350px] md:h-[350px] lg:w-[450px] lg:h-[450px] bg-yellow-300 rounded-full mix-blend-multiply filter blur-2xl'></div>
          <div className='absolute -bottom-0 md:-bottom-20 lg:-bottom-36 left-3 md:left-20 w-[280px] h-[280px] md:w-[350px] md:h-[350px] lg:w-[450px] lg:h-[450px] bg-pink-300 rounded-full mix-blend-multiply filter blur-2xl'></div>

          <div className='m-8 relative'>
            <div className='p-5 bg-white rounded-lg'>
              <AuthForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
