import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";

import "./index.css";
const Login = lazy(() => import("./components/Login/Login"));
const Landlord = lazy(() => import("./pages/Landlord/Landlord"));
const Signup = lazy(() => import("./components/Signup/Signup"));
const SignupTest = lazy(() => import("./components/Signup/signupTest"));
const Dashboard = lazy(() => import("./pages/Dashboard/Dashboard"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/landlord",
    element: <Landlord />,
  },
  {
    path: "/signup-test",
    element: <SignupTest />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Suspense fallback={<p>Loading....</p>}>
      <RouterProvider router={router} />
    </Suspense>
  </React.StrictMode>
);
