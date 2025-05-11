import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";

export const store = configureStore({
    // we pass the todoRedecure
    //   reducer: {},
    
    reducer: todoReducer,
});
