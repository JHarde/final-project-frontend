import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { Logout } from './Logout';

import {
	HamburgerButton,
	MenuContainer,
	MenuLink,
	MenuText,
} from './StyledComponents';

export const HamburgerMenu = () => {
	const accessToken = useSelector((store) => store.user.accessToken);

	const [activeMenu, setActiveMenu] = useState(false);

	return (
		<>
			<HamburgerButton onClick={() => setActiveMenu(!activeMenu)}>
				<div></div>
				<div></div>
				<div></div>
			</HamburgerButton>
			{activeMenu && (
				<MenuContainer>
					<MenuLink to="/">
						<MenuText>Start</MenuText>
					</MenuLink>

					<MenuLink to="/highscore">
						<MenuText>Highscore</MenuText>
					</MenuLink>

					<MenuLink to="/aboutus">
						<MenuText>Om oss</MenuText>
					</MenuLink>

					{accessToken ? (
						<Logout />
					) : (
						<>
							<MenuLink to="/login">
								<MenuText>Login</MenuText>
							</MenuLink>
							<MenuLink to="/signup">
								<MenuText>Skapa nytt konto</MenuText>
							</MenuLink>
						</>
					)}
				</MenuContainer>
			)}
		</>
	);
};
