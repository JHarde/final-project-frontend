import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import "@lottiefiles/lottie-player";

import { HamburgerMenu } from './HamburgerMenu';

import { fetchQuestions } from 'reducers/game';

import {
	Container,
	Button,
	Title,
	Paragraph,
	Image,
	StyledLink,
	DesktopLogin,
	StartButtonContainer,
	LottieContainer
} from 'components/StyledComponents';

import Earth_Happy from '../assets/Earth_Happy.svg';

export const Start = () => {
	const dispatch = useDispatch();
	const startGame = () => {
		dispatch(fetchQuestions());
	};

	return (
		<Container role="main">
			<HamburgerMenu />
			{/* <Image src={Earth_Happy} alt="Happy Earth" /> */}
			<LottieContainer>
				<lottie-player
					autoplay
					loop
					mode="normal"
					src='https://assets8.lottiefiles.com/packages/lf20_bin199x5.json'
					style={{
					display: 'flex',
					justifyContent: 'center',
					width: '90%'
					}}>
				</lottie-player>
			</LottieContainer>

			<DesktopLogin>
				<Title>Klimatspelet</Title>
				<Paragraph>Ett litet spel om klimat och miljö</Paragraph>
				<StartButtonContainer>
					<Link to="/login">
						<Button>Logga in</Button>
					</Link>
					<Link to="/gameboard">
						<Button onClick={startGame}>Spela som gäst</Button>
					</Link>
				</StartButtonContainer>

				<StyledLink to="/signup">Skapa nytt konto</StyledLink>
			</DesktopLogin>
		</Container>
	);
};
