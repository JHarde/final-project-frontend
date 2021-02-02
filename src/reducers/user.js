import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    accessToken: null,
    userId: 0,
    score: 0,
}

export const user = createSlice({
    name: "user",
    initialState, 
    reducers: {
        setAccessToken: (store, action) => {
            const {accessToken} = action.payload;
            store.accessToken = accessToken;
        },
        setScore: (store, action) => {
            const {score} = action.payload;
            store.score = score;
        },
        setUserId: (store, action) => {
            const {userId} = action.payload;
            store.userId = userId;
        },
        logOut: (store, action) => {
            store.userId = 0;
            store.accessToken = null;

        }
    }
})