import React from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import { HamburgerMenu } from './HamburgerMenu';

import {
	Container,
	SmallerParagraph,
	Header,
	Button,
	Image,
	CompletedTaskButtonContainer,
} from 'components/StyledComponents';

import Earth_Happy from '../assets/Earth_Happy.svg';

export const CompletedTask = ({ isCorrect, answer, setAnswer, why }) => {
	const isDesktopOrLapTop = useMediaQuery({ query: '(min-width: 769px)' });
	const isMobileOrTablet = useMediaQuery({ query: '(max-width: 768px)' });

	return (
		<Container>
			<HamburgerMenu />
			<Image src={Earth_Happy} />

			<CompletedTaskButtonContainer>
				{isCorrect && (
					<>
						<Header>Bra jobbat!</Header>
						<SmallerParagraph>{why}</SmallerParagraph>
					</>
				)}

				{!isCorrect && (
					<>
						<Header>Försök igen</Header>
						<Button color="red" onClick={() => setAnswer('')}>
							Försök igen
						</Button>
					</>
				)}

				<Link to="/gameboard">
					<Button>Fortsätt spela</Button>
				</Link>
				<Link to="/endgame">
					<Button color="red">Sluta spela</Button>
				</Link>
			</CompletedTaskButtonContainer>
		</Container>
	);
};
