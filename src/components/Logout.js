import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { user } from 'reducers/user';

import { Button, TextButton } from 'components/StyledComponents';

export const Logout = ({ button }) => {
	const history = useHistory();
	const dispatch = useDispatch();
	const userId = useSelector((store) => store.user.userId);
	const LOGOUT_URL = 'https://environmental-kids-game.herokuapp.com/logout';

	const handleLogout = () => {
		fetch(LOGOUT_URL, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ userId: userId }),
		})
			.then((res) => res.json())
			.then((json) => {
				dispatch(user.actions.logOut());
				history.push('/');
			});
	};

	if (button) {
		return (
			<Button color="red" onClick={handleLogout}>
				Logga ut
			</Button>
		);
	} else {
		return <TextButton onClick={handleLogout}>Logga ut</TextButton>;
	}
};
