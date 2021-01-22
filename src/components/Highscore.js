import React from 'react'
import {useDispatch} from 'react-redux'


import {Container} from "components/StyledComponents"
import { fetchHighscore } from 'reducers/game'

export const Highscore = () => {
    const dispatch = useDispatch()
    dispatch(fetchHighscore())
    return (
    <Container>
        <h1>Highscore</h1>
    </Container>
    )
}