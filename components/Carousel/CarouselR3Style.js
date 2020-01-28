import React from 'react';
import { PropTypes } from 'prop-types';
import Carousel from './Carousel';

const CarouselR3Style = props => {
	return (
		<Carousel
			api={props.api}
			bgColor='#f4f4f4'
			desktopHeader='#333332'
			mobileHeader='#e76229'
			desktopSubHeader='#000'
			mobileSubHeader='#fff'
			desktopButtonColor='#fff'
			mobileButtonColor='#fff'
			buttonBgColor='#e76229'
		/>
	);
};

CarouselR3Style.propTypes = {
	api: PropTypes.string.isRequired,
};

export default CarouselR3Style;
