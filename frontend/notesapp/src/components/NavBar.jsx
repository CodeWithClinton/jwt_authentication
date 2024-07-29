import React from "react";
import { FaSquarePlus } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";

const NavBar = ({
  isAuthenticated,
  username,
  setIsAuthenticated,
  setUsername,
}) => {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.clear();
    setIsAuthenticated(false);
    setUsername("");
    navigate("/login");
  }

  return (
    <nav className="navbar bg-body-tertiary py-50" style={{ padding: "20px" }}>
      <div className="container d-flex justify-content-around">
        <Link className="navbar-brand" to="/">
          <h4 style={{ fontWeight: "bold" }}>Notey</h4>
        </Link>

        <Link to="add-notes" style={{ textDecoration: "none" }}>
          <button className="btn btn-secondary btn-md" type="button">
            <FaSquarePlus /> Add Notes
          </button>
        </Link>

        <div className="btn-containers" style={{ padding: "5px 10px" }}>
          {isAuthenticated ? (
            <>
              <span className="me-3">{username ? `Hi, ${username}` : ""}</span>

              <button
                className="btn btn-danger btn-md"
                type="button"
                onClick={handleLogout}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="login"
                style={{ textDecoration: "none", margin: "auto 10px" }}
              >
                <button className="btn btn-primary btn-md" type="button">
                  Login
                </button>
              </Link>

              <Link
                to="register"
                style={{ textDecoration: "none", margin: "auto 10px" }}
              >
                <button className="btn btn-success btn-md" type="button">
                  Register
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
