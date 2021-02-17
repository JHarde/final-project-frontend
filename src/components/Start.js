import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

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
			<Image src={Earth_Happy} alt="Happy Earth" />
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
