import React from "react";
import { Link } from "react-router-dom";

import {
  Container,
  SmallerParagraph,
  Header,
  Button,
  Image,
} from "components/StyledComponents";
import Earth_Happy from "../assets/Earth_Happy.svg";


export const CompletedTask = ({ isCorrect, answer, setAnswer, why }) => {
  console.log(isCorrect, answer);
  return (
    <Container>
      <Image src={Earth_Happy} />
      {isCorrect && (
        <>
          <Header>Bra jobbat!</Header>
          <SmallerParagraph>{why}</SmallerParagraph>
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
