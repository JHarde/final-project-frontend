import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { HamburgerIcon } from './HamburgerIcon';

export const HamburgerMenu = () => {
	const [activeMenu, setActiveMenu] = useState(false);

	return (
		<>
			<HamburgerButton onClick={() => setActiveMenu(!activeMenu)}>
				<div></div>
				<div></div>
				<div></div>
			</HamburgerButton>
			{activeMenu && (
				<HamburgerMenuContainer>
					<Link to="/">Start </Link>

					<Link to="/highscore">Highscore</Link>

					<Link to="/aboutus">Om oss</Link>
				</HamburgerMenuContainer>
			)}
		</>
	);
};

const HamburgerMenuContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: #f2ede4;
	position: absolute;
	width: 100%;
	height: 100vh;
`;

//den röda färgen på div'arna

const HamburgerButton = styled.button`
	position: absolute;
	top: 2%;
	left: 5%;
	background-color: transparent;
	border: none;
	width: 60px;
	height: 50px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	z-index: 1;

	div {
		width: 50px;
		height: 7px;
		background-color: white;
		margin: 5px;
		border-radius: 30px;
	}
`;
