import React from "react"
import { Link } from 'react-router-dom'

import {Container} from "components/StyledComponents"

export const CompletedTask = ({isCorrect, answer}) => {
    console.log(isCorrect, answer)
    return (
        <Container>
            <h1>Bra jobbat!</h1>
            <Link to="/gameboard">
                <button>Fortsätt spela</button>
            </Link>
            <Link to="/endgame">
            <button>Sluta spela</button>
            </Link>
            <button>Försök igen</button>
        </Container>
    )
}