import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {
	Header,
	EndGameContainer,
	Paragraph,
	HighscoreLabel,
	HeaderScore,
	Button,
	Input,
	HeaderScoreContainer,
	HeaderScorePoints,
	ScoreParagraph
} from 'components/StyledComponents';
import { fetchHighscore, postHighscore } from 'reducers/game';
import { user } from 'reducers/user';
import { game } from 'reducers/user';
import { Highscore } from 'components/Highscore'
import { Logout } from 'components/Logout'

export const EndGame = () => {
	const dispatch = useDispatch();
	const guestScore = useSelector((store) => store.game.guestScore);
	const accessToken = useSelector((store) => store.user.accessToken);
	const score = useSelector((store) => store.user.score)
	const userId = useSelector((store) => store.user.userId)
	const userName = useSelector((store) => store.user.userName)


	const [avatarName, setAvatarName] = useState('');
	const [isSent, setIsSent] = useState(false);

	const sendScore = (event) => {
		//Get the logged in user's name to POST instead of avatarName

		fetch('https://environmental-kids-game.herokuapp.com/highscore', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ name: accessToken ? userName : avatarName, score: accessToken ? score : guestScore }),
		})
			.then((res) => res.json())
			.then((res) => {
				console.log(res);
				setIsSent(true);
			});
		event.preventDefault();

	};
	if(!isSent){
	return (
		<EndGameContainer>
			<HeaderScoreContainer>
				<HeaderScore>{accessToken ? score : guestScore}</HeaderScore>
				<ScoreParagraph>poäng</ScoreParagraph>
			</HeaderScoreContainer>

			<Header>Vill du vara med på topplistan?</Header>
			<form>{!accessToken &&
				<HighscoreLabel>
					Vad heter din Avatar?
					<Input
						type="text"
						value={avatarName}
						onChange={(event) => setAvatarName(event.target.value)}
						placeholder="Skriv ett namn här"
						maxLength="20"
					/>
				</HighscoreLabel>}
				<Button type="submit" onClick={sendScore} style={{fontSize: 27}}>
					Skicka till topplista
				</Button>
			</form>
			{accessToken &&
			<Logout button/>}
			{/* <Link to="/">
				{' '}
				 Nollställa state/redux?
				<Button>Spela igen</Button>
			</Link> */}
			{/* <Link to="/highscore">
				<Button>Se topplista</Button>
			</Link> */}
		</EndGameContainer>
	);
	} else {
		return <Highscore/>
	}

};
