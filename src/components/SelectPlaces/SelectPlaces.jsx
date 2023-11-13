import React from 'react'

export const SelectPlaces = ({ places, value, customHandle }) => {
  return (
    <select 
      name='place' 
      value={value} 
      className='w-full px-5 py-3 border-2 border-gray-200 rounded-md focus:outline-none'
      onChange={(e) => customHandle(e)}
    >
      {
        places.map((countrie) => (
          <option key={crypto.randomUUID()} value={countrie._id}>
            {countrie.place}
          </option>
        ))
      }
    </select>
  )
}
