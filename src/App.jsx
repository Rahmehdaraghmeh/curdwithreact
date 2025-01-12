import React from 'react'
import Navbar from './assets/component/navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './assets/component/home/Home'
import Users from './assets/component/users/Users'
import Footer from './assets/component/footer/Footer'
import Details from './assets/component/users/Details'
import Create from './assets/component/users/Create'
// import Create from './assets/component/users/Create'

export default function App() {
  return (
    <>
     <Navbar/>
     <div className='container'>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/users' element={<Users/>}/>
      <Route path='/create' element={<Create/>}></Route>
      <Route path='/users/:id' element={<Details/>}></Route>

      <Route path='*' element={<h2> page not found </h2>}/>
      </Routes>
      <Footer/></div>
    </>
  )
}
