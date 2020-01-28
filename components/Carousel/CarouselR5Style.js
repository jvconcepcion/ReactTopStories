import React from 'react';
import { PropTypes } from 'prop-types';
import Carousel from './Carousel';

const CarouselR5Style = props => {
	return (
		<Carousel
			api={props.api}
			bgColor='rgb(235, 237, 255)'
			desktopHeader='rgb(240, 79, 60)'
			mobileHeader='rgb(240, 79, 60)'
			desktopSubHeader='#000'
			mobileSubHeader='#fff'
			desktopButtonColor='#333'
			mobileButtonColor='#fff'
			buttonBgColor='transparent'
		/>
	);
};

CarouselR5Style.propTypes = {
	api: PropTypes.string.isRequired,
};

export default CarouselR5Style;
