import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignUp.css";

import heroImage from "../../assets/login/login.png";

function SignUp() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    gmail: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Signup data:", formData);

    // Temporary signup behavior.
    // After signup, go to Login.
    navigate("/login");
  };

  return (
    <main className="signup-page">
      <section className="signup-container">

        {/* ================================
            LEFT SIDE
        ================================= */}

        <div className="signup-visual">

          {/* BRAND */}

          <div className="signup-brand">
            <div className="signup-brand-logo">
              ♻
            </div>

            <span>ClosetCycle</span>
          </div>

          {/* HERO IMAGE */}

          <div className="signup-hero">
            <img
              src={heroImage}
              alt="Clothes hanging on a clothing rack"
            />
          </div>

        </div>


        {/* ================================
            RIGHT SIDE
        ================================= */}

        <div className="signup-form-section">

          <div className="signup-form-wrapper">

            {/* TITLE */}

            <h1>Create Account</h1>

            <p className="signup-subtitle">
              Join ClosetCycle and make a positive impact.
            </p>


            {/* ================================
                SOCIAL SIGNUP
            ================================= */}

            <div className="social-buttons">

              <button
                type="button"
                className="social-button"
                onClick={() => console.log("Google signup")}
              >
                Sign up with Google
              </button>

              <button
                type="button"
                className="social-button"
                onClick={() => console.log("Apple signup")}
              >
                Sign up with Apple
              </button>

            </div>


            {/* ================================
                DIVIDER
            ================================= */}

            <div className="signup-divider">

              <span></span>

              <p>or</p>

              <span></span>

            </div>


            {/* ================================
                FORM
            ================================= */}

            <form onSubmit={handleSubmit}>

              {/* USERNAME */}

              <div className="form-field">

                <label htmlFor="username">
                  Username
                </label>

                <input
                  id="username"
                  name="username"
                  type="text"
                  placeholder="Enter your username....."
                  value={formData.username}
                  onChange={handleChange}
                  required
                />

              </div>


              {/* GMAIL */}

              <div className="form-field">

                <label htmlFor="gmail">
                  Gmail
                </label>

                <input
                  id="gmail"
                  name="gmail"
                  type="email"
                  placeholder="Enter your gmail....."
                  value={formData.gmail}
                  onChange={handleChange}
                  required
                />

              </div>


              {/* PASSWORD */}

              <div className="form-field">

                <label htmlFor="password">
                  Password
                </label>

                <div className="password-wrapper">

                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password....."
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />

                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() =>
                      setShowPassword((prev) => !prev)
                    }
                    aria-label={
                      showPassword
                        ? "Hide password"
                        : "Show password"
                    }
                  >
                    {showPassword ? "◉" : "◌"}
                  </button>

                </div>

              </div>


              {/* ================================
                  SIGN UP BUTTON
              ================================= */}

              <button
                type="submit"
                className="signup-button"
              >
                Sign Up
              </button>

            </form>


            {/* ================================
                LOGIN LINK
            ================================= */}

            <p className="login-text">

              Already have an account?{" "}

              <Link to="/login">
                Login
              </Link>

            </p>

          </div>

        </div>

      </section>
    </main>
  );
}

export default SignUp;