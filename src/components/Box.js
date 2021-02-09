import React from 'react';
import { useDrag } from 'react-dnd';

import { Trash } from 'components/StyledComponents';

export const Box = ({ name, type, isDropped }) => {
	const [{ opacity }, drag] = useDrag({
		item: { name, type },
		collect: (monitor) => ({
			opacity: monitor.isDragging() ? 0.4 : 1,
		}),
	});

	return <Trash ref={drag}>{isDropped ? <s>{name}</s> : name}</Trash>;
};
