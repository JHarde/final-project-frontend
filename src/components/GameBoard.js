import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { Container, GameCategory } from "components/StyledComponents";
import { fetchQuestions } from "reducers/game";

export const GameBoard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchQuestions());
  }, []);
  
  return (
    <Container>
      <h1>Välj Spel</h1>
      <Link to="/task1">
        <GameCategory>Spel 1</GameCategory>
      </Link>
      <Link to="/task2">
        <GameCategory color="red">Spel 2</GameCategory>
      </Link>
      <Link to="/task3">
        <GameCategory>Spel 3</GameCategory>
      </Link>
    </Container>
  );
};
