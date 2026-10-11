import { ArrowRight } from "lucide-react";
import DestinationCard from "../destination/DestinationCard";
import  destinations  from "../../utils/destinations";
import "./DestinationPreview.css";

function DestinationPreview() {
  const previewDestinations = destinations.slice(0, 6);

  return (
    <section className="destination-preview">

      <div className="destination-preview-header">

        <div>
          <span className="destination-preview-subtitle">
            EXPLOREZ LA TUNISIE
          </span>

          <h2>
            Des destinations qui inspirent
          </h2>

          <p>
            Du Nord verdoyant au désert du Sud, chaque région tunisienne
            révèle un caractère unique.
          </p>
        </div>

        <a
          href="/destinations"
          className="destination-preview-link"
        >
          Toutes les destinations
          <ArrowRight size={19} />
        </a>

      </div>

      <div className="destination-preview-grid">

        {previewDestinations.map((destination) => (
          <DestinationCard
            key={destination.name}
            {...destination}
          />
        ))}

      </div>

    </section>
  );
}

export default DestinationPreview;


