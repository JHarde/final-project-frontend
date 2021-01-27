import React, { useState } from "react";
import { useSelector } from "react-redux";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import { DragAndDropContainer } from "components/DragAndDropContainer";
import { CompletedTask } from "components/CompletedTask";

export const Task2 = () => {
  // const handleOnClick = (answer) => {
  //   answer === question.correctAnswer[0]
  //     ? setIsCorrect(true)
  //     : setIsCorrect(false);
  //   setAnswer(answer);
  //Send answer to redux and/or backend
  // };

  return (
    <DndProvider backend={HTML5Backend}>
      <DragAndDropContainer />
    </DndProvider>
  );
};
