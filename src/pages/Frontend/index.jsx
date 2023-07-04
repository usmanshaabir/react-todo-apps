import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './Home'
import About from './About';
import Contact from './Contact';
import Header from '../../components/Header';

export default function index() {
  return (
    <>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='About' element={<About/>}/>
        <Route path='Contact' element={<Contact/>}/>
      </Routes>
    </>
  )
}
