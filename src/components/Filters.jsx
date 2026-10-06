import { useDispatch, useSelector } from "react-redux";

import {
  setCategory,
  setStatus,
  setRating,
  setDuration,
  clearFilters,
} from "../redux/tripsSlice";

function Filters() {
  const dispatch = useDispatch();

  const category = useSelector((state) => state.trips.category);

  const status = useSelector((state) => state.trips.status);

  const rating = useSelector((state) => state.trips.rating);

  const duration = useSelector((state) => state.trips.duration);

  return (
    <div className="filters">
      <select
        value={category}
        onChange={(event) => dispatch(setCategory(event.target.value))}
      >
        <option value="all">All categories</option>
        <option value="Europe">Europe</option>
        <option value="Asia">Asia</option>
        <option value="Africa">Africa</option>
        <option value="Oceania">Oceania</option>
        <option value="South America">South America</option>
      </select>

      <select
        value={status}
        onChange={(event) => dispatch(setStatus(event.target.value))}
      >
        <option value="all">All statuses</option>
        <option value="wishlist">Wishlist</option>
        <option value="planned">Planned</option>
        <option value="visited">Visited</option>
      </select>

      <select
        value={rating}
        onChange={(event) => dispatch(setRating(event.target.value))}
      >
        <option value="all">All ratings</option>
        <option value="4">4.0+</option>
        <option value="4.5">4.5+</option>
        <option value="4.7">4.7+</option>
        <option value="4.8">4.8+</option>
        <option value="4.9">4.9+</option>
      </select>

      <select
        value={duration}
        onChange={(event) => dispatch(setDuration(event.target.value))}
      >
        <option value="all">All durations</option>
        <option value="5">Up to 5 days</option>
        <option value="7">Up to 7 days</option>
        <option value="9">Up to 9 days</option>
        <option value="10">Up to 10 days</option>
        <option value="12">Up to 12 days</option>
      </select>

      <button
        className="clear-button"
        type="button"
        onClick={() => dispatch(clearFilters())}
      >
        Clear filters
      </button>
    </div>
  );
}

export default Filters;
