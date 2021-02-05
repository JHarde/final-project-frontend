import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';

import { Container, GameCategory, Title } from 'components/StyledComponents';
import { fetchQuestions } from 'reducers/game';
import { Logout } from 'components/Logout';

export const GameBoard = () => {
	const dispatch = useDispatch();
	const accessToken = useSelector((store) => store.user.accessToken);

	const isDesktopOrLapTop = useMediaQuery({ query: '(min-width: 769px)' });
	const isMobileOrTablet = useMediaQuery({ query: '(max-width: 768px)' });

	useEffect(() => {
		dispatch(fetchQuestions());
	}, []);

	return (
		<>
			{isDesktopOrLapTop && (
				<Container>
					{accessToken && <Logout />}
					<div>
						<Title>Välj Spel</Title>
						<div>
							<Link to="/task1">
								<GameCategory>Spel 1</GameCategory>
							</Link>
							<Link to="/task2">
								<GameCategory color="red">Spel 2</GameCategory>
							</Link>
							<Link to="/task3">
								<GameCategory>Spel 3</GameCategory>
							</Link>
						</div>
					</div>
				</Container>
			)}

			{isMobileOrTablet && (
				<Container>
					{accessToken && <Logout />}
					<Title>Välj Spel</Title>
					<Link to="/task1">
						<GameCategory>Spel 1</GameCategory>
					</Link>
					<Link to="/task2">
						<GameCategory color="red">Spel 2</GameCategory>
					</Link>
					<Link to="/task3">
						<GameCategory>Spel 3</GameCategory>
					</Link>
				</Container>
			)}
		</>
	);
};
