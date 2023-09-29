import React from 'react'
import { AiOutlineClose } from '../../utils/icons'

export const Modal = ({setModal, image}) => {
  return (
    <div className='fixed absolute inset-0 h-screen bg-black bg-opacity-10 flex justify-center items-center z-40'>
      <div className='relative bg-gray-900 w-10/12 rounded-lg z-40 p-1.5'>
        <div className='absolute z-40 bg-gray-800 hover:bg-gray-600 rounded-full top-3 right-4'>
          <AiOutlineClose size={36} className='p-2 text-white' onClick={() => setModal(false)} />
        </div>
        <div className='w-full'>
          <img src={image} alt='' />
        </div>
      </div>
    </div>
  )
}
