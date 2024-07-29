import React from 'react'
import { FaSquarePlus } from "react-icons/fa6";

const NavBar = () => {
  return (
    <nav className="navbar bg-body-tertiary py-50" style={{ padding: "20px" }}>
      <div className="container d-flex justify-content-around">
        <a className="navbar-brand" href="/">
          <h4 style={{ fontWeight: "bold" }}>Notey</h4>
        </a>

        <a href="add-notes" style={{ textDecoration: "none" }}>
          <button className="btn btn-secondary btn-md" type="button">
            <FaSquarePlus /> Add Notes
          </button>
        </a>

        <div className="btn-containers" style={{ padding: "5px 10px"}}>


          
          <span className="me-3">Hi, Clint</span>

           <button className="btn btn-danger btn-md" type="button">
            Logout
            </button>
       

            <a href="login" style={{ textDecoration: "none", margin: "auto 10px" }}>
            <button className="btn btn-primary btn-md" type="button">
              Login
            </button>
          </a>


          <a href="register" style={{ textDecoration: "none", margin: "auto 10px" }}>
            <button className="btn btn-success btn-md" type="button">
              Register
            </button>
          </a>
              
    

        </div>
      </div>
    </nav>
  )
}

export default NavBar