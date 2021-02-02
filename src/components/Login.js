import React, { useState } from 'react'
import { Link } from "react-router-dom";

import { Container, Button, FormLabel, HighscoreInput, ErrorParagraph, Paragraph } from 'components/StyledComponents'

export const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [userInfo, setUserInfo] = useState("")
    const LOGIN_URL = "https://environmental-kids-game.herokuapp.com/sessions"

    const handleLogInSuccess = (userInfo) => {
        //Send Accesstoken to redux
        //Send to GameBoard.js
    }

    const handleLogIn = (event) => {
        event.preventDefault()

        fetch(LOGIN_URL, {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify({name: username, password: password})
        })
        .then((res) => res.json())
        .then((json) => {
            setUserInfo(json)
            if (!json.error){
                handleLogInSuccess(json)
            }
        })
    }

    return (
        <Container>
            <form>
                <FormLabel>Användarnamn
                    <HighscoreInput
                    type="text"
                    value={username}
                    onChange={event => setUsername(event.target.value)}
                    placeholder="Användarnamn" />
                </FormLabel>
                <FormLabel>Lösenord
                    <HighscoreInput
                    type="password"
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                    placeholder="Lösenord" />
                </FormLabel>
                {userInfo.error &&
                    <ErrorParagraph>Det gick inte att logga in, kontrollera användarnamn och lösenord</ErrorParagraph>
                }
                <Button type="submit" onClick={handleLogIn}>Logga In</Button>
            </form>
            {userInfo.error &&
                <Paragraph>{<Link to="/signup">Skapa nytt konto</Link>}</Paragraph>}
        </Container>
    )
}
