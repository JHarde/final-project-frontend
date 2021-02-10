import React from 'react';

import { HamburgerMenu } from './HamburgerMenu';

import {
	ProfileImage,
	ProfileImageContainer,
	AboutUsContainer,
	PersonContainer,
	ProfileText,
	ContactIconsContainer,
	CreditsContainer,
} from './StyledComponents';

export const AboutUs = () => {
	return (
		<AboutUsContainer>
			<HamburgerMenu />
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
						rel="noopener noreferrer">
						<img
							src="https://img.icons8.com/color/48/000000/linkedin.png"
							alt="LinkedIn"
						/>
					</a>
					<a
						href="https://github.com/Corneliaryas"
						target="_blank"
						rel="noopener noreferrer">
						<img
							src="https://img.icons8.com/fluent/48/000000/github.png"
							alt="Github"
						/>
					</a>
					<a
						href="https://frontend.corneliaryas.com/"
						target="_blank"
						rel="noopener noreferrer">
						<img
							src="https://img.icons8.com/ios/50/000000/webpage.png"
							alt="Portfolio"
						/>
					</a>
				</ContactIconsContainer>
				<ProfileText>
					<p>
						Jag är en frontend utvecklare med bakgrund inom motion design. Jag
						drogs till programmering där jag såg möjligheten att skapa fler
						interaktiva upplevelser, samtidigt som det finns oändliga
						möjligheter att lära och utveckla sig själv. Mitt hjärta slår
						verkligen för att kombinera kod och animation för att skapa kreativa
						lösningar för ett mer humant och hållbart samhälle.
					</p>
					<p>
						I'm a frontend developer with a background in motion design. I was
						drawn to programming by the possibility to create more interactive
						experiences, but the never-ending opportunities to learn and develop
						is a clear bonus. My heart especially beats for combining code and
						animation to create solutions for a more human, sustainable society!
					</p>
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
						rel="noopener noreferrer">
						<img
							src="https://img.icons8.com/color/48/000000/linkedin.png"
							alt="LinkedIn"
						/>
					</a>
					<a
						href="https://github.com/JHarde"
						target="_blank"
						rel="noopener noreferrer">
						<img
							src="https://img.icons8.com/fluent/48/000000/github.png"
							alt="Github"
						/>
					</a>
					<a
						href="https://joelhardeportfolio.netlify.app/"
						target="_blank"
						rel="noopener noreferrer">
						<img
							src="https://img.icons8.com/ios/50/000000/webpage.png"
							alt="Portfolio"
						/>
					</a>
				</ContactIconsContainer>
				<ProfileText>
					<p>
						Min resa från förskolepedagog till front end utvecklare började för
						snart ett halvår sedan. I programmering såg jag en möjlighet att
						utforska min kreativa sida och fick chansen att börja bygga appar
						och hemsidor från grunden. Jag tycker om kombinationen av att arbeta
						kreativt och samtidigt få använda mig av mina kunskaper kring
						problemlösning för att hitta nya lösningar.
					</p>
					<p>
						My journey from working as a kindergarten teacher to becoming a
						front end developer started about six months ago. In programming I
						saw an opportunity to develop my creative side and to create
						applications and websites from scratch. The combination of working
						in a creative way and finding solutions on various problems brings
						me a lot of joy.
					</p>
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
						rel="noopener noreferrer">
						<img
							src="https://img.icons8.com/color/48/000000/linkedin.png"
							alt="LinkedIn"
						/>
					</a>
					<a
						href="https://github.com/LillanEriksson"
						target="_blank"
						rel="noopener noreferrer">
						<img
							src="https://img.icons8.com/fluent/48/000000/github.png"
							alt="Github"
						/>
					</a>
					<a
						href="https://www.lillemoreriksson.com/"
						target="_blank"
						rel="noopener noreferrer">
						<img
							src="https://img.icons8.com/ios/50/000000/webpage.png"
							alt="Portfolio"
						/>
					</a>
				</ContactIconsContainer>
				<ProfileText>
					<p>
						Jag har en bakgrund som kreativ entreprenör. Som entreprenör har jag
						lärt mig att lösa problem på olika sätt, och mitt mindset är att
						alla problem har en lösning. Jag älskar att skapa användbara saker
						som löser problem för andra människor. Jag brinner för att lära mig
						nya saker, och just därför älskar jag att koda, för det finns alltid
						mer att lära och nytt att upptäcka. Mitt mål är i första hand att
						jobba som frontend-developer, men jag har planer att i framtiden bli
						fullstack.
					</p>
					<p>
						I have a background as a creative entrepreneur. As an entrepreneur
						I've learned to tackle obstacles in different ways, and my mindset
						is that every problem has a solution. I love to create useful things
						that solves problems for other people. I'm passionate about learning
						new things, and I love coding, because there's always more to learn!
						My goal is to first be a frontend-developer, but in the future I
						have ambitions to go fullstack.
					</p>
				</ProfileText>
			</PersonContainer>
			<CreditsContainer>
				<a href="https://icons8.com/">Icons on this page is from Icons8</a>
				<p>
					All other content are made by ourselves as a part of the Technigo
					frontend-bootcamp.
				</p>
				<p>Källförteckning:</p>
				<a href="https://sydvatten.se/hur-anvander-du-vatten-klokt/">
					Sydvatten.se
				</a>
				<a href="https://www.trafikverket.se/for-dig-i-branschen/miljo---for-dig-i-branschen/energi-och-klimat/jamfor-trafikslag/">
					Trafikverket.se
				</a>
				<a href="https://www.naturvardsverket.se/Miljoarbete-i-samhallet/Miljoarbete-i-Sverige/Uppdelat-efter-omrade/Klimat/minska-min-klimatpaverkan/">
					Naturvårdsverket.se
				</a>
			</CreditsContainer>
		</AboutUsContainer>
	);
};
