import { useDispatch } from "react-redux";
import { changeTripStatus } from "../redux/tripsSlice";

function TripCard({ trip }) {
  const dispatch = useDispatch();

  const handleStatusChange = (event) => {
    dispatch(
      changeTripStatus({
        id: trip.id,
        status: event.target.value,
      }),
    );
  };

  return (
    <article className="trip-card">
      <h2>{trip.city}</h2>

      <p className="trip-country">{trip.country}</p>

      <span className={`status status-${trip.status}`}>{trip.status}</span>

      <div className="trip-info">
        <p> Category: {trip.category}</p>

        <p> Duration: {trip.duration} days</p>

        <p>Rating: {trip.rating}</p>

        <p className="trip-price">${trip.price}</p>
      </div>

      <select value={trip.status} onChange={handleStatusChange}>
        <option value="wishlist">Wishlist</option>

        <option value="planned">Planned</option>

        <option value="visited">Visited</option>
      </select>
    </article>
  );
}

export default TripCard;
