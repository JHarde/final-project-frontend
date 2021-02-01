import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {
	Header,
	EndGameContainer,
	Paragraph,
	FormLabel,
	HeaderScore,
	Button,
	HighscoreInput,
	HeaderScoreContainer,
	HeaderScorePoints,
} from 'components/StyledComponents';
import { fetchHighscore, postHighscore } from 'reducers/game';

export const EndGame = () => {
	const dispatch = useDispatch();
	const userScore = useSelector((store) => store.game.userScore);
	const [avatarName, setAvatarName] = useState('');

	const sendScore = (event) => {
		// dispatch(postHighscore(avatarName, userScore));
		fetch('https://environmental-kids-game.herokuapp.com/highscore', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ name: avatarName, score: userScore }),
		})
			.then((res) => res.json())
			.then((res) => {
				console.log(res);
			});

		event.preventDefault();
	};

	return (
		<EndGameContainer>
			<HeaderScoreContainer>
				<HeaderScore>{userScore}</HeaderScore>
				<Paragraph>poäng</Paragraph>
			</HeaderScoreContainer>

			<Paragraph>Vill du vara med på topplistan?</Paragraph>
			<form>
				<FormLabel>
					Vad heter din Avatar?
					<HighscoreInput
						type="text"
						value={avatarName}
						onChange={(event) => setAvatarName(event.target.value)}
						placeholder="Skriv namnet på din Avatar"
						maxLength="20"
					/>
				</FormLabel>
				<Button type="submit" onClick={sendScore}>
					Skicka till topplista
				</Button>
			</form>
			<Link to="/">
				{' '}
				{/* Nollställa state/redux? */}
				<Button>Spela igen</Button>
			</Link>
			<Link to="/highscore">
				<Button>Se topplista</Button>
			</Link>
		</EndGameContainer>
	);
};
