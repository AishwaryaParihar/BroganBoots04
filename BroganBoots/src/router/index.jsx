import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Component/Content/Home";
import About from "../Component/Content/About";
import Shop from "../Component/Content/Shop";
import ContactUs from "../Component/Content/ContactUs";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path:"",
                element: <Home/>
            },
            {
                path:"about",
                element: <About/>
            },
            {
                path:"shop",
                element: <Shop/>
            },
            {
                path:"contactus",
                element: <ContactUs/>
            },
        ]
    }
])