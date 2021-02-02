import React, { useState } from 'react'

import { Container } from 'components/StyledComponents'

export const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [userInfo, setUserInfo] = useState("")
    const LOGIN_URL = "https://environmental-kids-game.herokuapp.com/sessions"

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

        })
    }
    console.log(userInfo)

    return (
        <Container>
            <form>
                <label>Användarnamn
                    <input
                    type="text"
                    value={username}
                    onChange={event => setUsername(event.target.value)}
                    placeholder="Användarnamn" />
                </label>
            </form>
            <form>
                <label>Lösenord
                    <input
                    type="password"
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                    placeholder="Lösenord" />
                </label>
                <button type="submit" onClick={handleLogIn}>Logga In</button>
            </form>
            </Container>
    )
}
