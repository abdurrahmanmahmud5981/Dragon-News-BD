import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";

const router = createBrowserRouter([
    {
        path: "/",
       element: <HomeLayout/>
    },
    {
        path: "/news",
       element: <h1>news layout</h1>
    },
    {
        path : "/auth",
        element: <h1>auth layout</h1>
    },
    {
        path: "*",
        element: <h1>404 Not Found</h1>
    }
]);

export default router;