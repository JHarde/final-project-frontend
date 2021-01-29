import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  Container,
  Header,
  List,
  TotalScore,
  OrderedList,
} from "components/StyledComponents";
import { fetchHighscore } from "reducers/game";

export const Highscore = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHighscore());
  }, []);

  const highscore = useSelector((store) => store.game.highscore);
  return (
    <Container>
      <Header>Highscore</Header>
      <OrderedList>
        {highscore.map((score, index) => {
          return (
            <List key={index}>
              {score.name} <TotalScore>{score.score}</TotalScore>
            </List>
          );
        })}
      </OrderedList>
    </Container>
  );
};
