import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AddTodos from './AddTodo/AddTodos';
import TodosList from './TodoList/TodosList';
import Header from '../../components/Header';
import UpdateTodo from './AddTodo/UpdateTodo';

export default function index() {
  return (
    <>
    <Header />
      <Routes>
        <Route path='/AddTodo' element={<AddTodos/>}/>
        <Route path='/TodoList' element={<TodosList/>}/>
        <Route path='/AddTodo/:id' element={<UpdateTodo/>}/>
        <Route path='*' element={<h1 className='text-center mt-5'>404 page Not Found</h1>}/>
      </Routes>
    </>
  )
}
