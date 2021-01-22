import React from 'react'
import { Link } from 'react-router-dom'
import {useDispatch} from 'react-redux'

import { Container } from 'components/StyledComponents'
import { fetchQuestions } from 'reducers/game'


export const Start = () => {
    const dispatch = useDispatch();
    const startGame = () => {
        dispatch(fetchQuestions());
    }

    return (
        <Container>
            <h1>Hej!</h1>
            <p>Superkort information om spelet och klimatet</p>

            {/* Fix semantic/accessibility */}
            <Link to="/gameboard">
                <button onClick={startGame}>Börja spela</button>
            </Link> 
            <Link to="/highscore">
            <button>Se topplista</button>
            </Link>
            
        </Container>

    )
}