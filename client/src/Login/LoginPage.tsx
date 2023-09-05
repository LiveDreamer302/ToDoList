import React from "react";
import LoginComponent from "./LoginComponent";
import {useNavigate} from 'react-router-dom'
interface typeUserData {
    username : string,
    userRooms : string[]
}
const LoginPage = ({userData, setUserData}:{userData: typeUserData , setUserData: (data: typeUserData) => void}) => {
    const navigate = useNavigate()
    // Функция для обработки входа
    const handleLogin = (login: string, password: string) => {
        // Ваш код для обработки входа на сервере
        // window.location.href = '/rooms'
        console.log(`Вход с Логином: ${login} и паролем: ${password}`);
        setUserData({
            ...userData,
            username: login,
            userRooms: [],
        })
        navigate('/rooms')

    };

    // Функция для обработки регистрации
    const handleRegister = (email: string, login: string, password: string) => {
        // Ваш код для обработки регистрации на сервере
        console.log(`Регистрация с email: ${email}, логин ${login} и паролем: ${password}`)
    };

    return (
        <>
            <h1 className="text-center">ToDo</h1>
            <LoginComponent onLogin={handleLogin} onRegister={handleRegister}/>
        </>
    )
}
export default LoginPage