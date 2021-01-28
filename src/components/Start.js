import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import Earth_3 from "../assets/Earth_3.svg";

import {
  Container,
  Button,
  Title,
  Paragraph,
  Image,
} from "components/StyledComponents";
import { fetchQuestions } from "reducers/game";

export const Start = () => {
  const dispatch = useDispatch();
  const startGame = () => {
    dispatch(fetchQuestions());
  };

  return (
    <Container>
      <Image src={Earth_3} />
      <Title>Klimatpelet</Title>
      <Paragraph>Superkort information om spelet och klimatet</Paragraph>

      {/* Fix semantic/accessibility */}
      <Link to="/gameboard">
        <Button onClick={startGame}>Börja spela</Button>
      </Link>
      <Link to="/highscore">
        <Button>Se topplista</Button>
      </Link>
    </Container>
  );
};
