import { createSlice } from "@reduxjs/toolkit";
import { trips } from "../data/trips";

const initialState = {
  items: trips,

  search: "",

  category: "all",

  status: "all",

  rating: "all",

  duration: "all",

  sortBy: "default",
};

const tripsSlice = createSlice({
  name: "trips",

  initialState,

  reducers: {
    setSearch(state, action) {
      state.search = action.payload;
    },

    setCategory(state, action) {
      state.category = action.payload;
    },

    setStatus(state, action) {
      state.status = action.payload;
    },

    setRating(state, action) {
      state.rating = action.payload;
    },

    setDuration(state, action) {
      state.duration = action.payload;
    },

    setSortBy(state, action) {
      state.sortBy = action.payload;
    },

    changeTripStatus(state, action) {
      const { id, status } = action.payload;

      const trip = state.items.find((trip) => trip.id === id);

      if (trip) {
        trip.status = status;
      }
    },

    clearFilters(state) {
      state.search = "";
      state.category = "all";
      state.status = "all";
      state.rating = "all";
      state.duration = "all";
      state.sortBy = "default";
    },
  },
});

export const {
  setSearch,
  setCategory,
  setStatus,
  setRating,
  setDuration,
  setSortBy,
  changeTripStatus,
  clearFilters,
} = tripsSlice.actions;

export default tripsSlice.reducer;
