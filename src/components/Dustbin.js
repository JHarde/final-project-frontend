import React from 'react';
import { useDrop } from 'react-dnd';

export const Dustbin = ({ accept, onDrop, image }) => {
	const [{ isOver, canDrop }, drop] = useDrop({
		accept,
		drop: onDrop,
		collect: (monitor) => ({
			isOver: monitor.isOver(),
			canDrop: monitor.canDrop(),
		}),
	});

	const isActive = isOver && canDrop;

	return (
		<div ref={drop}>
			{isActive ? null : <div style={{ width: 100 }} />}

			<img src={require(`../assets/${image}`)} alt="Trashcan" />
		</div>
	);
};
