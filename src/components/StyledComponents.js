import styled from 'styled-components';

const blue = '#223A59';
const darkBlue = '#0B1D34';
const green = '#61BF5E';
const lightGreen = '#ABD99C';
const brown = '#BF6F41';
const red = '#F4A68C';
const beige = '#F2EDE4';

export const Container = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: ${blue};
	height: 100vh;
	color: ${beige};
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
	font-size: 90px;
	margin-bottom: 10px;
	margin-top: 10px;
`;

export const HeaderScoreContainer = styled.div`
	display: flex;
	flex-direction: column;
	background-color: ${lightGreen};
	border-radius: 50%;
	height: 218px;
	width: 218px;
`;

export const Paragraph = styled.p`
	text-align: center;
	color: ${beige};
	font-size: 24px;
`;

export const ErrorParagraph = styled.p`
	color: ${red};
	margin: 0;
	font-size: 16px;
	width: 245px;
	box-sizing: border-box;
	padding: 0 10px;
`;

export const FormLabel = styled.label`
	display: flex;
	flex-direction: column;
	font-size: 20px;
	margin: 20px 0;
`;


export const OrderedList = styled.ol``;

export const List = styled.li`
	color: ${beige};
	border-bottom: 2px dotted ${beige};
	padding: 7px;
	font-size: 24px;

	::marker {
		color: ${red};
	}
`;

export const TotalScore = styled.span`
	color: ${lightGreen};
	float: right;
	margin-left: 10px;
`;

export const HighscoreInput = styled.input`
	border-radius: 20px;
	width: 245px;
	height: 90px;
	border: none;
	margin: 10px;
	box-sizing: border-box;
	padding: 10px;
	font-size: 20px;

	::placeholder {
		font-size: 20px;
	}
`;

export const Button = styled.button`
	width: 245px;
	height: 90px;
	border-radius: 20px;
	margin: 10px;
	border: 0;
	color: ${blue};
	font-family: 'Nunito', sans-serif;
	font-size: 30px;
	font-weight: bold;
	background-color: ${(props) => (props.color === 'red' ? red : lightGreen)};
	box-shadow: 3px 5px ${(props) => (props.color === 'red' ? brown : green)};
`;

export const GameCategory = styled(Button)`
	height: 155px;
	background-color: ${(props) => (props.color === 'red' ? red : lightGreen)};
	box-shadow: 3px 5px ${(props) => (props.color === 'red' ? brown : green)};
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
