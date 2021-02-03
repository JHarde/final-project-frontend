import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';
import { useMediaQuery } from 'react-responsive';
import MultiBackend, {
	TouchTransition,
	createTransition,
} from 'react-dnd-multi-backend';

import { DragAndDropContainer } from 'components/DragAndDropContainer';

export const Task2 = () => {
	const isDesktopOrLapTop = useMediaQuery({ query: '(min-width: 769px)' });
	const isMobileOrTablet = useMediaQuery({ query: '(max-width: 768px)' });

	const TouchTransition = createTransition('touchstart', (event) => {
		return event.touches != null;
	});

	const Touch = {
		backends: [
			{ backend: HTML5Backend },
			{
				backend: TouchBackend,
				options: { enableMouseEvents: true },
				preview: true,
				transition: TouchTransition,
			},
		],
	};

	return (
		<>
			{isDesktopOrLapTop && (
				<DndProvider backend={HTML5Backend}>
					<DragAndDropContainer />
				</DndProvider>
			)}
			{isMobileOrTablet && (
				<DndProvider backend={MultiBackend} options={Touch}>
					<DragAndDropContainer />
				</DndProvider>
			)}
		</>
	);
};
