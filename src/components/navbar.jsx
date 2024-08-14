import { useEffect, useRef, useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";

const links = [
  { name: "Admin", path: "/admin" },
  { name: "Fuel", path: "/fuel" },
  { name: "Forex", path: "/forex" },
  { name: "Rides", path: "/rides" },
  { name: "About-Us", path: "/about" },
  { name: "Contact-Us", path: "/contact" },
];

const Navbar = () => {
  const navbarRef = useRef(null);
  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    if (navbarRef.current) {
      setNavbarHeight(navbarRef.current.offsetHeight);
    }
  }, []);

  return (
    <div>
      <nav
        ref={navbarRef}
        className="glass fixed top-0 left-0 w-full py-4 px-6 text-black flex justify-between items-center z-50 shadow-md"
      >
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-4xl font-bold text-primary-dark">
            PricePal
          </Link>
          <div className="flex items-center px-2 py-2 border-2 border-black rounded-full shadow-sm">
            <input
              type="text"
              placeholder="Search"
              className="px-4 py-2 text-black bg-transparent outline-none "
            />
            <button className="px-4 py-2 text-gray-700">
              <MagnifyingGlassIcon className="h-5 w-5" />
            </button>
          </div>
          <div className="flex gap-6 items-center align-middle">
            {links.map((link, index) => {
              return (
                <Link key={index} to={link.path}>
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>

      <div style={{ marginTop: navbarHeight }}></div>
    </div>
  );
};

export default Navbar;
