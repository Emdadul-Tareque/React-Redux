import { createStore } from "redux";
import cartReducers from "../Reducers/cartReducers";

export const cartStore = createStore(cartReducers);