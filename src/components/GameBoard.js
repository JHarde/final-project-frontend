import React from "react";
import { Link } from "react-router-dom";

import { Container } from "components/StyledComponents";

export const GameBoard = () => {
  return (
    <Container>
      <h1>Välj Spel</h1>
      <Link to="/task1">
        <button>Spel 1</button>
      </Link>
      <Link to="/task2">
        <button>Spel 2</button>
      </Link>
      <Link to="/task3">
        <button>Spel 3</button>
      </Link>
    </Container>
  );
};
