import React from 'react'
import "./AddNotePage.css"

const LoginPage = () => {
  return (
    <form>
      <h5>Login for more access</h5>
      
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput2" className="form-label">
          Username
        </label>
        <input
          type="input"
          className="form-control"
          id="exampleFormControlInput2"
          placeholder="Input your username"
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
        />
      </div>

     
      <button
        className="btn btn-primary d-flex justify-content-center"
        style={{ width: "100%" }}
      >
        Login
      </button>
    </form>
  )
}

export default LoginPage