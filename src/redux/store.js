import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import dataReducer from "./dataFetching";

export default configureStore({
  reducer: {
    counter: counterReducer,
    dataReducer : dataReducer
  }
});
