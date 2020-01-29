import React from 'react';

import { CarouselR5Style } from '../components/Carousel';
import { Wrapper } from '../components/Wrapper';

const Embed = () => {
	return (
		<Wrapper embedBar='false'>
			<CarouselR5Style api='https://svc.rappler.com/p/topstories' />
		</Wrapper>
	);
};

export default Embed;
