import React, { useState, useCallback } from "react";
import update from "immutability-helper";
import { useDispatch, useSelector } from "react-redux";

import { Container } from "components/StyledComponents";
import { CompletedTask } from "components/CompletedTask";
import { Box } from "components/Box";
import { Dustbin } from "components/Dustbin";
import { game } from "reducers/game";

const ItemTypes = {
  PLASTIC: "Plast",
  GLASS: "Glas",
  PAPER: "Papper",
  WELLPAPP: "Kartong",
  METAL: "Metall",
};

export const DragAndDropContainer = () => {
  const dispatch = useDispatch();
  const question = useSelector((store) => store.game.questions[2]);
  console.log(question);
  const trash = question.answers;
  const trashcans = question.correctAnswer;
  console.log(`Trash ${trash}`);
  console.log(`Trashcans ${trashcans}`);

  const score = useSelector((store) => store.game.userScore);

  const [answer, setAnswer] = useState();
  const [isCorrect, setIsCorrect] = useState(false);
  const [dustbins, setDustbins] = useState(
    trashcans
    // [
    // { accepts: [ItemTypes.GLASS], lastDroppedItem: null },
    // { accepts: [ItemTypes.PLASTIC], lastDroppedItem: null },
    // { accepts: [ItemTypes.PAPER], lastDroppedItem: null },
    // { accepts: [ItemTypes.WELLPAPP], lastDroppedItem: null },
    // { accepts: [ItemTypes.METAL], lastDroppedItem: null },
    // ]
  );

  //dustbins lastdroppeditem -> push lastdroppeditem to a array for each type

  const [boxes] = useState(
    trash
    // [

    // { name: "Tidning", type: ItemTypes.PAPER },
    // { name: "Konservburk", type: ItemTypes.METAL },
    // { name: "Mjölk-kartong", type: ItemTypes.WELLPAPP },
    // { name: "Syltburk", type: ItemTypes.GLASS },
    // { name: "Plastpåse", type: ItemTypes.PLASTIC },
    // { name: "Glasflaska", type: ItemTypes.GLASS },
    // { name: "Reklamblad", type: ItemTypes.PAPER },
    // { name: "Bubbelplast", type: ItemTypes.PLASTIC },
    // { name: "RisiFrutti-burk", type: ItemTypes.PLASTIC },
    // { name: "RisiFrutti-lock", type: ItemTypes.METAL },
    // ]
  );

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
  // console.log(`Dropped boxes ${droppedBoxNames}`);
  // console.log(`Dustbins ${dustbins}`);

  const handleOnClick = () => {
    if (droppedBoxNames.length === 10) {
      setIsCorrect(true);
      dispatch(game.actions.setUserScore(score + 1));
    } else {
      setIsCorrect(false);
    }
    setAnswer(droppedBoxNames);
    //Send answer to redux and/or backend
  };

  return (
    <>
      {" "}
      {!answer && (
        <Container>
          <div style={{ overflow: "hidden", clear: "both" }}>
            {dustbins.map(({ accepts, lastDroppedItem }, index) => (
              <Dustbin
                accept={accepts}
                lastDroppedItem={lastDroppedItem}
                onDrop={(item) => handleDrop(index, item)}
                key={index}
              />
            ))}
          </div>
          <div style={{ overflow: "hidden", clear: "both" }}>
            {boxes.map(({ name, type }, index) => (
              <Box
                name={name}
                type={type}
                isDropped={isDropped(name)}
                key={index}
              />
            ))}
          </div>
        </Container>
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
