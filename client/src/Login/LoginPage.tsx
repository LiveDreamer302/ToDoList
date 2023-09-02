import React from "react";
import LoginComponent from "./LoginComponent";

const LoginPage = () => {
    // Функция для обработки входа
    const handleLogin = (login: string, password: string) => {
        // Ваш код для обработки входа на сервере
        console.log(`Вход с email: ${login} и паролем: ${password}`);
    };

    // Функция для обработки регистрации
    const handleRegister = (email: string, login: string, password: string) => {
        // Ваш код для обработки регистрации на сервере
        console.log(`Регистрация с email: ${email}, логин ${login} и паролем: ${password}`);
    };

    return (
        <>
            <h1 className="text-center">ToDo</h1>
            <LoginComponent onLogin={handleLogin} onRegister={handleRegister}/>
        </>
    )
}
export default LoginPage