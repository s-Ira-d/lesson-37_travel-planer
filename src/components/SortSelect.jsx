import { useDispatch, useSelector } from "react-redux";
import { setSortBy } from "../redux/tripsSlice";

function SortSelect() {
  const dispatch = useDispatch();

  const sortBy = useSelector((state) => state.trips.sortBy);

  return (
    <div className="sort">
      <select
        value={sortBy}
        onChange={(event) => dispatch(setSortBy(event.target.value))}
      >
        <option value="default">Default sorting</option>

        <option value="price-asc">Price: low to high</option>

        <option value="price-desc">Price: high to low</option>

        <option value="rating-asc">Rating: low to high</option>

        <option value="rating-desc">Rating: high to low</option>

        <option value="duration-asc">Duration: short to long</option>

        <option value="duration-desc">Duration: long to short</option>
      </select>
    </div>
  );
}

export default SortSelect;
