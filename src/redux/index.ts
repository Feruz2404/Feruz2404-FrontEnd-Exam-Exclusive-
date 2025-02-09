import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api";
import { cartSlice } from "./features/cart-slice";
import wishlistReducer from "./features/wishlistSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    wishlist: wishlistReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
