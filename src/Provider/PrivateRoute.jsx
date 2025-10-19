import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate } from 'react-router';
import Loading from '../components/Loading';

const PrivateRoute = ({children}) => {
    const {user,loading} = use(AuthContext)
    if(loading){
        return <Loading></Loading>
    }
    if(user){
        return children
    }
    return <Navigate to='/auth/login'></Navigate>
    // console.log(user);
   
};

export default PrivateRoute;