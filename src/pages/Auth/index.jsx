import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Login from './Login'

export default function index() {
  return (
    <>
      <Routes>
        <Route path='/Login' element={<Login/>} />
      </Routes>
    </>
  )
}
