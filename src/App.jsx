import React from 'react'
import { Route,Routes,Navigate } from 'react-router-dom'
import Home from './components/Home'
import Room from './components/Room'
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/room/:id' element={<Room/>}/>
    </Routes>
    )
}

export default App