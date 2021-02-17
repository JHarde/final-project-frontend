import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	accessToken: localStorage.accessToken || null,
	userId: localStorage.userId || 0,
	score: localStorage.score || 0,
	userName: localStorage.userName || '',
	completedTasks: localStorage.completedTasks || [],
};

export const user = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setAccessToken: (store, action) => {
			const { accessToken } = action.payload;
			store.accessToken = accessToken;
			localStorage.setItem('accessToken', accessToken);
		},
		setScore: (store, action) => {
			const {score}  = action.payload;
			store.score = score;
			localStorage.setItem('score', score);
		},
		setUserId: (store, action) => {
			const { userId } = action.payload;
			store.userId = userId;
			localStorage.setItem('userId', userId);
		},
		setUserName: (store, action) => {
			const { userName } = action.payload;
			store.userName = userName;
			localStorage.setItem('userName', userName);
		},
		setCompletedTasks: (store, action) => {
			const completedTasks = action.payload;
			store.completedTasks = completedTasks;
			localStorage.setItem('completedTask', completedTasks)
		},
		logOut: (store, action) => {
			store.userId = 0;
			store.accessToken = null;
			store.score = 0;
			store.userName = '';
			localStorage.removeItem('userId');
			localStorage.removeItem('accessToken');
			localStorage.removeItem('userName');
		},
	},
});

export const postScore = (userId, scoreNumber, task) => {
	return (dispatch) => {
		fetch('https://environmental-kids-game.herokuapp.com/userscore', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ userId: userId, scoreNumber: scoreNumber, task: task }),
		})
			.then((res) => res.json())
			.then((scoreResponse) => {
				dispatch(user.actions.setScore(scoreResponse));
				dispatch(user.actions.setCompletedTasks(scoreResponse.completedTasks));
			});
	};
};
