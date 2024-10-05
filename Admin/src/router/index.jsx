import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Product from "../component/content/Product";
import Contact from "../component/content/Contact"; // Assuming you have this component
import Sidebar from "../component/Sidebar";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <Sidebar />,
                children: [
                    {
                        path: "product",
                        element: <Product />
                    },
                    {
                        path: "contact",
                        element: <Contact />  // Make sure this route exists
                    }
                ]
            }
        ]
    }
]);

export default router;
