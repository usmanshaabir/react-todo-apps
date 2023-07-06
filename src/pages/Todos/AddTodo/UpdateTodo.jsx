import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import dayjs from 'dayjs'


export default function UpdateTodo() {

    const initState = { name: '', date: '', email: '', password: '', }

    const navigate = useNavigate();
    const { id } = useParams();
    const [state, setState] = useState(initState);

    const handleChange = (e) => {
        setState((s) => ({ ...s, [e.target.name]: e.target.value }))
    };
    const handleDate = (_, date) => setState(s => ({ ...s , date }))
    useEffect(() => {
        const todos = JSON.parse(localStorage.getItem('users'))
        const items = todos.find(todo => todo.id === id )
        setState(items)
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault()
        // let { name, date, email, password } = state
        // const user = {
        //     ...state,
        //     name, date, email, password,
        //     id: Math.random().toString(36).slice(2)
        // };
        const todos = JSON.parse(localStorage.getItem('users')) || [];

        // todos.push(user);
        const UpdatedTodo = todos.map((oldTodo) => {
            if (oldTodo.id === state.id) {
                return state
            }
            return oldTodo
        })

        // setTimeout(() => {
        localStorage.setItem('users', JSON.stringify(UpdatedTodo))
        // }, 2000)
    };
    const handleTodoList = () => {
        navigate('/Todos/TodoList')
    }
    return (
        <div className="container">
            <div className="row">
                <div>
                    <button className="btn btn-success mt-5" onClick={handleTodoList}>Todo List</button>
                </div>
                <h1 className='text-center mt-5'>UpdatedTodo</h1>
                <div className='card p-4 '>
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label className="form-label">Full Name</label>
                            <input type="name" name='name' value={state.name} className="form-control" placeholder="Name Here" onChange={handleChange} />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label className="form-label">Date</label>
                            <input type="date" name='date' value={state.date ? dayjs(state.date) : ""} className="form-control" onChange={handleDate} />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label className="form-label">Email</label>
                            <input type="email" name='email' value={state.email} className="form-control" placeholder="name@example.com" onChange={handleChange} />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label className="form-label">Password</label>
                            <input type="password" name='password' value={state.password} className="form-control" onChange={handleChange} />
                        </div>
                        <div className="d-grid gap-2 col-6 mx-auto">
                            <button className="btn btn-primary" type="button" onClick={handleSubmit}>UpdateTodo</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
