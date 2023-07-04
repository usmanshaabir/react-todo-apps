import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Frontend from './Frontend';
import Dashboard from './Dashboard';
import Auth from './Auth';
import PrivateRoute from 'components/PrivateRoute';

export default function PublicRoutes() {
  return (
    <>
      <Routes>
        <Route path='/*' element={<PrivateRoute Component={Frontend} />} />
        <Route path='/Dashboard/*' element={<Dashboard />} />
        <Route path='/Auth/*' element={<Auth />} />
      </Routes>
    </>
  )
}
