import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import Products from "../pages/Products";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../layout/Dashboard";
import PrivateRoute from "./PrivateRoute";
import Overview from "../pages/Dashboard/Overview";
import SellerRoute from "./PrivateRoute"
import MyProducts from "../pages/Dashboard/Seller/MyProducts";
import AddProducts from "../pages/Dashboard/Seller/AddProducts";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: "/products",
          element: <Products></Products>
        },
        {
          path: "/about",
          element: <About></About>
        },
        {
          path: "/contact-us",
          element: <Contact></Contact>
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/register",
          element: <Register></Register>
        }
      ]
    },
    {
      path: "/dashboard",
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute> ,
      children: [
        {
          path: "/dashboard/overview",
          element: <Overview></Overview>
        },
        // seller ROute
        {
          path: "/dashboard/my-products",
          element: <SellerRoute><MyProducts></MyProducts></SellerRoute>
        },
        {
          path: "/dashboard/add-products",
          element: <SellerRoute><AddProducts></AddProducts></SellerRoute>
        }
      ]
    }
  ]);
