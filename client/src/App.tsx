import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import LoginPage from "./Login/LoginPage";
import HomePage from "./Home/HomePage";
import RoomsPage from "./RoomsPage/RoomsPage";



function App() {

    const [userData, setUserData] = useState({
        username: "Пользователь",
        userRooms: ['room 1', 'room 2', 'room 3'],
    });


    const router = createBrowserRouter([{
        path: "/",
        element: <HomePage/>
    },
        {
            path: "/login",
            element: <LoginPage userData={userData} setUserData={setUserData}/>
        },
        {
            path: "/rooms",
            element: <RoomsPage userData={userData}/>
        }
    ])

    return (
        <RouterProvider router={router}/>
    );
}

export default App;
