
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

import heroImage from "../../assets/login/login.png";

function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username && password) {
      // Save login status
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("username", username);

      // Go back to Home
      navigate("/");
    }
  };

  return (
    <main className="login-page">
      <section className="login-container">

        {/* LEFT SIDE */}
        <div className="login-visual">

          <div className="login-brand">
            <div className="brand-circle">
              <span>CC</span>
            </div>

            <h1>ClosetCycle</h1>
          </div>

          <div className="login-image-wrapper">
            <img
              src={heroImage}
              alt="ClosetCycle pre-loved clothing"
              className="login-hero-image"
            />
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="login-form-section">

          <div className="login-form-wrapper">

            <h2>Welcome Back!</h2>

            <p className="login-subtitle">
              Login to your account to start this journey.
            </p>

            <form onSubmit={handleSubmit}>

              {/* USERNAME */}
              <div className="form-group">
                <label htmlFor="username">
                  Username
                </label>

                <input
                  id="username"
                  type="text"
                  placeholder="Enter your username......"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>

              {/* PASSWORD */}
              <div className="form-group">

                <label htmlFor="password">
                  Password
                </label>

                <div className="password-wrapper">

                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password......"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />

                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={
                      showPassword
                        ? "Hide password"
                        : "Show password"
                    }
                  >
                    {showPassword ? "◉" : "◌"}
                  </button>

                </div>

                <div className="forgot-password">
                  <Link to="/forgot-password">
                    Forgot Password?
                  </Link>
                </div>

              </div>

              {/* REMEMBER ME */}
              <label className="remember-me">

                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) =>
                    setRememberMe(e.target.checked)
                  }
                />

                <span className="custom-checkbox">
                  {rememberMe ? "✓" : ""}
                </span>

                <span>Remember me</span>

              </label>

              {/* LOGIN BUTTON */}
              <button
                type="submit"
                className="login-button"
              >
                Login
              </button>

            </form>

            {/* SIGN UP */}
            <p className="signup-text">
              Don't have an account?{" "}
              <Link to="/signup">
                Sign up
              </Link>
            </p>

          </div>

        </div>

      </section>
    </main>
  );
}

export default Login;