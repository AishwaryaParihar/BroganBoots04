import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Product from "../component/content/Product";
import Sidebar from "../component/Sidebar";
import ContactList from "../component/content/ContactList";
import AboutUpdate from "../component/content/AboutUpdate";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Sidebar />,
                children: [
                    {
                        path: "product",
                        element: <Product />
                    },
                    {
                        path: "contact",
                        element: < ContactList/>  
                    },
                    {
                        path: "aboutUpdate",
                        element: < AboutUpdate/>  
                    }
                ]
            }
        ]
    }
]);

export default router;
