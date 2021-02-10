import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { HamburgerMenu } from './HamburgerMenu';

import { fetchHighscore } from 'reducers/game';

import {
	Header,
	List,
	TotalScore,
	OrderedList,
	Button,
	FirstPlaceCirkel,
	FirstPlaceScore,
	HeaderScore,
	FirstPlaceContainer,
	HighscoreContainer,
} from 'components/StyledComponents';

export const Highscore = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchHighscore());
	}, [dispatch]);

	const highscore = useSelector((store) => store.game.highscore);
	const slicedHighscore = highscore.slice(1, 6);
	const firstPlace = highscore[0];

	return (
		<HighscoreContainer>
			<HamburgerMenu />
			<FirstPlaceContainer>
				<FirstPlaceCirkel>
					<HeaderScore style={{ fontSize: 48 }}>1</HeaderScore>
				</FirstPlaceCirkel>
				{firstPlace && (
					<>
						<Header style={{ margin: 5 }}>{firstPlace.name}</Header>
						<FirstPlaceScore>{firstPlace.score}p</FirstPlaceScore>
					</>
				)}
			</FirstPlaceContainer>

			<OrderedList start="2">
				{slicedHighscore.map((score, index) => {
					return (
						<List key={index}>
							{score.name} <TotalScore>{score.score}p</TotalScore>
						</List>
					);
				})}
			</OrderedList>
			<Link to="/gameboard">
				<Button>Spela igen</Button>
			</Link>
		</HighscoreContainer>
	);
};
