import React, {useState} from "react"
import { Link } from "react-router-dom"

import {Container} from "components/StyledComponents"

export const EndGame = () => {

    const [avatarName, setAvatarName] = useState("")

    

    return (
        <Container>
            <h1>Antal rätt</h1>
            <p>Vill du vara med på topplistan?</p>
            <form>
            <label> Vad heter din Avatar? 
                <input type="text"/>
            </label>
            <button>Skicka till topplista</button>
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