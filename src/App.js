import './App.css';
import Login from './components/login/Login.js';
import Register from './components/register/Register';
import Homepage from './components/homepage/Homepage'
import Splash from './components/splash/Splass';
import {createBrowserRouter, RouterProvider} from "react-router-dom" 
import Game from './components/game/game';
import { useState } from 'react'


const router=createBrowserRouter([
{
  path: "/",
  children:[
    {
      path: "login",
      element: <Login />
    },
    {
      path: "register",
      element: <Register />
    }
    ,
    {
      path: "splash",
      element: <Splash />
    },
    {
      path: "game",
      element: <Game />
    }
  ]
}

])

function App() {
  const [user,setLoginUser]=useState({})
  return (
    <div className="App">
    
      <RouterProvider router={router} />

      

    </div>
   
    
  );
}

export default App;
