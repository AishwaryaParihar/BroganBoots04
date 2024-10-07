import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Component/Content/Home";
import About from "../Component/Content/About";
import Shop from "../Component/Content/Shop";
import ContactUs from "../Component/Content/ContactUs";
import { Privacy } from "../Component/Content/Privacy";
import { Refund } from "../Component/Content/Refund";
import { ShipmentPolicy } from "../Component/Content/ShipmentPolicy";
import TermsAndConditions from "../Component/Content/TermsAndConditions";
import { CancelProces } from "../Component/Content/CancelProces";

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
            {
                path:"privacy",
                element: <Privacy/>
            },
            {
                path:"refund",
                element: <Refund/>
            },
            {
                path:"shipment-policy",
                element: <ShipmentPolicy/>
            },
            {
                path:"terms-conditions",
                element: <TermsAndConditions/>
            },
            {
                path:"cancel-policy",
                element: <CancelProces/>
            },
        ]
    }
])