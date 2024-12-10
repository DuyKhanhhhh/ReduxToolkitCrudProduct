import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const login = createAsyncThunk('user/login', async ({ userName, password }) => {
    const respont = await axios.get(`https://67566b3811ce847c992cbbfc.mockapi.io/user?username=${userName}&password=${password}`);
    console.log(respont);

    const user = respont.data[0];
    if (user) {
        return user;
    } else {
        throw new Error('Tên đăng nhập hoặc mật khẩu không đúng!')
    }
});

const loginSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
        isAuthenticated: false,
        error: null,
    },
    reducers: {
        logout: (state) => {
            state.user = null;
            state.isAuthenticated = false;
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.fulfilled, (state, action) => {
                state.user = action.payload;
                state.isAuthenticated = true;
                state.error = null;
            })
            .addCase(login.rejected, (state, action) => {
                state.error = action.error.message;
                state.isAuthenticated = false;
            });
    },
});
export const { logout } = loginSlice.actions;
export default loginSlice.reducer;