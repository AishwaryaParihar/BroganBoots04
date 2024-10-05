import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Product from "../component/content/Product";
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
                        path: "product",  // "/product" would result in a double slash
                        element: <Product />
                    }
                ]
            }
        ]
    }
]);

export default router;
