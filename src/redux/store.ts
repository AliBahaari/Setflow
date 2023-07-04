import { configureStore } from "@reduxjs/toolkit";
import { globalReducer } from "./reducers";
import { todosApi } from "./apis/Todos";
import { setupListeners } from "@reduxjs/toolkit/query";
import { createWrapper } from "next-redux-wrapper";

const store = configureStore({
  reducer: {
    [todosApi.reducerPath]: todosApi.reducer,
    global: globalReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todosApi.middleware),
});

setupListeners(store.dispatch);
export const wrapper = createWrapper(() => store);
