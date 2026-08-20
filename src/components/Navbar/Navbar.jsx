import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );

  useEffect(() => {
    const updateLoginStatus = () => {
      setIsLoggedIn(
        localStorage.getItem("isLoggedIn") === "true"
      );
    };

    window.addEventListener(
      "loginStatusChanged",
      updateLoginStatus
    );

    window.addEventListener(
      "storage",
      updateLoginStatus
    );

    return () => {
      window.removeEventListener(
        "loginStatusChanged",
        updateLoginStatus
      );

      window.removeEventListener(
        "storage",
        updateLoginStatus
      );
    };
  }, []);

  return (
    <nav className="navbar">

      {/* LOGO */}
      <NavLink to="/" className="navbar-logo">
        ClosetCycle
      </NavLink>

      {/* MAIN NAVIGATION */}
      <div className="navbar-links">

        <NavLink to="/">
          Home
        </NavLink>

        <NavLink to="/explore">
          Explore
        </NavLink>

        <NavLink to="/sell">
          Sell
        </NavLink>

        <NavLink to="/donate">
          Donate
        </NavLink>

        <NavLink to="/about">
          About
        </NavLink>

      </div>

      {/* RIGHT SIDE */}
      <div className="navbar-account-links">

        {isLoggedIn ? (
          <>
            {/* PROFILE */}
            <NavLink
              to="/profile"
              className="navbar-icon-link"
              title="Profile"
              aria-label="Profile"
            >
              <svg
                className="navbar-icon"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="12"
                  cy="8"
                  r="4"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />

                <path
                  d="M4 21C4.8 16.8 7.5 14.5 12 14.5C16.5 14.5 19.2 16.8 20 21"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </NavLink>

            {/* CART */}
            <NavLink
              to="/cart"
              className="navbar-icon-link"
              title="Cart"
              aria-label="Cart"
            >
              <svg
                className="navbar-icon"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 4H5L7.2 15.5C7.4 16.4 8.2 17 9.1 17H18.5C19.4 17 20.2 16.4 20.4 15.5L22 8H6"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                <circle
                  cx="9"
                  cy="20"
                  r="1.2"
                  fill="currentColor"
                />

                <circle
                  cx="18"
                  cy="20"
                  r="1.2"
                  fill="currentColor"
                />
              </svg>
            </NavLink>
          </>
        ) : (
          /* LOGIN */
          <NavLink
            to="/login"
            className="navbar-login"
          >
            Login
          </NavLink>
        )}

      </div>

    </nav>
  );
}

export default Navbar;