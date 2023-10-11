import React, {useEffect} from "react";
import LoginComponent from "./LoginComponent";
import {useNavigate} from 'react-router-dom'
interface typeUserData {
    username : string,
    userRooms : string[]
}
const LoginPage = () => {
    const navigate = useNavigate()
    // Функция для обработки входа
    useEffect(()=> {
        if(localStorage.getItem('token')){
            return navigate('/rooms')
        }
    })

    return (
        <>
            <h1 className="text-center">ToDo</h1>
            <LoginComponent/>
        </>
    )
}
export default LoginPage