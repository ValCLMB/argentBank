import React from "react";
import ReactDOM from "react-dom/client";
import App from "./containers/App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Provider } from "react-redux";
import { store } from "./store";
import { User } from "./containers/User/User";
import { Signin } from "./containers/Signin/Signin";
import { Home } from "./containers/Home/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/user",
                element: <User />,
            },
            {
                path: "/signin",
                element: <Signin />,
            },
            {
                path: "",
                element: <Home />,
            },
        ],
    },
]);
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>
);
