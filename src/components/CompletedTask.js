import React from "react"
import { Link } from 'react-router-dom'

import {Container} from "components/StyledComponents"

export const CompletedTask = ({isCorrect, answer, setAnswer, why}) => {
    console.log(isCorrect, answer)
    return (
        <Container>
            {isCorrect && <>
            <h1>Bra jobbat!</h1>
            <p>{why}</p></>}

            {!isCorrect && <>
            <h1>Försök igen</h1>
            <button onClick={() => setAnswer("")}>Försök igen</button>
            </>}

            <Link to="/gameboard">
                <button>Fortsätt spela</button>
            </Link>
            <Link to="/endgame">
                <button>Sluta spela</button>
            </Link>
            
        </Container>
    )
}