import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';
import { useMediaQuery } from 'react-responsive';

import { DragAndDropContainer } from 'components/DragAndDropContainer';

export const Task2 = () => {
	const isDesktopOrLapTop = useMediaQuery({ query: '(min-width: 769px)' });
	const isMobileOrTablet = useMediaQuery({ query: '(max-width: 768px)' });

	return (
		<>
			{isDesktopOrLapTop && (
				<DndProvider backend={HTML5Backend}>
					<DragAndDropContainer />
				</DndProvider>
			)}
			{isMobileOrTablet && (
				<DndProvider backend={TouchBackend}>
					<DragAndDropContainer />
				</DndProvider>
			)}
		</>
	);
};
