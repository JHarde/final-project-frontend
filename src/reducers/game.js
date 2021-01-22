import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    highScore: [
        {username: "Sven", score: 3}
    ],
    questions: []
}

export const game = createSlice({
name: 'game',
initialState, 
reducers: {
    setHighScore: (store, action) => {

    },

    setQuestions: (store, action) => {
        store.questions = action.payload;
    }
}
})

export const fetchQuestions = () => {
    return (dispatch) => {
        fetch("https://environmental-kids-game.herokuapp.com/questions")
        .then(res => res.json())
        .then((questions) => {
            dispatch(game.actions.setQuestions(questions))
        })
}}