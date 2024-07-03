import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.jsx";
import "./index.scss";
import Form from "./pages/Form.jsx";
import Login from "./pages/Login.jsx";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import PageNotFound from "./components/PageNotFound.jsx";
import Dashboard from "./pages/Dashboard.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Dashboard />,
            },
            {
                path: "add-books",
                element: <Form />,
            },
            // {
            //     path: "list-books",
            //     element: <ListBooks />,
            // },
        ],
    },
    {
        path: "login",
        element: <Login />,
    },
    {
        path: "*",
        element: <PageNotFound />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
