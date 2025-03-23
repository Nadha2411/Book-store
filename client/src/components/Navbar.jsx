import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Navbar.css'
import logo from '../assets/footer-logo.png';

const Navbar = ({role}) => {
  return (
    <nav className='navbar'>
        <div className='navbar-left'>
        <Link to="/" className='navbar-brand'>
          <img src={logo} alt="Logo" className="navbar-logo" /> {/* Add logo here */}
          BookStore
        </Link>
        </div>
        <div className='navbar-right'>
            <Link to="/books" className='navbar-link'>Books</Link>
            {role === "admin" && <>
            <Link to="/addbook" className='navbar-link'>Add Book</Link>
            <Link to="/addstudent" className='navbar-link'>Add Student</Link>
            <Link to="/dashboard" className='navbar-link'>Dashboard</Link>
            </>
            }
            {role === "" ? (
            <Link to="/login" className="navbar-link">
            <button className="navbar-btn login-btn">Login</button> {/* Changed Here */}
          </Link>
        ) : (
          <Link to="/logout" className="navbar-link">
            <button className="navbar-btn logout-btn">Logout</button> {/* Changed Here */}
          </Link>
            )}
    
        </div>
    </nav>
  )
}

export default Navbar
