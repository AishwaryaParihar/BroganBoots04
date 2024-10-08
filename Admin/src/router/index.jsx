import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Product from "../component/content/Product";
import Sidebar from "../component/Sidebar";
import ContactList from "../component/content/ContactList";
import Login from "../component/Login";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <Login />
            },
            {
                path: "dashboard",
                element: <Sidebar />,
                children: [
                    {
                        path: "product",
                        element: <Product />
                    },
                    {
                        path: "contact",
                        element: <ContactList />  // Ensure this component exists

                    },
                   
                ]
            }
        ]
    }
]);

export default router;
