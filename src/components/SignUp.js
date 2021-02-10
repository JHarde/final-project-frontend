import React, { useState } from 'react';

import { Login } from 'components/Login';
import { HamburgerMenu } from './HamburgerMenu';

import {
	Container,
	Button,
	FormLabel,
	Input,
	ErrorParagraph,
} from 'components/StyledComponents';

export const SignUp = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [signUpInfo, setSignUpInfo] = useState('');
	const [passwordError, setPasswordError] = useState('');
	const [nameError, setNameError] = useState('');
	const [signUpSuccess, setSignUpSuccess] = useState(false);

	const SIGNUP_URL = 'https://environmental-kids-game.herokuapp.com/users';

	const handleSignUpFail = (errorMessage) => {
		if (errorMessage.code) {
			setNameError('Användarnamnet är upptaget, välj ett annat');
		} else if (errorMessage.errors) {
			errorMessage.errors.name
				? setNameError('Fyll i ett användarnamn')
				: setNameError('');
			errorMessage.errors.password
				? setPasswordError('Lösenordet behöver vara minst 5 tecken')
				: setPasswordError('');
		}
	};

	const handleSignUpSuccess = (userInfo) => {
		setNameError('');
		setPasswordError('');
		setSignUpSuccess(true);
	};

	const handleSignUp = (event) => {
		event.preventDefault();

		fetch(SIGNUP_URL, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ name: username, password: password }),
		})
			.then((res) => res.json())
			.then((json) => {
				setSignUpInfo(json);
				if (json.errors) {
					handleSignUpFail(json.errors);
				} else {
					handleSignUpSuccess(json);
				}
			});
	};

	if (!signUpSuccess) {
		return (
			<Container>
				<HamburgerMenu />
				<form>
					<FormLabel>
						Välj ett användarnamn:
						<Input
							type="text"
							value={username}
							onChange={(event) => setUsername(event.target.value)}
							placeholder="Användarnamn"
						/>
						{nameError && <ErrorParagraph>{nameError}</ErrorParagraph>}
					</FormLabel>

					<FormLabel>
						Välj ett lösenord:
						<Input
							type="password"
							value={password}
							onChange={(event) => setPassword(event.target.value)}
							placeholder="Lösenord"
						/>
						{passwordError && <ErrorParagraph>{passwordError}</ErrorParagraph>}
					</FormLabel>

					<Button type="submit" onClick={handleSignUp}>
						Skapa konto
					</Button>
				</form>
			</Container>
		);
	} else {
		return <Login />;
	}
};
