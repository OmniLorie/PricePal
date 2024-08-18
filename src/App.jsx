import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./layouts/rootlayout";
import LandingPage from "./LandingPage";
import NotFound from "./NotFound";
import Fuel from "./Fuel";
import Forex from "./Forex";
import Rides from "./Rides";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: "/fuel", element: <Fuel /> },
      { path: "/forex", element: <Forex /> },
      { path: "/rides", element: <Rides /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
