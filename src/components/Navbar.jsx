import { Home, LogIn, Menu, UserPlus, X } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const baseClass =
    "pb-1 border-b-2 transition-all duration-200 ease-in-out flex items-center gap-1";

  const navItems = [
    { label: "Home", path: "/", icon: <Home size={18} /> },
    { label: "Login", path: "/login", icon: <LogIn size={18} /> },
    { label: "Register", path: "/register", icon: <UserPlus size={18} /> }
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow">
      <nav className="mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl font-bold text-indigo-600">MyBlog</h1>

        {/* Hamburger button (mobile) */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-6">
          {navItems.map(({ label, path, icon }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `${baseClass} ${
                  isActive
                    ? "text-indigo-600 border-indigo-600 font-semibold"
                    : "text-gray-700 border-transparent hover:text-indigo-600"
                }`
              }
            >
              {icon}
              {label}
            </NavLink>
          ))}
        </div>

        {/* Mobile menu */}
        {open && (
          <div
            className={`md:hidden transform transition-all duration-300 ease-in-out ${
              open
                ? "max-h-40 opacity-100 translate-y-0 mt-4"
                : "max-h-0 opacity-0 -translate-y-2 overflow-hidden"
            }`}
          >
            <div className="mt-4 flex flex-col space-y-2 md:hidden">
              {navItems.map(({ label, path, icon }) => (
                <NavLink
                  key={path}
                  to={path}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `${baseClass} ${
                      isActive
                        ? "text-indigo-600 border-indigo-600 font-semibold"
                        : "text-gray-700 border-transparent hover:text-indigo-600"
                    }`
                  }
                >
                  {icon}
                  {label}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
