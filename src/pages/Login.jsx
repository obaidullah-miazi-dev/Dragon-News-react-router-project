import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {
    const { LogIn } = use(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const [error,setError] = useState('')
    const handleLogIn = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        LogIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(`${location ? location.state : '/'}`)
            })
            .catch((error) => {
                const errorCode = error.code
                setError(errorCode)
            });
    }
    return (
        <div className='w-11/12 mx-auto flex justify-center items-center mt-48'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h2 className='text-xl font-bold px-5 text-center border-b-2 border-gray-200 pb-5'>Login Your Account</h2>
                <form onSubmit={handleLogIn} className="card-body">
                    <fieldset className="fieldset">
                        <label className="label">Email</label>
                        <input type="email" className="input" placeholder="Email" name='email' required/>
                        <label className="label">Password</label>
                        <input type="password" className="input" placeholder="Password" name='password' required/>
                        <div><a className="link link-hover">Forgot password?</a></div>
                        {error&& <p className='text-red-500'>{error}</p>}
                        <button className="btn btn-neutral mt-4">Login</button>
                        <p className='font-semibold text-accent mt-2'>Dont’t Have An Account ? <Link to='/auth/register' className='text-secondary'>Register</Link></p>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Login;