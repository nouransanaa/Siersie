import DestinationCard from "./DestinationCard";
import  destinations  from "../../utils/destinations";

function DestinationGrid() {
  return (
    <div className="destinations-grid">

      {destinations.map((destination) => (
        <DestinationCard
          key={destination.id}
          name={destination.name}
          region={destination.region}
          description={destination.description}
          image={destination.image}
          accommodations={destination.accommodations}
        />
      ))}

    </div>
  );
}

export default DestinationGrid;