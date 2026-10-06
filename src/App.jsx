import SearchBar from "./components/SearchBar";
import Filters from "./components/Filters";
import SortSelect from "./components/SortSelect";
import TripList from "./components/TripList";
import Statistics from "./components/Statistics";

function App() {
  return (
    <main className="app">
      <header className="header">
        <h1>Travel Planner</h1>
        <p>Plan your next adventure</p>
      </header>

      <Statistics />

      <section className="controls">
        <SearchBar />

        <div className="filter-row">
          <Filters />
          <SortSelect />
        </div>
      </section>

      <TripList />
    </main>
  );
}

export default App;
