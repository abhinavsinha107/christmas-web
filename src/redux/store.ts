import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "./reducers/userReducer";
import genderReducer from "./reducers/genderReducer";
import { api } from "../services/api";

const userPersistConfig = {
  key: "user",
  storage,
};
const genderPersistConfig = {
  key: "gender",
  storage,
};

const userPersistedReducer = persistReducer(userPersistConfig, userReducer);
const genderPersistedReducer = persistReducer(genderPersistConfig, genderReducer);

export const store = configureStore({
  reducer: {
    user: userPersistedReducer,
    gender: genderPersistedReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          "persist/PERSIST",
          "persist/REHYDRATE",
          "persist/PURGE",
        ],
      },
    }).concat(api.middleware),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
