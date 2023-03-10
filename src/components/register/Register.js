import React, { useState } from "react"
import { Link } from 'react-router-dom'
import "./Register.css"
import axios from "axios"
//import { useHistory } from "react-router-dom"

const Register = () => {

    //const history = useHistory()

    const [ user, setUser] = useState({
        name: "",
        email:"",
        password:"",
        reEnterPassword: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const register = () => {
        const { name, email, password, reEnterPassword } = user
        if( name && email && password && (password === reEnterPassword)){
            axios.post("http://localhost:9002/register", user)
            .then( res => {
                alert(res.data.message)
               // history.push("/login")
            })
        } else {
            alert("invlid input")
        }
        
    }

    return (
        <div className="Container">
            <div className="register">
            {console.log("User", user)}
            <h6>Register</h6>
            <h1>Please Enter Your Details</h1>
            <h2 className="inputText">User Name</h2>
            <input type="text" name="name" value={user.name} placeholder="Your Name" onChange={ handleChange }></input>
            <h2 className="inputText">Email</h2>
            <input type="text" name="email" value={user.email} placeholder="Your Email" onChange={ handleChange }></input>
            <h2 className="inputText">Password</h2>
            <input type="password" name="password" value={user.password} placeholder="Your Password" onChange={ handleChange }></input>
            <h2 className="inputText">Reenter password</h2>
            <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter Password" onChange={ handleChange }></input>
            <div className="success">Congratulations</div>
            <div className="button" onClick={register} >Register</div>
            <Link to="/login" className='login'>
            Login
            </Link>
            {/* <div className="button" onClick={() => history.push("/login")}>Login</div> */}
        </div>
        </div>
    )
}

export default Register