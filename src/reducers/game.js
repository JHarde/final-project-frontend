import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    highscore: [
        {username: "Sven", score: 3}
    ],
    questions: [],
    userScore: 0
}

export const game = createSlice({
name: 'game',
initialState, 
reducers: {
    setHighscore: (store, action) => {
        store.highscore = action.payload;
    },

    setQuestions: (store, action) => {
        store.questions = action.payload;
    },

    setUserScore: (store, action) => {
        store.userScore = action.payload;
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

export const fetchHighscore = () => {
    return (dispatch) => {
        fetch("https://environmental-kids-game.herokuapp.com/highscore")
        .then(res => res.json())
        .then((highscore) => {
            dispatch(game.actions.setHighscore(highscore))
        })
}}

export const postHighscore = ({name, score}) => {
    return (dispatch) => {
        fetch("https://environmental-kids-game.herokuapp.com/highscore", {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({name: name, score: score})
        })
        .then(res => res.json())
        .then((res) => {
            console.log(res)
        })
}}