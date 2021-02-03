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
import { Highscore } from 'components/Highscore'

export const EndGame = () => {
	const dispatch = useDispatch();
	const userScore = useSelector((store) => store.game.userScore);
	const [avatarName, setAvatarName] = useState('');
	const [isSent, setIsSent] = useState(false);

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
				setIsSent(true);
			});

		event.preventDefault();

	};
	if(!isSent){
	return (
		<EndGameContainer>
			<HeaderScoreContainer>
				<HeaderScore>{userScore}</HeaderScore>
				<ScoreParagraph>poäng</ScoreParagraph>
			</HeaderScoreContainer>

			<Header>Vill du vara med på topplistan?</Header>
			<form>
				<HighscoreLabel>
					Vad heter din Avatar?
					<Input
						type="text"
						value={avatarName}
						onChange={(event) => setAvatarName(event.target.value)}
						placeholder="Skriv ett namn här"
						maxLength="20"
					/>
				</HighscoreLabel>
				<Button type="submit" onClick={sendScore} style={{fontSize: 27}}>
					Skicka till topplista
				</Button>
			</form>
			<Link to="/">
				{' '}
				{/* Nollställa state/redux? */}
				<Button>Spela igen</Button>
			</Link>
			{/* <Link to="/highscore">
				<Button>Se topplista</Button>
			</Link> */}
		</EndGameContainer>
	);
	} else {
		return <Highscore/>
	}

};
