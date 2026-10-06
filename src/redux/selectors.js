export const selectFilteredTrips = (state) => {
  const { items, search, category, status, rating, duration, sortBy } =
    state.trips;

  let result = [...items];

  // Пошук за містом або країною
  if (search.trim()) {
    const query = search.toLowerCase().trim();

    result = result.filter(
      (trip) =>
        trip.city.toLowerCase().includes(query) ||
        trip.country.toLowerCase().includes(query),
    );
  }

  // Фільтр за категорією
  if (category !== "all") {
    result = result.filter((trip) => trip.category === category);
  }

  // Фільтр за статусом
  if (status !== "all") {
    result = result.filter((trip) => trip.status === status);
  }

  // Фільтр за рейтингом
  if (rating !== "all") {
    const minRating = Number(rating);

    result = result.filter((trip) => trip.rating >= minRating);
  }

  // Фільтр за тривалістю
  if (duration !== "all") {
    const maxDuration = Number(duration);

    result = result.filter((trip) => trip.duration <= maxDuration);
  }

  // Сортування
  switch (sortBy) {
    case "price-asc":
      result.sort((a, b) => a.price - b.price);
      break;

    case "price-desc":
      result.sort((a, b) => b.price - a.price);
      break;

    case "rating-asc":
      result.sort((a, b) => a.rating - b.rating);
      break;

    case "rating-desc":
      result.sort((a, b) => b.rating - a.rating);
      break;

    case "duration-asc":
      result.sort((a, b) => a.duration - b.duration);
      break;

    case "duration-desc":
      result.sort((a, b) => b.duration - a.duration);
      break;

    default:
      break;
  }

  return result;
};

export const selectTravelStats = (state) => {
  const trips = state.trips.items;

  const totalTrips = trips.length;

  const visitedTrips = trips.filter((trip) => trip.status === "visited").length;

  const plannedTrips = trips.filter((trip) => trip.status === "planned").length;

  const wishlistTrips = trips.filter(
    (trip) => trip.status === "wishlist",
  ).length;

  const totalCost = trips.reduce((sum, trip) => sum + trip.price, 0);

  const averageRating =
    totalTrips > 0
      ? trips.reduce((sum, trip) => sum + trip.rating, 0) / totalTrips
      : 0;

  return {
    totalTrips,
    visitedTrips,
    plannedTrips,
    wishlistTrips,
    totalCost,
    averageRating,
  };
};
