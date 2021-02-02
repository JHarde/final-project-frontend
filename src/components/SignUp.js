import React, { useState } from 'react'

import { Container, Button } from 'components/StyledComponents'

export const SignUp = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [signUpInfo, setSignUpInfo] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [errorMessage, setErrorMessage] = useState()
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
            setSignUpInfo(json)
            if (json.errors) {
                setErrorMessage(json.errors)
            } 
        })
    }
    console.log(signUpInfo)
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

                {errorMessage && errorMessage.code && <p>Användarnamnet är upptaget, välj ett annat</p>}
                {errorMessage && errorMessage.errors && errorMessage.errors.name && <p>Skriv användarnamn</p>}
                <label>Välj ett lösenord:
                    <input 
                    type="password"
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                    placeholder="Lösenord"
                    />
                </label>
                {errorMessage && errorMessage.errors && errorMessage.errors.password && <p>Lösenordet behöver vara minst 5 tecken</p>}
                <Button type="submit" onClick={handleSignUp}>Skapa konto</Button>
            </form>
        </Container>
    )
}