import React from "react";
import { Link } from "react-router-dom";

import { Container, GameCategory } from "components/StyledComponents";

export const GameBoard = () => {
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
