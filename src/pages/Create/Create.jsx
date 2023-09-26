import React, { useState } from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { uploadImage } from '../../helpers/blog.api'
import axios from 'axios'

export const Create = () => {
  const categories = [
    'nature',
    'music',
    'travel',
    'design',
    'programing',
    'fun',
    'fashion'
  ]
  const INITIAL_VALUES = {
    title: '',
    desc: '',
    image: '',
    category: '',
  }

  const [inputs, setInputs] = useState(INITIAL_VALUES)

  const handleCloseImg = () => {
    setInputs({ ...inputs, image: null })
  }

  const onChangeFile = (e) => {
    setInputs({ ...inputs, image: e.target.files[0] })
  }

  const handleInputs = (e) => {
    const { name, value } = e.target
    setInputs({ ...inputs, [name]: value })
  }

  const handleSubmit =  async(e) => {
    e.preventDefault()

    try {
      const formData = new FormData()
      console.log(inputs)
      let filename = null
      if(inputs.image) {
        filename = crypto.randomUUID() + inputs.image.name
        formData.append("filename", filename)
        formData.append("image", inputs.image)

        await axios.post('http://localhost:5000/upload', formData)
      } else {
        return
      }
    } catch(err) {
      console.log(err)
    }
  }

  return (
    <div className='flex flex-col bg-stone-100 items-center justify-center w-full mx-auto'>
      <h2 className='text-3xl mb-6 mt-10'>Create blog</h2>
      <form onSubmit={handleSubmit} className='w-6/12 p-5' encType='multipart/form-data'>
        <div className=''>
          <input 
            type="text" 
            name='title'
            className="w-full mt-3 py-3 px-4 block w-full focus:outline-none border-2 border-gray-200 rounded-md text-sm"
            placeholder="Title"
          />
        </div>
        <div className=''>
          <textarea 
            type="text" 
            name='desc'
            className="w-full mt-3 py-3 px-4 block w-full focus:outline-none border-2 border-gray-200 rounded-md text-sm"
            placeholder="Description"
          />
        </div>
        <div className='w-full mt-3'>
          <select 
            name='category' 
            value={inputs.category} 
            className='w-full px-5 py-3 border-2 border-gray-200 rounded-md focus:outline-none'
            onChange={(e) => handleInputs(e)}
          >
            {
              categories.map((category) => (
                <option key={crypto.randomUUID()} value={category}>{category}</option>
              ))
            }
          </select>
        </div>
        <div className='mt-3'>
          <input type="file" id='image' className="block w-full text-sm text-slate-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-violet-100 file:text-violet-700
            hover:file:bg-violet-200"
            onChange={onChangeFile}
          />
          {
            inputs.image && <p className=''>{inputs.image.name} <AiOutlineCloseCircle onClick={() => handleCloseImg()} /></p>
          }
        </div>
        <button className='bg-violet-500 w-full text-white font-medium px-6 py-2 rounded-lg mt-8'>Submit</button>
      </form>
    </div>
  )
}
