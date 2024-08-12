import { Outlet } from "vite-react-router-dom";
import Navbar from "../components/navbar";

const RootLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default RootLayout;
