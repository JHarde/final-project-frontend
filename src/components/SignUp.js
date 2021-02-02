import React, { useState } from 'react'

import { Container, Button } from 'components/StyledComponents'

export const SignUp = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [userInfo, setUserInfo] = useState('')
    const SIGNUP_URL = "https://environmental-kids-game.herokuapp.com/users"

    const handleSignUp = (event) => {
        event.preventDefault();

        fetch(SIGNUP_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name: username, password: password})
        })
        .then((res) => res.json())
        .then((json) => {
            setUserInfo(json)
        })
    }
    console.log(userInfo)
    return (
        <Container>
            <form>
                <label>Välj ett användarnamn:
                    <input 
                    type="text"
                    value={username}
                    onChange={event => setUsername(event.target.value)}
                    placeholder="Användarnamn"
                    />
                </label>
                <label>Välj ett lösenord:
                    <input 
                    type="password"
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                    placeholder="Lösenord"
                    />
                </label>
                <Button type="submit" onClick={handleSignUp}>Skapa konto</Button>
            </form>
        </Container>
    )
}