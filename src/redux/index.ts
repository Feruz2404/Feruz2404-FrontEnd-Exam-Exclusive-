import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api";
import { cartSlice } from "./features/cart-slice";
import wishlistReducer from "./features/wishlistSlice";
import { loginApi } from "./api/login";
import userReducer from "./features/user-slice"

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    wishlist: wishlistReducer,
    user: userReducer,
    [loginApi.reducerPath]: loginApi.reducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware, loginApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
