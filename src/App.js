import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Kids from "./components/Kids";
import Mens from "./components/Mens";
import Womens from "./components/Womens";
import Error from "./components/Error";
import ProductDetails from "./components/ProductDetails";
//import About from "./components/About";
// import Grocery from "./components/Grocery"; //? this is a normal import

const Grocery = lazy(() => import("./components/Grocery")); //this way of importing is called dynamic import

const About = lazy(() => import("./components/About"));

const App = () => {
  return (
    <div>
      <Navbar />
      {/* <ProductCard /> */}
      <Outlet />
      {/*here navbar will be there always but the outlet will render the clicked components from the appRouter*/}
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <ProductCard />,
      },
      {
        path: "/kids",
        element: <Kids />,
      },
      {
        path: "/mens",
        element: <Mens />,
      },
      {
        path: "/womens",
        element: <Womens />,
      },
      {
        path: "/product/:productId",
        element: <ProductDetails />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading ...</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading ...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

/**
 * Optimization of our application -
 *
 * since large scale application have 1000s of components in it, the bundled file in the dist folder might become too large in size. These 1000s of components may be divided in different modules based on specific criteria(like electronics, sports, fashion, kids, groceries, etc.(in context with an ecommerce website))
 *
 * but when we do 'npm run build' a single index.js file will be created in 'dist' folder to all these components will be bundled in a single bundle, and it will become a very large file and it will reduce the performance(will take more time to load/render).
 *
 * so, to improve the performance, we will create multiple different bundles.
 *
 * suppose, here, we are creating a copy of ajio website and also want to integrate a grocery section, then we will make a different bundle for clothes section and a different bundle for the grocery.
 *
 * to achieve this, we implement the concept of lazy loading(lazy loading is also known as code splitting, dynamic import, etc.)
 *
 * to implement the concept of lazy loading, we import that part(of which we want to make a seperate bundle) in a bit different way instead of doing a normal import.
 *
 * as we are doing lazy loading, the components which we have bundled seperately takes some time to load on the screen and for the span of that perticular time, react has nothing to display on the UI.therefore, it might throw error(not necessarily).
 *
 * to handle this error, we use 'Suspense'.
 *
 * we keep that component(which we want to bundle seperately) within "<Suspense><Suspense/>" tag(in the 'app.js').
 *
 * inside this suspense tag, we pass an object/property called 'fallback', and withing it, we mention the text to be shown on the display, instead of showing the error.
 *
 */
