import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    highScore: [
        {username: "Sven", score: 3}
    ]
}

export const game = createSlice({
name: 'game',
initialState, 
reducers: {
    setHighScore: (state, action) => {

    }
}
})