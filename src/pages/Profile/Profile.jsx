import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css";

function Profile() {
  const navigate = useNavigate();

  const [profileImage, setProfileImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  const handleLogout = () => {
    // Clear login information if you are using localStorage
    localStorage.removeItem("user");
    localStorage.removeItem("isLoggedIn");

    // Go to login page
    navigate("/login");
  };

  return (
    <div className="profile-page">

      {/* =========================
          PROFILE HEADER
      ========================= */}

      <section className="profile-header">

        <div className="profile-photo-wrapper">

          {profileImage ? (
            <img
              src={profileImage}
              alt="Profile"
              className="profile-photo"
            />
          ) : (
            <div className="profile-avatar">
              S
            </div>
          )}

          {/* Hidden file input */}
          <input
            type="file"
            id="profile-image-upload"
            accept="image/*"
            onChange={handleImageUpload}
            hidden
          />

          {/* Pencil button */}
          <label
            htmlFor="profile-image-upload"
            className="profile-edit-photo"
            title="Change profile photo"
          >
            ✎
          </label>

        </div>

        <div className="profile-heading">

          <p className="profile-eyebrow">
            CLOSET CYCLE
          </p>

          <h1>My Profile</h1>

          <p>
            Manage your ClosetCycle profile and preferences.
          </p>

        </div>

      </section>


      {/* =========================
          PROFILE CONTENT
      ========================= */}

      <div className="profile-content">

        {/* PERSONAL INFORMATION */}

        <section className="profile-card personal-card">

          <div className="card-header">

            <h2>Personal Information</h2>

            <button className="edit-profile-button">
              Edit Profile
            </button>

          </div>

          <div className="profile-details">

            <div className="profile-detail-row">
              <span>Username</span>
              <strong>Saranshika</strong>
            </div>

            <div className="profile-detail-row">
              <span>Email</span>
              <strong>saranshika@example.com</strong>
            </div>

            <div className="profile-detail-row">
              <span>Member since</span>
              <strong>2026</strong>
            </div>

          </div>

        </section>


        {/* MY CLOSET */}

        <section className="profile-card closet-card">

          <div className="card-header">

            <h2>My Closet</h2>

            <button
              className="view-all-button"
              onClick={() => navigate("/explore")}
            >
              View all
            </button>

          </div>


          <div className="closet-stats">

            <div className="closet-stat">
              <span className="stat-icon">♡</span>
              <strong>0</strong>
              <span>Items</span>
            </div>

            <div className="closet-stat">
              <span className="stat-icon">♡</span>
              <strong>0</strong>
              <span>Favorites</span>
            </div>

            <div className="closet-stat">
              <span className="stat-icon">✓</span>
              <strong>0</strong>
              <span>Sold</span>
            </div>

          </div>


          <div className="closet-empty">

            <div className="closet-empty-icon">
              ♧
            </div>

            <div>
              <h3>Your closet is waiting</h3>

              <p>
                Add your first pre-loved item and start your
                closet journey.
              </p>
            </div>

          </div>

        </section>

      </div>


      {/* =========================
          LOGOUT
      ========================= */}

      <div className="logout-container">

        <button
          className="logout-button"
          onClick={handleLogout}
        >
          Log out
        </button>

      </div>

    </div>
  );
}

export default Profile;