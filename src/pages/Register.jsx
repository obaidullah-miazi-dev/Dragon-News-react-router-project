import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {
    const { createUser, setUser } = use(AuthContext)

    const handleRegister = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value
        console.log('clicked', email, name, password);
        createUser(email, password)
            .then(result => {
                const user = result.user
                console.log(user);
                setUser(user)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorCode,errorMessage)
            });
    }
    return (
        <div className='w-11/12 mx-auto flex justify-center items-center mt-48'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h2 className='text-xl font-bold px-5 text-center border-b-2 border-gray-200 pb-5'>Register Your Account</h2>
                <form onSubmit={handleRegister} className="card-body">
                    <fieldset className="fieldset">

                        {/* name  */}
                        <label className="label">Name</label>
                        <input type="text" className="input" placeholder="Your Name" name='name' required />

                        {/* Photo Url  */}
                        <label className="label">Photo Url</label>
                        <input type="text" className="input" placeholder="Your Photo Link" name='photo' required />
                        {/* email  */}
                        <label className="label">Email</label>
                        <input type="email" className="input" placeholder="Email" name='email' required />

                        {/* password  */}
                        <label className="label">Password</label>
                        <input type="password" className="input" placeholder="Password" name='password' required />

                        <button className="btn btn-neutral mt-4" type='submit'>Register</button>

                        <p className='font-semibold text-accent mt-2'>Already Have An Account ? <Link to='/auth/login' className='text-secondary'>Login</Link></p>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Register;