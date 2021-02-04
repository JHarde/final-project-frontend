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
      store.score = 0;
      localStorage.removeItem("userId");
      localStorage.removeItem("accessToken");
    },
  },
});

export const postScore = (userId, scoreNumber) => {
    return (dispatch) => {
    fetch("https://environmental-kids-game.herokuapp.com/userscore", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId: userId, scoreNumber: scoreNumber }),
    })
      .then((res) => res.json())
      .then((score) => {
        console.log(score);
        dispatch(user.actions.setScore(score));
        
      });
    };
  };