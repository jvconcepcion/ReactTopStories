import React from 'react';
import ReactDom from 'react-dom';
import Carousel from './CarouselR5Style';

describe('top stories', () => {
	test('Renders without Crashing', () => {
		const div = document.createElement('div');
		ReactDom.render(
			<Carousel api='https://svc.rappler.com/p/topstories' />,
			div
		);
		ReactDom.unmountComponentAtNode(div);
	});
});
