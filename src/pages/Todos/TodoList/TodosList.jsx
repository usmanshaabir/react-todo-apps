import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { Space, Tooltip } from 'antd';
import { useNavigate } from 'react-router-dom';


export default function TodosList() {

  const navigate = useNavigate()

  const [documents, setdocuments] = useState([])

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('users')) || []
    setdocuments(todos)
  }, []);

  const handleAddTodo = () => {
    navigate('/Todos/AddTodo')
  }

  const handleEdit = () => {

  }
  const handleDelete = (items) => {
    let deleteTodo = documents.filter(todo => todo.id !== items.id);
    setdocuments(deleteTodo);
    localStorage.setItem('users', JSON.stringify(deleteTodo));
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div>
            <button className="btn btn-info mt-5" onClick={handleAddTodo}>Add Todo</button>
          </div>
          <h1 className='text-center mt-5'>TodosList</h1>
          <div className='table-responsive table-border'>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Full Name</th>
                  <th>Date</th>
                  <th>Email</th>
                  <th>Password</th>
                  <th className='text-center'>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  documents.map((items, index) => {
                    return (
                      <tr key={index}>
                        <th>{index + 1}</th>
                        <td>{items.name}</td>
                        <td>{items.date}</td>
                        <td>{items.email}</td>
                        <td>{items.password}</td>
                        <td className='text-center'>
                          <span className='me-3'></span>
                          <Space >
                            <Tooltip placement="topRight" title='Edit' >
                              <span onClick={()=>{navigate(`/Todos/users/${items.id}`)}}><FontAwesomeIcon icon={faPenToSquare} /></span>
                            </Tooltip>
                            <Tooltip placement="topRight" title='Delete' >
                              <span onClick={()=>{handleDelete(items)}}><FontAwesomeIcon icon={faTrash} /></span>
                            </Tooltip>
                          </Space>
                        </td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

