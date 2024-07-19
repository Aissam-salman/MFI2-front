import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import App from "@/App.tsx";
import SignupPage from "@/page/signup.page.tsx";
import LoginPage from "@/page/login.page.tsx";
import {Toaster} from "@/components/ui/toaster.tsx";

const route = createBrowserRouter(
    [
        {
            path: "/",
            element: <App/>
        },
        {
            path: "/register",
            element: <SignupPage/>
        },
        {
            path: "/login",
            element: <LoginPage/>
        }
    ]
)

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={route}/>
        <Toaster/>
    </React.StrictMode>,
)
