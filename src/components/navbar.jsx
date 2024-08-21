import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

const links = [
  { name: "Fuel", path: "/fuel" },
  { name: "Forex", path: "/forex" },
  { name: "Rides", path: "/rides" },
  { name: "Contact-Us", path: "/contact" },
];

const Navbar = () => {
  const navRef = useRef(null);
  const [navHeight, setNavHeight] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    if (navRef.current) {
      const height = navRef.current.offsetHeight;
      setNavHeight(height);
    }
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <nav
        ref={navRef}
        className="glass fixed top-0 left-0 w-full py-4 px-6 text-black flex justify-between items-center z-50 shadow-md"
      >
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-4xl font-bold text-primary-dark">
            <img src={Logo} width={200} alt="logo" />
          </Link>
          <div className="hidden md:flex gap-6 items-center align-middle">
            {links.map((link, index) => (
              <Link key={index} to={link.path}>
                {link.name}
              </Link>
            ))}
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={toggleSidebar}>
              <FaBars className="text-2xl" />
            </button>
          </div>
        </div>
      </nav>

      {/* Spacer div with dynamic margin based on navbar height */}
      <div style={{ marginTop: `${navHeight}px` }}></div>

      {/* Sidebar for mobile screens */}
      <div
        className={`fixed top-0 right-0 h-full bg-white w-3/4 max-w-xs z-50 transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-2xl font-bold">Menu</h2>
          <button onClick={toggleSidebar}>
            <FaTimes className="text-2xl" />
          </button>
        </div>
        <div className="flex flex-col p-4">
          {links.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className="py-2 text-lg border-b"
              onClick={toggleSidebar}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Overlay to close the sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default Navbar;
