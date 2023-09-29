import axios from 'axios'

export const addBlog = async(token, newBlog) => {
  const { data } = await axios.post('http://localhost:5000/blog', newBlog, { headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  }} )

  return data
}

export const getBlogs = async() => {
  const res = await axios.get('http://localhost:5000/blog/getAll')
  return res.data
}

export const getBlogById = async(id) => {
  const res = await axios.get('http://localhost:5000/blog/' + id)
  return res.data.blog
}