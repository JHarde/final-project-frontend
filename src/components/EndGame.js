import React, { useState } from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import { Container } from "components/StyledComponents"
import { game, postHighscore } from 'reducers/game'

export const EndGame = () => {

    const dispatch = useDispatch()
    const userScore = useSelector(store => store.game.userScore)
    const [avatarName, setAvatarName] = useState("")
    const sendScore = () => {
        dispatch(postHighscore(avatarName, userScore))
        // score: Number
    }

    return (
        <Container>
            <h1>Antal rätt</h1>
            <p>Vill du vara med på topplistan?</p>
            <form>
                <label> Vad heter din Avatar?
                    <input 
                    type="text"
                    value={avatarName}
                    onChange={event => setAvatarName(event.target.value)}
                    placeholder="Avatar"
                    maxLength="20"/>
                </label>
                <button type="submit" onClick={sendScore}>Skicka till topplista</button>
            </form>
            <Link to="/"> {/* Nollställa state/redux? */}
                <button>Spela igen</button>
            </Link>
            <Link to="/highscore">
                <button>Se topplista</button>
            </Link>
        </Container>
    )
}