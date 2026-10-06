import { useSelector } from "react-redux";
import { selectFilteredTrips } from "../redux/selectors";
import TripCard from "./TripCard";

function TripList() {
  const trips = useSelector(selectFilteredTrips);

  return (
    <section>
      <div className="trips-header">
        <h2>Trips: {trips.length}</h2>
      </div>

      {trips.length === 0 ? (
        <div className="empty">No trips found.</div>
      ) : (
        <div className="trip-list">
          {trips.map((trip) => (
            <TripCard key={trip.id} trip={trip} />
          ))}
        </div>
      )}
    </section>
  );
}

export default TripList;
