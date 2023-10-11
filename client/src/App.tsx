import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import LoginPage from "./Login/LoginPage";
import HomePage from "./Home/HomePage";
import RoomsPage from "./RoomsPage/RoomsPage";
import RoomPage from "./Room/Room"

function App() {


    const router = createBrowserRouter([
        {
            path: "/",
            element: <HomePage />
        },
        {
            path: "/rooms",
            element: <RoomsPage />
        },
        {
            path: "/login",
            element: <LoginPage/>
        },
        {
            path: "/room/:roomId",
            element: <RoomPage/>
        },
    ])

    return (
        <RouterProvider router={router}/>
    );
}

export default App;
