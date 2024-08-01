import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LandingPage from "./LandingPage";

const router = createBrowserRouter([{ path: "/", element: <LandingPage /> }]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
