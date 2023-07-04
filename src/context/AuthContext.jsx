import React, { useReducer, useState, createContext, useEffect } from 'react';

export const AuthContext = createContext()

const initState = { isAuth: false, user: {} }

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "SET_LOGGED_IN":
      return { isAuth: true, user: payload.user }
    case "SET_LOGGED_OUT":
      return initState
    default:
      return state

  }

}
export default function AuthContextProvider({children}) {


  const [isAppLoading, setisAppLoadinge] = useState(true);
  const [state, dispatch] = useReducer(reducer, initState);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('users'))

    if (user) {
      dispatch({ type: 'SET_LOGGED_IN', payload: user })
    }
    setTimeout(() => {
      setisAppLoadinge(false)
    }, 2000)

  }, [])
  return (
    <AuthContext.Provider value={{ isAppLoading, ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  )
}
