import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Container } from "components/StyledComponents";
import { fetchHighscore, postHighscore } from "reducers/game";

export const EndGame = () => {
  const dispatch = useDispatch();
  const userScore = useSelector((store) => store.game.userScore);
  const [avatarName, setAvatarName] = useState("");

  const sendScore = (event) => {
    // dispatch(postHighscore(avatarName, userScore));
    fetch("https://environmental-kids-game.herokuapp.com/highscore", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: avatarName, score: userScore }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      });

    event.preventDefault();
  };

  return (
    <Container>
      <h1>Antal rätt {userScore}</h1>
      <p>Vill du vara med på topplistan?</p>
      <form>
        <label>
          {" "}
          Vad heter din Avatar?
          <input
            type="text"
            value={avatarName}
            onChange={(event) => setAvatarName(event.target.value)}
            placeholder="Avatar"
            maxLength="20"
          />
        </label>
        <button type="submit" onClick={sendScore}>
          Skicka till topplista
        </button>
      </form>
      <Link to="/">
        {" "}
        {/* Nollställa state/redux? */}
        <button>Spela igen</button>
      </Link>
      <Link to="/highscore">
        <button>Se topplista</button>
      </Link>
    </Container>
  );
};
