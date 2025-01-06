import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./ui-slice"; // Import the reducer directly (assuming it's the default export)

const store = configureStore({
  reducer: {
    ui: uiReducer, // Use `uiReducer` directly
  },
});

export default store;