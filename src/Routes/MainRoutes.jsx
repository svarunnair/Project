import React from 'react'
import Signup from '../Pages/Signup'
import Signin from '../Pages/Signin'
import { Route, Router, Routes } from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import { Text } from '@chakra-ui/react'

function MainRoutes() {

  let token= localStorage.getItem('Token')
  return (
    <div>
      <Routes>
      <Route path= "*" element={<Text>Page not found</Text>}/>
        <Route path= "/" element={<Signup/>}/>
        <Route path= "/signin" element={<Signin/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/home" element={token&&<HomePage/>}/>

      </Routes>
    
    </div>
  )
}

export default MainRoutes