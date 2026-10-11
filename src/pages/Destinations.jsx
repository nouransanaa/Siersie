import Navbar from "../components/layout/Navbar";
import DestinationGrid from "../components/destination/DestinationGrid";

import "./Destinations.css";

function Destinations() {
  return (
    <div className="destinations-page">

      <Navbar />

      <main>

        {/* Introduction */}
        <section className="destinations-intro">

          <div className="container">

            <span className="destinations-eyebrow">
              DESTINATIONS
            </span>

            <h1>
              Explorez la Tunisie
            </h1>

            <p>
              Du Nord verdoyant aux oasis du Sud, découvrez les
              régions et villes qui font le charme de la Tunisie.
            </p>

          </div>

        </section>

        {/* Destinations */}
        <section className="destinations-list">

          <div className="container">

            <DestinationGrid />

          </div>

        </section>

      </main>

      {/* Footer viendra ensuite */}

    </div>
  );
}

export default Destinations;