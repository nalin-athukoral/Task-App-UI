import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { Navigate, useLocation } from "react-router-dom"


// implementation of authorized routes currently in deveopemnt
const ProtectedRoute = ({ children }) => {
    const user = useSelector((state) => state.user.user);
    let location = useLocation();

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />
    }
    return children

};

export default ProtectedRoute;