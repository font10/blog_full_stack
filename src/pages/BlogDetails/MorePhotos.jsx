import React from 'react'

export const MorePhotos = ({ photos, setModal }) => {
  return (
    <div className="flex flex-col mt-8">                
      <h1 className='text-black font-semibold text-3xl'>More photos</h1>
      <div className="columns-2 lg:columns-3 gap-3 p-1 mt-3">
        {
          photos.map(photo => (
            <div key={crypto.randomUUID()} className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow rounded-xl">
              <div className="w-full" onClick={() => setModal(true)}>
                <img 
                  className="h-full w-full object-cover transition-transform duration-500 mb-2 group-hover:rotate-3 group-hover:scale-125 rounded-xl" 
                  src={photo} alt="" 
                />
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}
