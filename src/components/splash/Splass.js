import React from 'react'
import { Link } from 'react-router-dom'
import "./Splash.css"

const Splash = () => {
  return (
    <div className="container">
        <div className="splash">
        <div className='top'>
        <h3>async</h3>
            <br />
            <h1>tic tac toe</h1>
        </div>
           <div className='bottom'>
           <Link to="/login" className='login'>
            Login
            </Link>
            <Link to="/register" className='register'>
            Register
            </Link>
            
           </div>
            
        </div>
    </div>
  )
}

export default Splash