import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";
// import Shimmer from "./components/Shimmer";
// import RestaurantMenu from "./components/RestaurantMenu";
 /**
     * Header
     *   - Logo
     *   - NavItems(Right Side)
     *   - Cart
     * Body
     *   - Search Bar
     *   - RestaurantList
     *      - RestaurantCard
     *          - Image
     *          - Name
     *          - Rating
     *          - Cusines
     * Footer
     *   - links
    *   - Copyrights
     * 
     */

const Instamart = lazy(() => import("./components/Instamart"))

const AppLayout =  () => {
  return (
    <>
    <Header/>
    <Outlet />
    <Footer />
    </>
  )
  }

const appBrowserRouter = createBrowserRouter(
  [
    {
      path: "/",
      element: <AppLayout/>,
      errorElement: <Error/>,
      children: [
        {
          path: "/",
          element: <Body user = {{name: "pratik", id:1}}/>
        },
        {
          path: "/about",
          element: <About/>,
          children: [
            {
              path:"profile",
              element: <Profile/>
            }
          ]
        },
        {
          path: "/contact",
          element: <Contact/>
        },
        {
          path: "/restaurant/:id",
          element: <RestaurantMenu/>
        },
        {
          path: "/instamart",
          element: <Suspense fallback = {null} >
            <Instamart/>
          </Suspense>
        }
      ]
    }
  ]
);


const root = ReactDOM.createRoot(document.getElementById("root"));

//passing a react element inside the root

//async defer
root.render(<RouterProvider router={appBrowserRouter}/>);