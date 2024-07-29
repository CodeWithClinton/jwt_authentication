import React from 'react'
import "./AddNotePage.css"

const RegisterPage = () => {
  return (
    <form>
      <h5>Create a new account</h5>

      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Input your email address"
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

      <div className="mb-3">
        <label htmlFor="exampleFormControlInput4" className="form-label">
          Confirm Password
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleFormControlInput4"
          placeholder="Confirm your password"
        />
      </div>

      <button
        className="btn btn-primary d-flex justify-content-center"
        style={{ width: "100%" }}
      >
        Register
      </button>
    </form>
  )
}

export default RegisterPage