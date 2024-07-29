import { useState} from 'react'
import api from '../api'
import "./form.css"
import { useNavigate } from 'react-router-dom'
import Error from '../components/Error'

const RegisterPage = () => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const navigate = useNavigate()

  const userInfo = {
    username, email, password
  }

  function handleSubmit(e){
    e.preventDefault()
    setLoading(true)



    if(!email || !username || !password || !confirmPassword){
      throw new Error("All fields must be filled up")
    }


    if(password !== confirmPassword){
      throw new Error("Password does not match")
    }



    api.post("/register/", userInfo)
    .then(res => {
      console.log(res.data)
      setLoading(false)
      navigate("/login")

    })

    .catch(err => {
      console.log(err.message)
      setError(err.message)
    })

  }


  return (
    <form onSubmit={handleSubmit}>
    <h5>Create a new account</h5>

    {error && <Error error={error} />}

    <div className="mb-3">
      <label htmlFor="exampleFormControlInput1" className="form-label">
        Email
      </label>
      <input
        type="email"
        className="form-control"
        id="exampleFormControlInput1"
        placeholder="Input your email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    </div>

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

    <div className="mb-3">
      <label htmlFor="exampleFormControlInput4" className="form-label">
        Confirm Password
      </label>
      <input
        type="password"
        className="form-control"
        id="exampleFormControlInput4"
        placeholder="Confirm your password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
    </div>

    <button
      className="btn btn-primary d-flex justify-content-center"
      style={{ width: "100%" }}
      disabled={loading}
    >
      Register
    </button>
  </form>
  )
}

export default RegisterPage