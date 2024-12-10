import React, { useState } from 'react'
import '../css/Login.css'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../Redux/slices/LogInSlices';
import { useNavigate } from 'react-router';
export default function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const error = useSelector((state) => state.login.error)
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await dispatch(login({ username, password })).unwrap();
            navigate('/home');
        } catch (err) {
            console.error(err)
        }

    }
    return (
        <div className='full-screen-bg'>
            <div className='container col-4'>
                <div className='text-center '><h1>Login</h1></div>
                <div>
                    <form onSubmit={handleLogin}>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">
                                Name
                            </label>
                            <input
                                type="name"
                                className="form-control"
                                value={username}
                                onChange={(e) => setUserName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">
                                Password
                            </label>
                            <input
                                type="password"
                                className="form-control"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className='mb-3'>
                            <button type="submit" className="btn btn-success">
                                Login
                            </button>
                        </div>
                    </form>
                    {error && <div style={{ color: 'red' }}>{error}</div>}
                </div>
            </div>
        </div>
    )
}
