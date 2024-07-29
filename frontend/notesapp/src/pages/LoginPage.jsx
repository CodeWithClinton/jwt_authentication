import React, { useState } from 'react'
import api from '../api'
import "./form.css"
import { useNavigate } from 'react-router-dom'
import Error from '../components/Error'

const LoginPage = ({setIsAuthenticated, fetchUsername}) => {

  const navigate = useNavigate()

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const userCredential = {
    username, password
  }

  function handleSubmit(e){
    e.preventDefault()
    setLoading(true)
    api.post("/token/", userCredential)
    .then(res => {
      localStorage.setItem("access", res.data.access)
      localStorage.setItem("refresh", res.data.refresh)
      console.log(res.data)
      setIsAuthenticated(true)
      fetchUsername()
      navigate("/")
    })

    .catch(error => {
      console.log(error.message)
      setError(error.message)
      setLoading(false)
    })
  }


  return (
    <form onSubmit={handleSubmit}>
    <h5>Login for more access</h5>

    {error && <Error error={error} />}
    
    <div className="mb-3">
      <label htmlFor="exampleFormControlInput2" className="form-label">
        Username
      </label>
      <input
        type="input"
        className="form-control"
        id="exampleFormControlInput2"
        placeholder="Input your username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
    </div>

    <div className="mb-3">
      <label htmlFor="exampleFormControlInput3" className="form-label">
        Password
      </label>
      <input
        type="password"
        className="form-control"
        id="exampleFormControlInput3"
        placeholder="Input your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </div>

   
    <button
      className="btn btn-primary d-flex justify-content-center"
      style={{ width: "100%" }}
      disabled={loading}
    >
      Login
    </button>
  </form>
  )
}

export default LoginPage