import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { GameBoard } from 'components/GameBoard';
import { HamburgerMenu } from './HamburgerMenu';

import { user } from 'reducers/user';

import {
	Container,
	Button,
	FormLabel,
	Input,
	ErrorParagraph,
	Paragraph,
	StyledLink,
} from 'components/StyledComponents';

export const Login = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [userInfo, setUserInfo] = useState('');
	const accessToken = useSelector((store) => store.user.accessToken);
	const dispatch = useDispatch();
	const LOGIN_URL = 'https://environmental-kids-game.herokuapp.com/sessions';

	const handleLogInSuccess = (userInfo) => {
		dispatch(user.actions.setAccessToken(userInfo));
		dispatch(user.actions.setUserId(userInfo));
		dispatch(user.actions.setScore(userInfo));
		dispatch(user.actions.setUserName(userInfo));
	};

	const handleLogIn = (event) => {
		event.preventDefault();

		fetch(LOGIN_URL, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ name: username, password: password }),
		})
			.then((res) => res.json())
			.then((json) => {
				setUserInfo(json);
				if (!json.error) {
					handleLogInSuccess(json);
				}
			});
	};

	if (!accessToken) {
		return (
			<Container>
				<HamburgerMenu />
				<form>
					<FormLabel>
						Användarnamn
						<Input
							type="text"
							value={username}
							onChange={(event) => setUsername(event.target.value)}
							placeholder="Användarnamn"
						/>
					</FormLabel>
					<FormLabel>
						Lösenord
						<Input
							type="password"
							value={password}
							onChange={(event) => setPassword(event.target.value)}
							placeholder="Lösenord"
						/>
					</FormLabel>
					{userInfo.error && (
						<ErrorParagraph>
							Det gick inte att logga in, kontrollera användarnamn och lösenord
						</ErrorParagraph>
					)}
					<Button type="submit" onClick={handleLogIn}>
						Logga In
					</Button>
				</form>
				{userInfo.error && (
					<Paragraph>
						{<StyledLink to="/signup">Skapa nytt konto?</StyledLink>}
					</Paragraph>
				)}
			</Container>
		);
	} else {
		return <GameBoard />;
	}
};
