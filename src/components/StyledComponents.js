import styled from "styled-components";

const blue = "#223A59";
const darkBlue = "#0B1D34";
const green = "#61BF5E";
const lightGreen = "#ABD99C";
const brown = "#BF6F41";
const red = "#F4A68C";
const beige = "#F2EDE4";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${blue};
  height: 100vh;
`;

export const TaskContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${beige};
  height: 100vh;
  text-align: center;
  color: ${blue};
`;

export const EndGameContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${blue};
  height: 100vh;
  text-align: center;
  color: ${beige};
`;

export const Header = styled.h1`
  color: ${beige};
`;

export const Title = styled(Header)`
  font-weight: 900;
  font-size: 42px;
`;

export const HeaderScore = styled.h1`
  font-size: 40px;
`;

export const Paragraph = styled.p`
  text-align: center;
  color: ${beige};
`;

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
`;

export const OrderedList = styled.ol``;

export const List = styled.li`
  color: ${beige};

  ::marker {
    color: ${red};
  }
`;

export const TotalScore = styled.span`
  color: ${lightGreen};
`;

export const Button = styled.button`
  width: 245px;
  height: 90px;
  border-radius: 20px;
  margin: 10px;
  border: 0;
  color: ${blue};
  font-family: "Nunito", sans-serif;
  font-size: 30px;
  font-weight: bold;
  background-color: ${(props) => (props.color === "red" ? red : lightGreen)};
  box-shadow: 3px 5px ${(props) => (props.color === "red" ? brown : green)};
`;

export const GameCategory = styled(Button)`
  height: 155px;
  background-color: ${(props) => (props.color === "red" ? red : lightGreen)};
  box-shadow: 3px 5px ${(props) => (props.color === "red" ? brown : green)};
`;

export const TaskButton = styled(Button)`
  background-color: ${blue};
  color: ${beige};
  box-shadow: 3px 5px ${darkBlue};
  font-size: 23px;
  width: 265px;
`;

export const Image = styled.img``;

export const Trash = styled.div`
  background-color: ${blue};
  color: ${beige};
  padding: 10px;
  border-radius: 20px;
  margin: 10px;
`;

export const TrashContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;
