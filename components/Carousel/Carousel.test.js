import React from 'react';
import ReactDom from 'react-dom';
import Carousel from './CarouselR5Style';

describe('top stories', () => {
	test('Renders without Crashing', () => {
		const div = document.createElement('div');
		ReactDom.render(<Carousel />, div);
		ReactDom.unmountComponentAtNode(div);
	});
});
