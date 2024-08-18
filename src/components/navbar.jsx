import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";

const links = [
  { name: "Fuel", path: "/fuel" },
  { name: "Forex", path: "/forex" },
  { name: "Rides", path: "/rides" },
  { name: "Contact-Us", path: "/contact" },
];

const Navbar = () => {
  const navRef = useRef(null);
  const [navHeight, setNavHeight] = useState(0);

  useEffect(() => {
    if (navRef.current) {
      // Get the height of the navbar after it renders
      const height = navRef.current.offsetHeight;
      setNavHeight(height);
    }
  }, []);

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
      <div style={{ marginTop: `${navHeight}px` }}></div>
    </div>
  );
};

export default Navbar;
