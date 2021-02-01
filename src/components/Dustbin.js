import React from 'react';
import { useDrop } from 'react-dnd';

import '../assets/Glas.svg';
import '../assets/Kartong.svg';
import '../assets/Metall.svg';
import '../assets/Papper.svg';
import '../assets/Plast.svg';

const style = {
	height: '6rem',
	width: '6rem',
	marginRight: '1.5rem',
	marginBottom: '1.5rem',
	color: 'white',
	padding: '1rem',
	textAlign: 'center',
	fontSize: '1rem',
	lineHeight: 'normal',
	float: 'left',
	backgroundColor: 'grey',
};

export const Dustbin = ({ accept, lastDroppedItem, onDrop, image }) => {
	const [{ isOver, canDrop }, drop] = useDrop({
		accept,
		drop: onDrop,
		collect: (monitor) => ({
			isOver: monitor.isOver(),
			canDrop: monitor.canDrop(),
		}),
	});

	console.log(`image ${image}`);

	const isActive = isOver && canDrop;
	// let backgroundColor = "#222";
	// if (isActive) {
	//   backgroundColor = "darkgreen";
	// } else if (canDrop) {
	//   backgroundColor = "darkkhaki";
	// }

	return (
		<div ref={drop} style={{ ...style }}>
			{isActive ? 'Release to drop' : ` ${accept.join('')}`}
			{lastDroppedItem && (
				<p> Last dropped: {JSON.stringify(lastDroppedItem)}</p>
			)}
			{/* Should be require(image) something, does not work */}
			<img src={require('../assets/Glas.svg')} alt="Trashcan" />
		</div>
	);
};
