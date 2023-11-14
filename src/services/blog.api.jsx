import axios from 'axios'

export const addBlog = async(token, newBlog) => {
  const { data } = await axios.post('https://blog-backend-j50n.onrender.com/blog', newBlog, { headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  }} )

  return data
}

export const getBlogs = async() => {
  const { data } = await axios.get('https://blog-backend-j50n.onrender.com/blog/getAll')
  return data
}

export const getBlogById = async(id) => {
  const { data } = await axios.get('https://blog-backend-j50n.onrender.com/blog/' + id)
  console.log(data)
  return data.blog
}

export const getLocation = async(place) => {
  console.log('Aqui')
  const { data } = await axios.get('https://blog-backend-j50n.onrender.com/blog/place/' + place )
  console.log(data)
  return data
}