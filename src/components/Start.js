import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import lottie from  'lottie-web'

import animationData from '../lotties/Earth_Happy_loop.json'

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

	const isDesktopOrLapTop = useMediaQuery({ query: '(min-width: 769px)' });
	const isMobileOrTablet = useMediaQuery({ query: '(max-width: 768px)' });

	lottie.loadAnimation({
		container: this.animBox,
		renderer: 'svg',
		loop: true,
		autoplay: true,
		animationData: animationData
	});

	return (
		<>
			{isMobileOrTablet && (
				<Container role="main">
					<HamburgerMenu />
					<Image src={Earth_Happy} alt="Happy Earth" />
					<Title>Klimatspelet</Title>
					<Paragraph>Superkort information om spelet och klimatet</Paragraph>
					<Link to="/login">
						<Button>Logga in</Button>
					</Link>
					<Link to="/gameboard">
						<Button onClick={startGame}>Spela som gäst</Button>
					</Link>
					<StyledLink to="/signup">Skapa nytt konto</StyledLink>
				</Container>
			)}
			{isDesktopOrLapTop && (
				<Container role="main">
					<HamburgerMenu />
					<div 
						style={{width: 200, height: 200}}
						ref={ref => this.animBox = ref}>
					</div>
					{/* <Image src={Earth_Happy} alt="Happy Earth" /> */}
					<DesktopLogin>
						<Title>Klimatspelet</Title>
						<Paragraph>Superkort information om spelet och klimatet</Paragraph>
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
			)}
		</>
	);
};
