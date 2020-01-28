import React from 'react';
import ReactDom from 'react-dom';
import Wrapper from './Wrapper';

describe('top stories', () => {
	test('Renders without Crashing', () => {
		const div = document.createElement('div');
		ReactDom.render(<Wrapper embedBar='true' />, div);
		ReactDom.unmountComponentAtNode(div);
	});
});
