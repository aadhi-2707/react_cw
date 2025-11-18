import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import Crud from "./components/crud";

const router = createBrowserRouter([
    { path: '', element: <App/> },
    { path: 'crud', element: <Crud/> },
]);

export default router;