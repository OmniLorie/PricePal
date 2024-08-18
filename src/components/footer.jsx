import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaGooglePlusG,
} from "react-icons/fa";
import { TbBrandX } from "react-icons/tb"; // For "X" (formerly Twitter)

const links = [
  { name: "Home", path: "/" },
  { name: "Fuel", path: "/fuel" },
  { name: "Forex", path: "/forex" },
  { name: "Rides", path: "/rides" },
  { name: "Contact-Us", path: "/contact" },
];

const icons = [
  { name: FaFacebookF, path: "https://www.facebook.com" },
  { name: TbBrandX, path: "https://twitter.com" },
  { name: FaInstagram, path: "https://www.instagram.com" },
  { name: FaGooglePlusG, path: "https://plus.google.com" },
  { name: FaYoutube, path: "https://www.youtube.com" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className="bg-gray-900 py-10 flex flex-col gap-10 text-white">
        {/* Social Media Icons */}
        <div className="container mx-auto flex gap-4 justify-center items-center">
          {icons.map((icon, index) => {
            const IconLink = icon.name;
            return (
              <a
                key={index}
                href={icon.path}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white text-gray-800 rounded-full"
              >
                <IconLink className="w-6 h-6" />
              </a>
            );
          })}
        </div>

        {/* Navigation Links */}
        <div className="container mx-auto flex gap-8 justify-center items-center">
          {links.map((link, index) => {
            return (
              <Link key={index} to={link.path} className="hover:text-gray-400">
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-black text-white py-4">
        <div className="container mx-auto text-center">
          <p>© {currentYear} PricePal. All rights reserved.</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
