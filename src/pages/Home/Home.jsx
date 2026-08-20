import { Link } from "react-router-dom";
import "./Home.css";

import heroImage from "../../assets/home/hero.png";

import whiteDress from "../../assets/clothes/white-dress.png";
import camiTop from "../../assets/clothes/cami-top.png";
import denimSkirt from "../../assets/clothes/denim-skirt.png";
import pumaShoes from "../../assets/clothes/puma-shoes.png";
import leatherJacket from "../../assets/clothes/leather-jacket.png";
import blackPeacoat from "../../assets/clothes/black-peacoat.png";

function Home() {
  return (
    <main className="home-page">

      {/* =========================
          HERO
      ========================== */}
      <section className="home-hero">

        <div className="hero-content">

          <p className="home-label">CLOSET CYCLE</p>

          <h1>
            Your closet
            <br />
            has more stories
            <br />
            to tell.
          </h1>

          <p className="hero-description">
            Discover pre-loved fashion, sell what you no longer wear,
            and donate clothes that can make someone else's day.
          </p>

          <div className="hero-buttons">
            <Link to="/explore" className="primary-button">
              Shop Pre-Loved
            </Link>

            <Link to="/sell" className="secondary-button">
              Sell Your Clothes
            </Link>
          </div>

        </div>

        <div className="hero-image-wrapper">
          <img
            src={heroImage}
            alt="Clothes hanging on a clothing rack"
            className="hero-image"
          />

          <div className="hero-badge">
            <span>♻</span>
            <p>
              Sustainable
              <br />
              Fashion for a
              <br />
              Better Planet
            </p>
          </div>
        </div>

      </section>


      {/* =========================
          BENEFITS
      ========================== */}
      <section className="benefits-section">

        <div className="benefit-card">
          <div className="benefit-icon">↻</div>

          <div>
            <h3>Reduce Waste</h3>
            <p>
              Give clothes a second life instead of sending them to landfill.
            </p>
          </div>
        </div>

        <div className="benefit-card">
          <div className="benefit-icon">♢</div>

          <div>
            <h3>Swap & Share</h3>
            <p>
              Find beautiful pieces and pass along clothes you no longer need.
            </p>
          </div>
        </div>

        <div className="benefit-card">
          <div className="benefit-icon">♡</div>

          <div>
            <h3>Grow Community</h3>
            <p>
              Make sustainable fashion choices together with our community.
            </p>
          </div>
        </div>

      </section>


      {/* =========================
          CATEGORY SECTION
      ========================== */}
      <section className="home-categories">

        <div className="section-heading">

          <p className="home-label">EXPLORE</p>

          <h2>Find something you'll love</h2>

          <p>
            Browse pre-loved pieces from our community.
          </p>

        </div>


        <div className="category-grid">

          {/* Dresses */}
          <Link
            to="/explore"
            className="home-category-card"
          >
            <div className="category-image">
              <img
                src={whiteDress}
                alt="Dresses"
              />
            </div>

            <div className="category-content">
              <h3>Dresses</h3>
              <p>Explore dresses</p>
            </div>
          </Link>


          {/* Bags */}
          <Link
            to="/explore"
            className="home-category-card"
          >
            <div className="category-image">
              <img
                src={camiTop}
                alt="Bags"
              />
            </div>

            <div className="category-content">
              <h3>Tops</h3>
              <p>Explore Tops</p>
            </div>
          </Link>


          {/* Bottoms */}
          <Link
            to="/explore"
            className="home-category-card"
          >
            <div className="category-image">
              <img
                src={denimSkirt}
                alt="Bottoms"
              />
            </div>

            <div className="category-content">
              <h3>Bottoms</h3>
              <p>Explore bottoms</p>
            </div>
          </Link>


          {/* Shoes */}
          <Link
            to="/explore"
            className="home-category-card"
          >
            <div className="category-image">
              <img
                src={pumaShoes}
                alt="Shoes"
              />
            </div>

            <div className="category-content">
              <h3>Shoes</h3>
              <p>Explore shoes</p>
            </div>
          </Link>

        </div>

      </section>


      {/* =========================
          HOW IT WORKS
      ========================== */}
      <section className="how-section">

        <div className="how-heading">

          <p className="home-label light-label">
            HOW IT WORKS
          </p>

          <h2>
            Give your closet
            <br />
            a second life.
          </h2>

          <p>
            ClosetCycle makes sustainable fashion simple.
            Shop, sell, swap, and donate all in one place.
          </p>

        </div>


        <div className="how-steps">

          <div className="how-step">

            <div className="step-number">
              01
            </div>

            <div>
              <h3>Discover</h3>

              <p>
                Explore unique pre-loved pieces from people
                in your community.
              </p>
            </div>

          </div>


          <div className="how-step">

            <div className="step-number">
              02
            </div>

            <div>
              <h3>Choose</h3>

              <p>
                Find something you love and give it a new
                home instead of buying new.
              </p>
            </div>

          </div>


          <div className="how-step">

            <div className="step-number">
              03
            </div>

            <div>
              <h3>Give Back</h3>

              <p>
                Sell, swap, or donate clothes that are ready
                for their next chapter.
              </p>
            </div>

          </div>

        </div>


        <Link
          to="/explore"
          className="how-button"
        >
          Explore the Collection
        </Link>

      </section>


      {/* =========================
          FEATURED ITEMS
      ========================== */}
      <section className="featured-section">

        <div className="section-heading featured-heading">

          <p className="home-label">
            FROM THE COMMUNITY
          </p>

          <h2>Pieces worth giving a second life</h2>

          <p>
            Discover some of our latest pre-loved favorites.
          </p>

        </div>


        <div className="featured-grid">

          <article className="featured-card">

            <div className="featured-image">
              <img
                src={blackPeacoat}
                alt="Black Pea Coat"
              />

              <button className="heart-button">
                ♡
              </button>
            </div>

            <div className="featured-info">
              <h3>Black Pea Coat</h3>
              <p>Rs. 5,430</p>
              <span>Like New</span>
            </div>

          </article>


          <article className="featured-card">

            <div className="featured-image">
              <img
                src={leatherJacket}
                alt="Leather Jacket"
              />

              <button className="heart-button">
                ♡
              </button>
            </div>

            <div className="featured-info">
              <h3>Leather Jacket</h3>
              <p>Rs. 3,800</p>
              <span>Like New</span>
            </div>

          </article>


          <article className="featured-card">

            <div className="featured-image">
              <img
                src={whiteDress}
                alt="White Dress"
              />

              <button className="heart-button">
                ♡
              </button>
            </div>

            <div className="featured-info">
              <h3>White Dress</h3>
              <p>Rs. 3,200</p>
              <span>Like New</span>
            </div>

          </article>

        </div>


        <Link
          to="/explore"
          className="view-all-button"
        >
          View All Items
        </Link>

      </section>


      {/* =========================
          CTA
      ========================== */}
      <section className="home-cta">

        <div>

          <p className="home-label">
            CLOSET CYCLE
          </p>

          <h2>
            Your clothes can
            <br />
            make a difference.
          </h2>

          <p>
            Start your sustainable fashion journey today.
          </p>

        </div>

        <div className="cta-buttons">

          <Link
            to="/explore"
            className="primary-button"
          >
            Explore Items
          </Link>

          <Link
            to="/sell"
            className="secondary-button"
          >
            Sell an Item
          </Link>

        </div>

      </section>


      {/* =========================
          FOOTER
      ========================== */}
      <footer className="home-footer">

        <div className="footer-brand">

          <h2>ClosetCycle</h2>

          <p>
            A better way to give your clothes
            another journey.
          </p>

        </div>


        <div className="footer-column">

          <h3>Shop</h3>

          <Link to="/explore">All Items</Link>
          <Link to="/explore">Tops</Link>
          <Link to="/explore">Bottoms</Link>
          <Link to="/explore">Dresses</Link>
          <Link to="/explore">Shoes</Link>

        </div>


        <div className="footer-column">

          <h3>Sell / Swap</h3>

          <Link to="/sell">List an Item</Link>
          <Link to="/sell">How it Works</Link>
          <Link to="/donate">Donate</Link>

        </div>


        <div className="footer-column">

          <h3>Company</h3>

          <Link to="/about">About Us</Link>
          <Link to="/about">Our Values</Link>
          <Link to="/about">Contact</Link>

        </div>

      </footer>


      <div className="footer-bottom">
        © 2026 ClosetCycle. All rights reserved.
      </div>

    </main>
  );
}

export default Home;