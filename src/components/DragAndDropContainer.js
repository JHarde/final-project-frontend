import React, { useState, useCallback } from 'react';
import update from 'immutability-helper';
import { useDispatch, useSelector } from 'react-redux';

import { CompletedTask } from 'components/CompletedTask';
import { Box } from 'components/Box';
import { Dustbin } from 'components/Dustbin';
import { HamburgerMenu } from 'components/HamburgerMenu';

import { game } from 'reducers/game';
import { postScore } from 'reducers/user';

import {
	TaskContainer,
	TrashContainer,
	Button,
	DustbinContainer,
	TaskHeader,
	TaskParagraph,
} from 'components/StyledComponents';

export const DragAndDropContainer = () => {
	const dispatch = useDispatch();
	const question = useSelector((store) => store.game.questions[2]);
	const completedTasks = useSelector((store) => store.game.completedTasks)
	const guestScore = useSelector((store) => store.game.guestScore);
	const accessToken = useSelector((store) => store.user.accessToken);
	const userId = useSelector((store) => store.user.userId);

	const trash = question.answers;
	const trashcans = question.correctAnswer;

	const [answer, setAnswer] = useState();
	const [isCorrect, setIsCorrect] = useState(false);
	const [dustbins, setDustbins] = useState(trashcans);
	const [boxes] = useState(trash);
	const [droppedBoxNames, setDroppedBoxNames] = useState([]);

	function isDropped(boxName) {
		return droppedBoxNames.indexOf(boxName) > -1;
	}

	const handleDrop = useCallback(
		(index, item) => {
			const { name } = item;
			setDroppedBoxNames(
				update(droppedBoxNames, name ? { $push: [name] } : { $push: [] })
			);
			setDustbins(
				update(dustbins, {
					[index]: {
						lastDroppeditem: {
							$set: item,
						},
					},
				})
			);
		},
		[droppedBoxNames, dustbins]
	);

	const handleOnClick = () => {
		if (droppedBoxNames.length === 10) {
			setIsCorrect(true);
			if (accessToken) {
				dispatch(postScore(userId, 1));
			} else if (!completedTasks.includes("Task2")){
				dispatch(game.actions.setGuestScore(guestScore + 1));
				dispatch(game.actions.setCompletedTasks("Task2"));
			}
		} else {
			setIsCorrect(false);
		}
		setAnswer(droppedBoxNames);
	};

	return (
		<>
			{!answer && (
				<TaskContainer>
					<HamburgerMenu />
					<div>
						<TaskHeader>{question.question}</TaskHeader>
						<TaskParagraph>Lägg skräpet i rätt behållare</TaskParagraph>
					</div>
					<TrashContainer>
						{boxes.map(({ name, type }, index) => (
							<Box
								name={name}
								type={type}
								isDropped={isDropped(name)}
								key={index}
							/>
						))}
					</TrashContainer>
					<DustbinContainer>
						{dustbins.map(({ accepts, lastDroppedItem, image }, index) => (
							<Dustbin
								accept={accepts}
								lastDroppedItem={lastDroppedItem}
								onDrop={(item) => handleDrop(index, item)}
								key={index}
								image={image}
							/>
						))}
					</DustbinContainer>

					<Button type="button" onClick={() => handleOnClick()}>
						Klar
					</Button>
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
