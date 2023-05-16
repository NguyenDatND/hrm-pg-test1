import { createSlice, PayloadAction, createAsyncThunk, AsyncThunk } from '@reduxjs/toolkit';
import { Company } from '../../Types/company';
import axios from 'axios';
import { API_PATHS } from '../../configs/api';
import Cookies from 'js-cookie';
import { ACCESS_TOKEN_KEY } from '../../utils/contants';
import { fetchApi } from '../../configs/fetchApi';
import { User } from '../../Types/user';
type GenericAsyncThunk = AsyncThunk<unknown, unknown, any>;
type PendingAction = ReturnType<GenericAsyncThunk['pending']>;
type RejectedAction = ReturnType<GenericAsyncThunk['rejected']>;
type FulfilledAction = ReturnType<GenericAsyncThunk['fulfilled']>;

interface CompanyState {
    user: User[];
    loadingUser: boolean;
}

const initialState: CompanyState = {
    user: [],
    loadingUser: false,
};

export const getUserList = createAsyncThunk('users/getUser', async () => {
    const res = await axios.get(API_PATHS.user, {
        headers: { Authorization: `Bearer ${Cookies.get(ACCESS_TOKEN_KEY)}` },
    });
    const data = res.data.data;
    return data;
});

// get user details
export const getUserDetails = createAsyncThunk('users/getUserDetails', async () => {
    const res = await axios.get(API_PATHS.useDetail, {
        headers: { Authorization: `Bearer ${Cookies.get(ACCESS_TOKEN_KEY)}` },
    });
    const data = res.data.data;
    return data;
});

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(getUserDetails.fulfilled, (state, action) => {
                state.user = action.payload;
            })
            .addMatcher<PendingAction>(
                (action) => action.type.endsWith('/pending'),
                (state, action) => {
                    state.loadingUser = true;
                },
            )
            .addMatcher<RejectedAction>(
                (action) => action.type.endsWith('/rejected'),
                (state, action) => {
                    state.loadingUser = false;
                },
            )
            .addMatcher<FulfilledAction>(
                (action) => action.type.endsWith('/fulfilled'),
                (state, action) => {
                    state.loadingUser = false;
                },
            );
    },
});

// export const {} = userSlice.actions;

export default userSlice.reducer;
