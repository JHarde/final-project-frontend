import React from 'react';

import {
	ProfileImage,
	ProfileImageContainer,
	AboutUsContainer,
	PersonContainer,
	ProfileText,
	ContactIconsContainer,
} from './StyledComponents';

export const AboutUs = () => {
	return (
		<AboutUsContainer>
			<PersonContainer>
				<ProfileImageContainer>
					<ProfileImage
						src={require('../assets/Cornelia.png')}
						alt="Cornelia"
					/>
				</ProfileImageContainer>
				<h1>Cornelia Ryås</h1>
				<p>Frontend-developer/motion-designer</p>
				<ContactIconsContainer>
					<a
						href="https://www.linkedin.com/in/corneliaryas/"
						target="_blank"
						rel="noopener
						noreferrer">
						<img
							src="https://img.icons8.com/color/48/000000/linkedin.png"
							alt="LinkedIn"
						/>
					</a>
					<a
						href="https://github.com/Corneliaryas"
						target="_blank"
						rel="noopener
						noreferrer">
						<img
							src="https://img.icons8.com/fluent/48/000000/github.png"
							alt="Github"
						/>
					</a>
					<a
						href="https://frontend.corneliaryas.com/"
						target="_blank"
						rel="noopener
						noreferrer">
						<img
							src="https://img.icons8.com/ios/50/000000/webpage.png"
							alt="Portfolio"
						/>
					</a>
				</ContactIconsContainer>
				<ProfileText>
					Cheese on toast airedale the big cheese. Danish fontina cheesy grin
					airedale danish fontina taleggio the big cheese macaroni cheese
					port-salut. Edam fromage lancashire feta caerphilly everyone loves
					chalk and cheese brie. Red leicester parmesan cheese and biscuits
					cheesy feet blue castello cheesecake fromage frais smelly cheese.
				</ProfileText>
			</PersonContainer>
			<PersonContainer>
				<ProfileImageContainer>
					<ProfileImage src={require('../assets/Joel.png')} alt="Joel" />
				</ProfileImageContainer>
				<h1>Joel Harde</h1> <p>Frontend-developer/lärare</p>
				<ContactIconsContainer>
					<a
						href="https://www.linkedin.com/in/joelharde/"
						target="_blank"
						rel="noopener
						noreferrer">
						<img
							src="https://img.icons8.com/color/48/000000/linkedin.png"
							alt="LinkedIn"
						/>
					</a>
					<a
						href="https://github.com/JHarde"
						target="_blank"
						rel="noopener
						noreferrer">
						<img
							src="https://img.icons8.com/fluent/48/000000/github.png"
							alt="Github"
						/>
					</a>
					<a
						href="https://joelhardeportfolio.netlify.app/"
						target="_blank"
						rel="noopener
						noreferrer">
						<img
							src="https://img.icons8.com/ios/50/000000/webpage.png"
							alt="Portfolio"
						/>
					</a>
				</ContactIconsContainer>
				<ProfileText>
					Cheese on toast airedale the big cheese. Danish fontina cheesy grin
					airedale danish fontina taleggio the big cheese macaroni cheese
					port-salut. Edam fromage lancashire feta caerphilly everyone loves
					chalk and cheese brie. Red leicester parmesan cheese and biscuits
					cheesy feet blue castello cheesecake fromage frais smelly cheese.
				</ProfileText>
			</PersonContainer>
			<PersonContainer>
				<ProfileImageContainer>
					<ProfileImage
						src={require('../assets/Lillemor.png')}
						alt="Lillemor"
					/>
				</ProfileImageContainer>
				<h1>Lillemor Eriksson</h1>
				<p>Frontend-developer/entreprenör</p>
				<ContactIconsContainer>
					<a
						href="https://www.linkedin.com/in/lillemor-eriksson/"
						target="_blank"
						rel="noopener
						noreferrer">
						<img
							src="https://img.icons8.com/color/48/000000/linkedin.png"
							alt="LinkedIn"
						/>
					</a>
					<a
						href="https://github.com/LillanEriksson"
						target="_blank"
						rel="noopener
						noreferrer">
						<img
							src="https://img.icons8.com/fluent/48/000000/github.png"
							alt="Github"
						/>
					</a>
					<a
						href="https://www.lillemoreriksson.com/"
						target="_blank"
						rel="noopener
						noreferrer">
						<img
							src="https://img.icons8.com/ios/50/000000/webpage.png"
							alt="Portfolio"
						/>
					</a>
				</ContactIconsContainer>
				<ProfileText>
					Cheese on toast airedale the big cheese. Danish fontina cheesy grin
					airedale danish fontina taleggio the big cheese macaroni cheese
					port-salut. Edam fromage lancashire feta caerphilly everyone loves
					chalk and cheese brie. Red leicester parmesan cheese and biscuits
					cheesy feet blue castello cheesecake fromage frais smelly cheese.
				</ProfileText>
			</PersonContainer>
			<div>
				<a href="https://icons8.com/icon/13930/linkedin">
					LinkedIn icon by Icons8
				</a>
				<a href="https://icons8.com/icon/AZOZNnY73haj/github">
					GitHub icon by Icons8
				</a>
			</div>
		</AboutUsContainer>
	);
};
