import { ArrowRight, MapPin } from "lucide-react";

function DestinationCard({
  name,
  region,
  description,
  image,
  accommodations,
}) {
  return (
    <article
      className="destination-card"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="destination-card-overlay"></div>

      <div className="destination-card-content">

        <div className="destination-location">
          <MapPin size={16} strokeWidth={1.8} />
          <span>{region}</span>
        </div>

        <h2>{name}</h2>

        <p>{description}</p>

        <div className="destination-card-footer">

          <span>
            {accommodations}{" "}
            {accommodations > 1
              ? "hébergements"
              : "hébergement"}
          </span>

          <a href={`/hebergements?destination=${name}`}>
            <span>Explorer</span>
            <ArrowRight size={19} />
          </a>

        </div>

      </div>
    </article>
  );
}

export default DestinationCard;