import React, { useState } from "react";
import { useSelector } from "react-redux";

import { Highscore } from "components/Highscore";
import { Logout } from "components/Logout";
import { HamburgerMenu } from "./HamburgerMenu";

import {
  Header,
  EndGameContainer,
  HighscoreLabel,
  HeaderScore,
  Button,
  Input,
  HeaderScoreContainer,
  ScoreParagraph,
  ErrorParagraph,
} from "components/StyledComponents";

export const EndGame = () => {
  const guestScore = useSelector((store) => store.game.guestScore);
  const accessToken = useSelector((store) => store.user.accessToken);
  const score = useSelector((store) => store.user.score);
  const userName = useSelector((store) => store.user.userName);

  const [avatarName, setAvatarName] = useState("");
  const [isSent, setIsSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const sendScore = (event) => {
    if (avatarName || accessToken) {
      fetch("https://environmental-kids-game.herokuapp.com/highscore", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: accessToken ? userName : avatarName,
          score: accessToken ? score : guestScore,
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          setIsSent(true);
          setErrorMessage("");
        });
    } else {
      setErrorMessage("Skriv in ett namn i rutan");
    }
    event.preventDefault();
  };
  if (!isSent) {
    return (
      <EndGameContainer>
        <HamburgerMenu />
        <HeaderScoreContainer>
          <HeaderScore>{accessToken ? score : guestScore}</HeaderScore>
          <ScoreParagraph>poäng</ScoreParagraph>
        </HeaderScoreContainer>

        <Header>Vill du vara med på topplistan?</Header>
        <form>
          {!accessToken && (
            <HighscoreLabel>
              Vad heter din Avatar?
              <Input
                type="text"
                value={avatarName}
                onChange={(event) => setAvatarName(event.target.value)}
                placeholder="Skriv ett namn här"
                maxLength="20"
                minLength="2"
                required
              />
              <ErrorParagraph>{errorMessage}</ErrorParagraph>
            </HighscoreLabel>
          )}
          <Button type="submit" onClick={sendScore} style={{ fontSize: 27 }}>
            Skicka till topplista
          </Button>
        </form>
        {accessToken && <Logout button />}
      </EndGameContainer>
    );
  } else {
    return <Highscore />;
  }
};
