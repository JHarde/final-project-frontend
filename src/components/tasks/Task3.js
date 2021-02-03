import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { sortableContainer, sortableElement } from 'react-sortable-hoc';
import arrayMove from 'array-move';

<<<<<<< HEAD
import { Vehicles } from 'components/Vehicles';
import { CompletedTask } from 'components/CompletedTask';
import { game } from 'reducers/game';
import { TaskContainer } from 'components/StyledComponents';
=======
import { Vehicles } from "components/Vehicles";
import { CompletedTask } from "components/CompletedTask";
import { game } from "reducers/game";
import { TaskContainer, Button } from "components/StyledComponents";
>>>>>>> styling--2

export const Task3 = () => {
	const dispatch = useDispatch();

	const score = useSelector((store) => store.game.userScore);

	const question = useSelector((store) => store.game.questions[1]);

	const [answer, setAnswer] = useState();
	const [isCorrect, setIsCorrect] = useState(false);

	const answersArray = question.answers;
	const correctAnswersArray = question.correctAnswer;

	const vehicles = answersArray.map(({ answer }) => answer);
	const [vehicle, setVehicle] = useState(vehicles);

	const SortableVehiclesContainer = sortableContainer(({ children }) => (
		<div>{children}</div>
	));

	const SortableVehicle = sortableElement(({ vehicle }) => (
		<Vehicles key={vehicle} vehicle={vehicle} />
	));

	const onSortEnd = ({ oldIndex, newIndex }) =>
		setVehicle(arrayMove(vehicle, oldIndex, newIndex));

	const handleOnClick = (answer) => {
		const equals = (a, b) => JSON.stringify(a) === JSON.stringify(b);
		console.log(equals(vehicle, correctAnswersArray));

		if (equals(vehicle, correctAnswersArray)) {
			setIsCorrect(true);
			dispatch(game.actions.setUserScore(score + 1));
		} else {
			setIsCorrect(false);
		}
		setAnswer(vehicle);
		//Send answer to redux and/or backend
	};

<<<<<<< HEAD
	return (
		<>
			{!answer && (
				<TaskContainer>
					<h1>{question.question}</h1>

					<div>
						<SortableVehiclesContainer axis="y" onSortEnd={onSortEnd}>
							{vehicle.map((item, index) => (
								<SortableVehicle key={item} vehicle={item} index={index} />
							))}
						</SortableVehiclesContainer>
						<button type="button" onClick={() => handleOnClick()}>
							Klar
						</button>
					</div>
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
=======
  return (
    <>
      {!answer && (
        <TaskContainer>
          <h1>{question.question}</h1>
          <div>
            <SortableVehiclesContainer axis="y" onSortEnd={onSortEnd}>
              {vehicle.map((item, index) => (
                <SortableVehicle key={item} vehicle={item} index={index} />
              ))}
            </SortableVehiclesContainer>
            <Button type="button" onClick={() => handleOnClick()}>
              Klar
            </Button>
          </div>
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
>>>>>>> styling--2
};
