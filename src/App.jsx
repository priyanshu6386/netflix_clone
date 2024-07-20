import React, { useEffect } from 'react'
import Home from './Pages/Home/Home'
import { Routes,Route, useNavigate } from 'react-router-dom'
import Login from './Pages/Login/Login'
import Player from './Pages/Player/Player'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'
function App() {
   const navigate = useNavigate();
  useEffect(()=>{
    onAuthStateChanged(auth ,async (user)=>{
      if(user){
        console.log("Logged in");
        navigate('/')
      }else{
        console.log("Logged out");
        navigate('/login');
      }
    });
  },[])

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>} />     
        <Route path='/player/:id' element={<Player/>} />          

        
      </Routes>
    </div>
  )
}

export default App