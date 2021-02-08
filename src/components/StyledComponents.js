import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
	min-height: 100vh;
	color: ${beige};
	box-sizing: border-box;
	padding: 20px;

	@media (min-width: 768px) {
		flex-direction: row;
	}
`;

export const DesktopLogin = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 50px;
	margin: 100px;
`;

export const TaskContainer = styled(Container)`
	background-color: ${beige};
	color: ${blue};
	justify-content: space-between;

	@media (min-width: 768px) {
		flex-direction: column;
		justify-content: center;
	}

`;

export const EndGameContainer = styled(Container)`
	text-align: center;
	color: ${beige};
	display: flex;
	flex-direction: column;
`;

export const HighscoreContainer = styled(Container)`
	display: flex;
	flex-direction: column;

	@media (min-width: 768px) {
		padding: 100px;
	}

	@media (min-width: 1024px) {
		padding: 300px;
	}
`;

export const Header = styled.h1`
	color: ${beige};
	text-align: center;
	font-size: 30px;
`;

export const TaskHeader = styled(Header)`
	color: ${blue};
	margin: 15px;
`;

export const Title = styled(Header)`
	font-weight: 900;
	font-size: 42px;
	margin-bottom: 10px;
`;

export const CompletedTaskButtonContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding: 75px;
	justify-content: center;
	align-items: center;
`;

export const HeaderScore = styled.h1`
	font-size: 100px;
	margin: 0;
	padding: 0;
	color: ${blue};
	font-weight: 900;
	line-height: 90px;
`;

export const HeaderScoreContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
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

export const TaskParagraph = styled(Paragraph)`
	color: ${blue};
	margin: 5px;
`;

export const SmallerParagraph = styled(Paragraph)`
	font-size: 20px;
	margin-top: 0;
`;

export const ScoreParagraph = styled.span`
	margin: 0;
	color: ${blue};
	font-weight: bold;
	font-size: 30px;
`;

export const ErrorParagraph = styled.p`
	color: ${red};
	margin: 0;
	font-size: 16px;
	width: 245px;
	box-sizing: border-box;
	padding: 0 10px;
`;

export const StyledLink = styled(Link)`
	color: ${beige};
	font-weight: bold;
	text-decoration: none;
	font-size: 24px;
	margin: 10px;
`;

export const TextButton = styled.button`
	background-color: ${blue};
	color: ${beige};
	font-size: 20px;
	border: none;
	font-family: 'Nunito', sans-serif;
	font-weight: bold;
`;

export const FormLabel = styled.label`
	display: flex;
	flex-direction: column;
	font-size: 20px;
	margin: 20px 0;
`;

export const HighscoreLabel = styled(FormLabel)`
	margin: 2px;
`;

export const OrderedList = styled.ol`
	width: 90%;
	box-sizing: border-box;
	font-weight: bold;
	margin: 30px;
`;

export const List = styled.li`
	color: ${beige};
	border-bottom: 0.2px solid #0b1d34;
	padding: 15px;
	font-size: 24px;

	::marker {
		color: ${red};
		font-size: 18px;
	}
`;

export const TotalScore = styled.span`
	color: ${lightGreen};
	float: right;
	margin-left: 10px;
	font-size: 20px;
	font-weight: bold;
`;

export const FirstPlaceScore = styled(TotalScore)`
	font-size: 24px;
`;

export const Input = styled.input`
	border-radius: 20px;
	width: 272px;
	height: 90px;
	border: none;
	margin: 10px;
	box-sizing: border-box;
	padding: 10px;
	font-size: 26px;
	background-color: ${beige};

	::placeholder {
		font-size: 20px;
		color: #bdb29e;
	}
`;

export const Button = styled.button`
	width: 272px;
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
	background-color: ${(props) => (props.color === 'red' ? red : props.color === 'beige' ? beige : lightGreen)};
	box-shadow: 3px 5px ${(props) => (props.color === 'red' ? brown : props.color === 'beige' ? '#CDC5B5' : green)};
`;

export const TaskButton = styled(Button)`
	background-color: ${blue};
	color: ${beige};
	box-shadow: 3px 5px ${darkBlue};
	font-size: 23px;
	width: 265px;
`;

export const SmallButton = styled(Button)`
	width: 190px;
	height: 60px;
	font-size: 27px;
`;

export const Image = styled.img`
	width: 75%;

	@media (min-width: 768px) {
		width: 30%;
	}
`;

export const Task1Image = styled.img`
	height: 300px;
`;

export const VehicleImage = styled.img`
	width: 135px;
`;

export const VehicleContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const Trash = styled.div`
	background-color: ${blue};
	color: ${beige};
	padding: 10px;
	border-radius: 20px;
	margin: 4px;
`;

export const TrashContainer = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;

	@media (min-width: 768px) {
		width: 50%;
		margin: 50px;
	}
`;

export const DustbinContainer = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
`;

export const DustbinImage = styled.img`
	@media (min-width: 768px) {
		height: 150px;
		margin: 10px;
	}
`;

export const FirstPlaceCirkel = styled.div`
	width: 110px;
	height: 110px;
	border-radius: 50%;
	background-color: ${red};
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 10px;
`;

export const FirstPlaceContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;
