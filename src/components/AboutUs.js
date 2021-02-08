import React from 'react';

import {
	ProfileImage,
	ProfileImageContainer,
	AboutUsContainer,
	PersonContainer,
} from './StyledComponents';

export const AboutUs = () => {
	//link to portfolios
	//our pitches
	//what we done in this app
	//photos of us
	//link to our LinkedIns
	return (
		<AboutUsContainer>
			<PersonContainer>
				{' '}
				<ProfileImageContainer>
					<ProfileImage
						src={require('../assets/Cornelia.png')}
						alt="Cornelia"
					/>
				</ProfileImageContainer>
				<h1>Cornelia Ryås</h1>
				<p>Frontend-developer/motion-designer</p>
				<div>
					{' '}
					<img
						src="https://img.icons8.com/color/48/000000/linkedin.png"
						alt="LinkedIn"
					/>
					<img src="https://img.icons8.com/fluent/48/000000/github.png" />
				</div>
			</PersonContainer>
			<PersonContainer>
				{' '}
				<ProfileImageContainer>
					<ProfileImage src={require('../assets/Joel.png')} alt="Joel" />
				</ProfileImageContainer>
				<h1>Joel Harde</h1> <p>Frontend-developer/lärare</p>
				<div>
					{' '}
					<img
						src="https://img.icons8.com/color/48/000000/linkedin.png"
						alt="LinkedIn"
					/>
					<img src="https://img.icons8.com/fluent/48/000000/github.png" />
				</div>
			</PersonContainer>
			<PersonContainer>
				<ProfileImageContainer>
					<ProfileImage
						src={require('../assets/Lillemor.png')}
						alt="Lillemor"
					/>
				</ProfileImageContainer>
				<h1>Lillemor Eriksson</h1>
				<p>Frontend-developer med bakgrund som entreprenör</p>
				<div>
					{' '}
					<img
						src="https://img.icons8.com/color/48/000000/linkedin.png"
						alt="LinkedIn"
					/>
					<img src="https://img.icons8.com/fluent/48/000000/github.png" />
				</div>
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
