import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./slices/LogInSlices"
import productList from "./slices/ProductSlices"
import productDetail from "./slices/DetaileSlices";
import cartReducer from "./slices/CartSlices"
const Store = configureStore({
    reducer: {
        products: productList,
        login: loginSlice,
        detail: productDetail,
        cart: cartReducer,
    }
})
export default Store;