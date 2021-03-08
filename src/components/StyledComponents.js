import styled from 'styled-components';
import { Link } from 'react-router-dom';
import "@lottiefiles/lottie-player";
import lottiePlayer from '@lottiefiles/lottie-player';


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
		padding: 50px 300px;
	}
`;

export const AboutUsContainer = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	min-height: 100vh;
	background-color: ${beige};
	padding: 50px;

	@media (min-width: 768px) {
		flex-direction: row;
		flex-wrap: wrap;
	}
`;

export const StartButtonContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;

	@media (min-width: 1024px) {
		flex-direction: row;
	}
`;

export const GameButtonContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;

	@media (min-width: 1024px) {
		flex-direction: row;
	}
`;

export const ContactIconsContainer = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 10px;
	width: 50%;
`;

export const PersonContainer = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 10px;
	h1,
	p {
		color: ${darkBlue};
	}

	@media (min-width: 1024px) {
		width: 30%;
	}
`;

export const ProfileImageContainer = styled.div`
	width: 200px;
	height: 200px;
`;

export const CompletedTaskButtonContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding: 75px;
	justify-content: center;
	align-items: center;
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

export const VehicleContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
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

export const MenuContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: rgba(242, 237, 228, 0.9);
	position: absolute;
	top: 0;
	width: 100%;
	min-height: 100vh;
	z-index: 1;
`;

export const Trash = styled.div`
	background-color: ${blue};
	color: ${beige};
	padding: 10px;
	border-radius: 20px;
	margin: 4px;
`;

export const ProfileText = styled.section`
	max-width: 400px;
`;

export const DesktopLogin = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 50px;
	margin: 100px;

	@media (max-width: 768px) {
		margin: 0;
		padding-top: 0;
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

export const CreditsContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	color: ${darkBlue};
	a {
		text-decoration: none;
		color: ${darkBlue};
		&visited {
			color: ${blue};
		}
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

export const CategoryText = styled(Header)`
	margin: 0;
	color: ${blue};
`;

export const HeaderScore = styled.h1`
	font-size: 100px;
	margin: 0;
	padding: 0;
	color: ${blue};
	font-weight: 900;
	line-height: 90px;
`;

export const MenuText = styled.h1`
	font-size: 42px;
	margin: 20px;
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
	max-width: 400px;
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

export const StyledLink = styled(Link)`
	color: ${beige};
	font-weight: bold;
	text-decoration: none;
	font-size: 24px;
	margin: 10px;
`;

export const MenuLink = styled(Link)`
	text-decoration: none;
	color: #0b1d34;

	&visited {
		color: #0b1d34;
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
	box-sizing: border-box;
	padding: 5px;
	background-color: ${(props) =>
		props.color === 'red' ? red : props.color === 'beige' ? beige : lightGreen};
	box-shadow: 3px 5px
		${(props) =>
			props.color === 'red'
				? brown
				: props.color === 'beige'
				? '#CDC5B5'
				: green};
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

export const TextButton = styled.button`
	background-color: ${blue};
	color: ${beige};
	font-size: 20px;
	border: none;
	font-family: 'Nunito', sans-serif;
	font-weight: bold;
`;

export const HamburgerButton = styled.button`
	position: absolute;
	top: 2%;
	left: 5%;
	background-color: transparent;
	border: none;
	width: 60px;
	height: 50px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	z-index: 2;

	div {
		width: 50px;
		height: 7px;
		background-color: #f4a68c;
		margin: 5px;
		border-radius: 30px;
	}
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

export const OrderedList = styled.ol`
	width: 90%;
	box-sizing: border-box;
	font-weight: bold;
	margin: 30px;

	@media (min-width: 1024px) {
		width: 60%;
	}
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

export const Image = styled.img`
	width: 75%;

	@media (min-width: 768px) {
		width: 30%;
	}
`;

export const ProfileImage = styled.img`
	max-width: 100%;
	height: auto;
	object-fit: contain;
	border-radius: 50%;
`;

export const CategoryImage = styled.img`
	width: 60%;
	height: 60%;
`;

export const Task1Image = styled.img`
	height: 300px;
`;

export const VehicleImage = styled.img`
	width: 135px;
`;

export const DustbinImage = styled.img`
	@media (min-width: 768px) {
		height: 150px;
		margin: 10px;
	}
`;

export const LottieContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	z-index: 0;

	@media (min-width: 768px) {
		width: 50%;
	}
`;