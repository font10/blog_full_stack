import axios from 'axios'

export const uploadImage = async(formData) => {
  const res = await axios.post('https://blog-backend-j50n.onrender.com/images/single', formData)

  return res
}
