import React, { Component } from 'react';
import styled from 'styled-components';
import Swiper from 'react-id-swiper';
import axios from 'axios';
import { PropTypes } from 'prop-types';

const CarouselItemWrapper = styled.div`
	@font-face {
		src: url(https://fonts.googleapis.com/css?family=Roboto&display=swap);
		font-family: 'Roboto', sans-serif;
	}
	display: flex;
	flex-direction: row;
	width: 100%;
	margin: 8px 0;
	background-color: ${props => props.bgColor || 'rgb(235, 237, 255)'};

	@media only screen and (max-width: 767px) {
		flex-direction: column;
	}
`;

const CarouselImageWrapper = styled.div`
	max-width: 640px;
	min-height: 360px;
	padding: 24px;
	@media only screen and (max-width: 767px) {
		&&::before {
			content: '';
			position: absolute;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
			background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.2));
			opacity: 0.7;
			z-index: 1;
		}
		padding: 0px;
		min-height: unset;
	}
`;

const CarouselImage = styled.img`
	width: 640px;
	height: 360px;

	@media only screen and (max-width: 767px) {
		width: 100%;
		height: unset;
	}
`;

const CarouselTxtWrapper = styled.div`
	margin: 10px 35px 10px 10px;

	h2 {
		font-family: 'Roboto', sans-serif;
		font-size: 35px;
		color: ${props => props.desktopHeader || 'rgb(240, 79, 60)'};
	}

	h3 {
		font-family: 'Roboto', sans-serif;
		font-size: 18px;
		font-weight: 400;
		color: ${props => props.desktopSubHeader || '#000'};
	}

	p {
		margin: 42px 0;
	}

	p a {
		font-family: 'Roboto', sans-serif;
		font-size: 22px;
		text-decoration: none;
		color: ${props => props.desktopButtonColor || '#333'};
		border: solid 1px ${props => props.desktopButtonColor || '#333'};
		padding: 10px;
		background-color: ${props => props.buttonBgColor || 'transparent'};
	}

	p a:visited {
		color: ${props => props.desktopButtonColor || '#333'};
	}
	@media only screen and (max-width: 767px) {
		margin: -60px 0px 0px 0px;
		padding: 14px;
		background-image: linear-gradient(
			to bottom,
			rgba(0, 0, 0, 0),
			rgba(0, 0, 0, 1),
			rgba(0, 0, 0, 1),
			rgba(0, 0, 0, 1),
			rgba(0, 0, 0, 1)
		);
		h2 {
			font-size: 20px;
			color: ${props => props.mobileHeader || 'rgb(240, 79, 60)'};
		}
		h3 {
			font-size: 14px;
			color: ${props => props.mobileSubHeader || '#fff'};
		}
		p {
			margin: 35px 0 52px 0;
		}
		p a {
			font-size: 16px;
			border: solid 1px ${props => props.mobileButtonColor || '#333'};
			color: ${props => props.mobileButtonColor || '333'};
		}

		p a:visited {
			border: solid 1px ${props => props.desktopButtonColor || '#333'};
			color: ${props => props.mobileButtonColor || '333'};
		}
	}
`;

const settings = {
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true,
	},
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
	effect: 'fade',
	autoHeight: true,
	loop: true,
	observer: true,
	observeParents: true,
};

class Carousel extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
		};
	}

	componentDidMount() {
		this.getRawData();
	}

	async getRawData() {
		const res = await axios.get('https://svc.rappler.com/p/topstories');
		const { data } = await res.data;
		this.setState({ data });
	}

	render() {
		const {
			bgColor,
			desktopHeader,
			mobileHeader,
			desktopSubHeader,
			mobileSubHeader,
			desktopButtonColor,
			mobileButtonColor,
			buttonBgColor,
		} = this.props;

		const getCarouselData = this.state.data.map(items => {
			const { id, url, images, title, metadesc } = items;
			const finalUrl = `https://www.rappler.com${url}`;
			const articleID = id;
			const imgPath = images[0].tn;
			const img = new URL(imgPath).pathname;
			return (
				<CarouselItemWrapper key={articleID} bgColor={bgColor}>
					<CarouselImageWrapper>
						<CarouselImage src={`https://assets.rappler.com${img}`} alt='' />
					</CarouselImageWrapper>
					<CarouselTxtWrapper
						desktopHeader={desktopHeader}
						mobileHeader={mobileHeader}
						desktopSubHeader={desktopSubHeader}
						mobileSubHeader={mobileSubHeader}
						desktopButtonColor={desktopButtonColor}
						mobileButtonColor={mobileButtonColor}
						buttonBgColor={buttonBgColor}
					>
						<h2>{title}</h2>
						<h3>{metadesc}</h3>
						<p>
							<a href={finalUrl} target='_blank' rel='noopener noreferrer'>
								Read More
							</a>
						</p>
					</CarouselTxtWrapper>
				</CarouselItemWrapper>
			);
		});

		return <Swiper {...settings}>{getCarouselData}</Swiper>;
	}
}

Carousel.propTypes = {
	bgColor: PropTypes.string.isRequired,
	desktopHeader: PropTypes.string.isRequired,
	mobileHeader: PropTypes.string.isRequired,
	desktopSubHeader: PropTypes.string.isRequired,
	mobileSubHeader: PropTypes.string.isRequired,
	desktopButtonColor: PropTypes.string.isRequired,
	mobileButtonColor: PropTypes.string.isRequired,
	buttonBgColor: PropTypes.string.isRequired,
};

export default Carousel;
