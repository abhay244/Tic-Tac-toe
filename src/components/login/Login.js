import React, {useState} from "react"
import { Link } from 'react-router-dom'
import "./Login.css"
import axios from "axios"
//import { useHistory } from "react-router-dom"

const Login = ({ setLoginUser}) => {

   // const history = useHistory()

    const [ user, setUser] = useState({
        email:"",
        password:""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const login = () => {
        axios.post("http://localhost:9002/login", user)
        .then(res => {
            alert(res.data.message)
            setLoginUser(res.data.user)
           // history.push("/")
        })
    }

    return (
        <div className="Container">
        <div className="login">
            <h6>Login</h6>
            <h1>Please Enter login Details</h1>
            <h2 className="inputText">User Name</h2>
            <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"></input>
            <h2 className="inputText">Password</h2>
            <input className="password" type="password" name="password" value={user.password} onChange={handleChange}  placeholder="Enter your Password" ></input>
            <div className="error">Please enter Correct details</div>
            <div className="button" onClick={login}>Login</div>
            
            <Link to="/register" className='register'>
            Register
            </Link>
            {/* <div className="button" onClick={() => history.push("/register")}>Register</div> */}
        </div>
        </div>
    )
}

export default Login