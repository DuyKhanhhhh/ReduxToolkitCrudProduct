import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const detailProduct = createAsyncThunk('product/detail', async (id) => {
    const respont = await axios.get(`https://67566b3811ce847c992cbbfc.mockapi.io/food/${id}`);
    return respont.data;
});
const productDetail = createSlice({
    name: 'productDetail',
    initialState: {
        product: null,
        loading: false,
        error: null,
    },
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(detailProduct.pending, (state) => {
                state.loading = true;
                console.log("pending");

            })
            .addCase(detailProduct.fulfilled, (state, action) => {
                state.loading = false;
                state.product = action.payload;
                console.log("done");

            })
            .addCase(detailProduct.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
                console.log("Error");

            });
    },
});
export default productDetail.reducer