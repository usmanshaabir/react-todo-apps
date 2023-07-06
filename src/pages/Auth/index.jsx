import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Login from './Login'

export default function index() {
  return (
    <>
      <Routes>
        <Route path='/Login' element={<Login/>} />
        <Route path='*' element={<h1 className='text-center mt-5'>404 Page Not Found</h1>} />
      </Routes>
    </>
  )
}
