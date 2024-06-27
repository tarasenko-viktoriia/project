import {configureStore} from "@reduxjs/toolkit";
import listReducer from "./reducer/list"


export const store = configureStore ({
    reducer: {
        list: listReducer,
    }
})

