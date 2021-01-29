import React from "react";
import { Link } from "react-router-dom";

import {
  Container,
  Paragraph,
  Header,
  Button,
} from "components/StyledComponents";

export const CompletedTask = ({ isCorrect, answer, setAnswer, why }) => {
  console.log(isCorrect, answer);
  return (
    <Container>
      {isCorrect && (
        <>
          <Header>Bra jobbat!</Header>
          <Paragraph>{why}</Paragraph>
        </>
      )}

      {!isCorrect && (
        <>
          <Header>Försök igen</Header>
          <Button color="red" onClick={() => setAnswer("")}>
            Försök igen
          </Button>
        </>
      )}

      <Link to="/gameboard">
        <Button>Fortsätt spela</Button>
      </Link>
      <Link to="/endgame">
        <Button color="red">Sluta spela</Button>
      </Link>
    </Container>
  );
};
