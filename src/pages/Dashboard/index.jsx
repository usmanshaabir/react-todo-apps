import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './Home';

export default function index() {
  return (
    <>
      <Routes>
        <Route path='/Home'  element={<Home />}/>
        <Route path='*' element={<h1 className='text-center mt-5'>404 Page Not Found</h1>} />

      </Routes>
    </>
  )
}
