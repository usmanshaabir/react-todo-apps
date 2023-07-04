import { AuthContext } from 'context/AuthContext'
import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'

export default function PrivateRoute({Component}) {
  const { isAuth } = useContext(AuthContext)
  const location=useLocation()

  if (!isAuth)
    return <Navigate to='/Auth/Login' state={{from:location.pathname}} replace />
      return (
        <Component /> 
      )
}
