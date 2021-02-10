import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { CompletedTask } from 'components/CompletedTask';
import { HamburgerMenu } from '../HamburgerMenu';

import { game } from 'reducers/game';
import { postScore } from 'reducers/user';

import {
	TaskContainer,
	TaskButton,
	TaskHeader,
	Task1Image,
} from 'components/StyledComponents';

import Tandborstning from '../../assets/Tandborstning.svg';

export const Task1 = () => {
	const dispatch = useDispatch();
	const question = useSelector((store) => store.game.questions[0]);
	const guestScore = useSelector((store) => store.game.guestScore);
	const accessToken = useSelector((store) => store.user.accessToken);
	const userId = useSelector((store) => store.user.userId);
	const [answer, setAnswer] = useState();
	const [isCorrect, setIsCorrect] = useState(false);

	const handleOnClick = (answer) => {
		if (answer === question.correctAnswer[0]) {
			setIsCorrect(true);
			if (accessToken) {
				dispatch(postScore(userId, 1));
			} else {
				dispatch(game.actions.setGuestScore(guestScore + 1));
			}
		} else {
			setIsCorrect(false);
		}
		setAnswer(answer);
	};

	return (
		<>
			{!answer && (
				<TaskContainer>
					<HamburgerMenu />
					<Task1Image src={Tandborstning} alt="Toothbrush" />
					<TaskHeader>{question.question}</TaskHeader>
					{question.answers.map((answer) => {
						return (
							<TaskButton
								key={answer.id}
								onClick={() => handleOnClick(answer.id)}>
								{answer.answer}
							</TaskButton>
						);
					})}
				</TaskContainer>
			)}
			{answer && (
				<CompletedTask
					isCorrect={isCorrect}
					answer={answer}
					setAnswer={setAnswer}
					why={question.why}
				/>
			)}
		</>
	);
};
