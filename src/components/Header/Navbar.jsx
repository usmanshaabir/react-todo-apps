import { AuthContext } from 'context/AuthContext';
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const { isAuth } = useContext(AuthContext)

  const Navigate = useNavigate()

  const handleLogout = () => {
    Navigate('/Auth/Login')
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-primary navbar-dark">
        <div className="container">
          <Link to="/" className="navbar-brand">Navbar</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/About" className="nav-link">About</Link>
              </li>
              <li className="nav-item">
                <Link to="/Contact" className="nav-link">Contact</Link>
              </li>
            </ul>
            <div className="d-flex">
              {
                !isAuth ?
                  <Link to='/Auth/Login' className="btn btn-success me-2">Login</Link> :
                  <>
                    <Link to='/Dashboard/Home' className="btn btn-success me-2">Dashboard</Link>
                    <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
                  </>
              }
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
