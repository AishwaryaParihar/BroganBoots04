import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Product from "../component/content/Product";
import Sidebar from "../component/Sidebar";
import ContactList from "../component/content/ContactList";
<<<<<<< HEAD
import Login from "../component/Login";
=======
import AboutUpdate from "../component/content/AboutUpdate";
>>>>>>> b7bbf9f9d14f28b850eba70f16f7cd0cfaa1062b

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
<<<<<<< HEAD
                        element: <ContactList />  // Ensure this component exists
=======
                        element: < ContactList/>  
                    },
                    {
                        path: "aboutUpdate",
                        element: < AboutUpdate/>  
>>>>>>> b7bbf9f9d14f28b850eba70f16f7cd0cfaa1062b
                    }
                ]
            }
        ]
    }
]);

export default router;
