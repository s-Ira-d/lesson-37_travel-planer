import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../redux/tripsSlice";

function SearchBar() {
  const dispatch = useDispatch();

  const search = useSelector((state) => state.trips.search);

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search city or country..."
        value={search}
        onChange={(event) => dispatch(setSearch(event.target.value))}
      />
    </div>
  );
}

export default SearchBar;
