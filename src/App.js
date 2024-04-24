import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Network from './pages/Network'
import Home from './pages/Home'
import Message from './pages/Message'
import Notification from './pages/Notification'
import Job from './pages/Job'
import Connections from './components/Connections'


const App = () => {
  return (
   <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>}/>
      <Route path='/network' element={<Network/>}/>
      <Route path='/jobs' element={<Job/>}/> 
      <Route path='/message' element={<Message/>}/>
      <Route path='/connection' element={<Connections/>}/>
      <Route path='/notification' element={<Notification/>}/>
    </Routes>
    </BrowserRouter>
   </>
  )
}

export default App