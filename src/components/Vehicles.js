import React from 'react';

export const Vehicles = ({ vehicle }) => {
	let image = null;
	switch (vehicle) {
		case 'Bil':
			image = 'Car.svg';
			break;
		case 'Tåg':
			image = 'Train.svg';
			break;
		case 'Flygplan':
			image = 'Airplane.svg';
			break;
		case 'Gå eller cykla':
			image = 'Bike.svg';
			break;
		case 'Buss':
			image = 'Bus.svg';
			break;
		default:
			image = null;
	}

	return <img src={require(`../assets/${image}`)} />;
};
