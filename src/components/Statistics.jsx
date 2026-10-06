import { useSelector } from "react-redux";
import { selectTravelStats } from "../redux/selectors";

function Statistics() {
  const stats = useSelector(selectTravelStats);

  return (
    <section className="statistics">
      <div className="stat-card">
        <h3>Total trips</h3>
        <p>{stats.totalTrips}</p>
      </div>

      <div className="stat-card">
        <h3>Visited</h3>
        <p>{stats.visitedTrips}</p>
      </div>

      <div className="stat-card">
        <h3>Planned</h3>
        <p>{stats.plannedTrips}</p>
      </div>

      <div className="stat-card">
        <h3>Wishlist</h3>
        <p>{stats.wishlistTrips}</p>
      </div>
    </section>
  );
}

export default Statistics;
