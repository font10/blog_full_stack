import axios from 'axios'

export const getPlaces = async() => {
  const { data } = await axios.get('https://blog-backend-j50n.onrender.com/place')
  return data
}

export const addPlace = async(token, newPlace) => {
  const { data } = await axios.post('https://blog-backend-j50n.onrender.com/place', newPlace, { headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  }} )

  return data
}

export const getListCountries = async() => {
  const { data } = await axios.get('https://countriesnow.space/api/v0.1/countries')
  return data.data
}

export const getListPlaces = async() => {
  const { data } =  await axios.get('https://blog-backend-j50n.onrender.com/place')
  return data
}