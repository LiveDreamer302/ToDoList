import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import LoginPage from "./Login/LoginPage";
import HomePage from "./Home/HomePage";

const router = createBrowserRouter([{
    path: "/",
    element: <HomePage/>
},
    {
        path: "/login",
        element: <LoginPage/>
    }
])

function App() {
    return(
        <RouterProvider router={router}/>
    );
}

export default App;
