import React, {useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";

const HomePage = () => {
    const navigate = useNavigate()
    useEffect(()=> {
        if(localStorage.getItem('token')){
            return navigate('/rooms')
        } else {
            return navigate('/login')
        }
    })
    return (
        <>
            <Link to="/login"> Login </Link>
        </>
    )
}

export default HomePage