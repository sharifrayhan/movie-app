import { createBrowserRouter } from "react-router-dom"
import RootPage from "./RootPage/RootPage"
import ErrorPage from "../ErrorPage/ErrorPage"
import HomePage from "../HomePage/HomePage"

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
    }
])