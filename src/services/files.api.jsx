import axios from 'axios'

export const uploadImage = async(formData) => {
  const res = await axios.post('http://localhost:5000/images/single', formData)

  return res
}
