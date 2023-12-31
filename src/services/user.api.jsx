import axios from 'axios'

export const userAuthRequest = async(data, isSignUp) => {
  const res = await axios
    .post(`https://blog-backend-j50n.onrender.com/user/${isSignUp ? "login" : "signup" }`, {
      username: isSignUp ? "" : data.username,
      email: data.email,
      password: data.password
    })
    .catch((err) => console.log(err))

    if(res.status !== 200 && res.status !== 201 ) {
      console.log("Unexpected Error")
    }
  
    return res
}