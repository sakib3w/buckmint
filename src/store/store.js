import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import themeReducer from "../Services/themeSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    /** here will be more reducer */
  },
  devTools: false,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
    ]),
  /** here will be more reducer */
});

setupListeners(store.dispatch);
