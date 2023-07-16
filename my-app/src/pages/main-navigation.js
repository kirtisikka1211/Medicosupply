import { useState, useContext } from "react";
import { FiMenu } from "react-icons/fi";
import Link from "next/link";
import AuthenticationContext from "../context/AuthenticationContext";
function MainNavigation() {
  const [open, setOpen] = useState(false);
  const { user, logout } = useContext(AuthenticationContext);
  const handleLogout = async (e) => {
    e.preventDefault();
    await logout();
  };

  return (
    <header className="border-b border-gray-200 bg-white py-2 block sm:flex md:flex  ">
      <div className="flex items-center justify-between xl:max-w-8xl  max-w-full px-[8%] flex-wrap w-full bg-white fixed">
        <img
          src="/your-place-to-readremovebgpreview-1@2x.png"
          width={150}
          height={65}
        />

        <FiMenu
          className="lg:hidden block h-6 w-6 md:justify-end cursor-pointer"
          onClick={() => setOpen(!open)}
        />

        <nav
          className={`w-full lg:flex lg:items-center lg:w-auto bg-white ${
            open ? "block" : "hidden"
          }`}
        >
          <ul className=" text-base text-gray-500 lg:flex lg:justify-between list-none">
            <li>
              <Link
                className="lg:px-5 py-2 block hover:text-darksalmon font-semibold hover:scale-110 ease-in duration-300"
                href="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="lg:px-5 py-2 block hover:text-darksalmon font-semibold hover:scale-110 ease-in duration-300"
                href="/About"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="lg:px-5 py-2 block hover:text-darksalmon font-semibold hover:scale-110 ease-in duration-300"
                href="/products"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                className="lg:px-5 py-2 block hover:text-darksalmon font-semibold hover:scale-110 ease-in duration-300 mr-4"
                href="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
export default MainNavigation;
