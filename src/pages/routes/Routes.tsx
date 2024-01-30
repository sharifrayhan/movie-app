import { createBrowserRouter } from "react-router-dom"
import RootPage from "./RootPage/RootPage"
import ErrorPage from "../ErrorPage/ErrorPage"
import HomePage from "../HomePage/HomePage"
import Dashboard from "../Dashboard/Dashboard"
import DashboardHome from "../Dashboard/DashboardHome/DashboardHome"
import Categories from "../Dashboard/Categories/Categories"

export const router = createBrowserRouter([
    {
        element: <RootPage/>,
        path: "/",
        errorElement: <ErrorPage/>,
        children: [
            {
                element: <HomePage/>,
                path:"/",
            }
        ]
    },
    {
        element: <Dashboard/>,
        path: "/Dashboard",
        errorElement: <ErrorPage/>,
        children: [
            {
                element: <DashboardHome/>,
                path:"/Dashboard/Home",
            },
            {
                element: <Categories/>,
                path:"/Dashboard/Categories",
            }
        ]
    }

])