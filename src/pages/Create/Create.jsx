import React from 'react'
import { CreateForm } from './CreateForm'

export const Create = () => {
  return (
    <div className='flex flex-col bg-stone-100 items-center justify-center w-full mx-auto'>
      <h2 className='text-3xl mb-6 mt-10'>Create blog</h2>
      <CreateForm />
    </div>
  )
}
