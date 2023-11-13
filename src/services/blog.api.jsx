import axios from 'axios'

export const addBlog = async(token, newBlog) => {
  const { data } = await axios.post('http://localhost:5000/blog', newBlog, { headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  }} )

  return data
}

export const getBlogs = async() => {
  const { data } = await axios.get('http://localhost:5000/blog/getAll')
  return data
}

export const getBlogById = async(id) => {
  const { data } = await axios.get('http://localhost:5000/blog/' + id)
  console.log(data)
  return data.blog
}

export const getLocation = async(place) => {
  const { data } = await axios.get('http://localhost:5000/blog/' + place )
  console.log(data)
  return data
}