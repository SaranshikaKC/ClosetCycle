import "./About.css";

import leavesImage from "../../assets/about/leaves.png";
import clothingImage from "../../assets/about/clothing-exchange.png";

function About() {
  return (
    <main className="about-page">

      {/* Hero Section */}
      <section className="about-hero">

        <div className="about-hero-text">
          <p className="about-label">ABOUT CLOSETCYCLE</p>

          <h1>
            Fashion deserves
            <br />
            a second life.
          </h1>

          <p className="about-intro">
            ClosetCycle is a space where clothes keep moving,
            people find new favorites, and fashion becomes a little
            kinder to our planet.
          </p>
        </div>

        <div className="about-leaves">
          <img
            src={leavesImage}
            alt="Green botanical illustration"
          />
        </div>

      </section>


      {/* Our Story */}
      <section className="about-story">

        <div className="about-story-image">
          <img
            src={clothingImage}
            alt="Two people exchanging clothing"
          />
        </div>

        <div className="about-story-content">
          <p className="about-label">OUR STORY</p>

          <h2>
            Clothes are meant
            <br />
            to be loved again.
          </h2>

          <p>
            We created ClosetCycle because too many beautiful clothes
            are left sitting in closets or thrown away simply because
            their first owner no longer needs them.
          </p>

          <p>
            Instead of letting good clothing go to waste, ClosetCycle
            gives it another journey. You can sell pieces you no longer
            wear, discover something new, or donate clothes to someone
            who needs them.
          </p>

          <p>
            Every item shared is one small step toward a more thoughtful
            and circular approach to fashion.
          </p>
        </div>

      </section>


      {/* Mission */}
      <section className="about-mission">

        <p className="about-label">OUR MISSION</p>

        <h2>
          Wear more.
          <br />
          Waste less.
          <br />
          Share often.
        </h2>

        <p>
          ClosetCycle connects people through clothing and makes
          secondhand fashion simple, personal, and meaningful.
        </p>

      </section>

    </main>
  );
}

export default About;