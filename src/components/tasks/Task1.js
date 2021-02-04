import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { TaskContainer, TaskButton, Image, Header, TaskHeader } from "components/StyledComponents";
import { CompletedTask } from "components/CompletedTask";
import { game } from "reducers/game";
import { user } from "reducers/user";
import Tandborstning from "../../assets/Tandborstning.svg"
import { postScore } from "reducers/user";


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
      if(accessToken){
        dispatch(postScore(userId))
      } else {
      dispatch(game.actions.setGuestScore(guestScore + 1));
      }
    } else {
      setIsCorrect(false);
    }
    setAnswer(answer);
    //Send answer to redux and/or backend
  };

  return (
    <>
      {" "}
      {!answer && (
        <TaskContainer>
          <Image src={Tandborstning}/>
          <TaskHeader>{question.question}</TaskHeader>
          {/* <p>{question.description}</p> */}
          {question.answers.map((answer) => {
            return (
              <TaskButton
                key={answer.id}
                onClick={() => handleOnClick(answer.id)}
              >
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
