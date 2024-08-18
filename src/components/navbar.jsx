import { useEffect, useRef, useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";

const links = [
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
    const handleResize = () => {
      if (navbarRef.current) {
        setNavbarHeight(navbarRef.current.offsetHeight);
      }
    };

    // Set initial navbar height
    handleResize();

    // Update navbar height on window resize
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <nav
        ref={navbarRef}
        className="glass fixed top-0 left-0 w-full py-4 px-6 text-black flex justify-between items-center z-50 shadow-md"
      >
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-4xl font-bold text-primary-dark">
            <img src={Logo} width={200} alt="logo" />
          </Link>
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

      {/* Spacer div with dynamic margin based on navbar height */}
      <div style={{ marginTop: `${navbarHeight}px` }}></div>

      {/* Rest of the content */}
      <div className="content">{/* Your page content here */}</div>
    </div>
  );
};

export default Navbar;
