import { configureStore } from "@reduxjs/toolkit";
import stepperReducer from './stepperSlice.ts';

const store = configureStore({
    reducer: stepperReducer
});

export default store;