import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accessToken: localStorage.accessToken || null,
  userId: localStorage.userId || 0,
  score: localStorage.score || 0,
};

export const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAccessToken: (store, action) => {
      const { accessToken } = action.payload;
      store.accessToken = accessToken;
      localStorage.setItem("accessToken", accessToken);
    },
    setScore: (store, action) => {
      const { score } = action.payload;
      store.score = score;
      localStorage.setItem("score", score);
    },
    setUserId: (store, action) => {
      const { userId } = action.payload;
      store.userId = userId;
      localStorage.setItem("userId", userId);
    },
    logOut: (store, action) => {
      store.userId = 0;
      store.accessToken = null;
      localStorage.removeItem("userId");
      localStorage.removeItem("accessToken");
    },
  },
});
