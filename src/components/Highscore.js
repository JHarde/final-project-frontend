import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'


import { Container } from "components/StyledComponents"
import { fetchHighscore } from 'reducers/game'

export const Highscore = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchHighscore());
    }, []);

    const highscore = useSelector(store => store.game.highscore)
    return (
    <Container>
        <h1>Highscore</h1>
        <ol>
        {highscore.map(score => {
            return <li>{score.name} {score.score}</li>
        })}</ol>
    </Container>
    )
}