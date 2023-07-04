import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Hero() {
  const navigate = useNavigate()
  const handleHomePage = () => {
    navigate('/')
  }
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className='text-center mt-5'>Welecome To Dashboard</h1>
            <div className='text-center mt-5'>
              <button className='btn btn-lg btn-success ' onClick={handleHomePage}>Go Home Page</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
