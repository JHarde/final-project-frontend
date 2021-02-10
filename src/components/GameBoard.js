import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';

import { Logout } from 'components/Logout';
import { HamburgerMenu } from './HamburgerMenu';

import { fetchQuestions } from 'reducers/game';

import {
	Container,
	GameCategory,
	Title,
	CategoryImage,
	CategoryText,
} from 'components/StyledComponents';

import WaterDrop from '../assets/WaterDrop.svg';
import Bike from '../assets/Bike_Silhouette.svg';
import Recycle from '../assets/Recycle.svg';

export const GameBoard = () => {
	const dispatch = useDispatch();
	const accessToken = useSelector((store) => store.user.accessToken);

	const isDesktopOrLapTop = useMediaQuery({ query: '(min-width: 769px)' });
	const isMobileOrTablet = useMediaQuery({ query: '(max-width: 768px)' });
	useEffect(() => {
		dispatch(fetchQuestions());
	}, [dispatch]);

	return (
		<>
			{isDesktopOrLapTop && (
				<Container>
					<HamburgerMenu />
					{accessToken && <Logout />}
					<div>
						<Title>Välj Spel</Title>
						<div>
							<Link to="/task1">
								<GameCategory color="beige">
									<CategoryImage src={WaterDrop} alt="Water" />
									<CategoryText>Vatten</CategoryText>
								</GameCategory>
							</Link>
							<Link to="/task2">
								<GameCategory color="red">
									<CategoryImage src={Recycle} alt="Recycle" />
									<CategoryText>Återvinning</CategoryText>
								</GameCategory>
							</Link>
							<Link to="/task3">
								<GameCategory>
									<CategoryImage src={Bike} alt="Bike" />
									<CategoryText>Resande</CategoryText>
								</GameCategory>
							</Link>
						</div>
					</div>
				</Container>
			)}

			{isMobileOrTablet && (
				<Container>
					<HamburgerMenu />
					{accessToken && <Logout />}
					<Title>Välj Spel</Title>
					<Link to="/task1">
						<GameCategory color="beige">
							<CategoryImage src={WaterDrop} alt="Water" />
							<CategoryText>Vatten</CategoryText>
						</GameCategory>
					</Link>
					<Link to="/task2">
						<GameCategory color="red">
							<CategoryImage src={Recycle} alt="Recycle" />
							<CategoryText>Återvinning</CategoryText>
						</GameCategory>
					</Link>
					<Link to="/task3">
						<GameCategory>
							<CategoryImage src={Bike} alt="Bike" />
							<CategoryText>Resande</CategoryText>
						</GameCategory>
					</Link>
				</Container>
			)}
		</>
	);
};
