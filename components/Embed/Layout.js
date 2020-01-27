import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Layout = props => {
	const LayoutStyle = styled.div`
		margin: 20;
		padding: 20;
		.swiper-container-horizontal > .swiper-pagination-bullets,
		.swiper-pagination-custom,
		.swiper-pagination-fraction {
			left: 25% !important;
		}

		.swiper-pagination-bullet-active,
		.swiper-pagination-bullet {
			background: #000 !important;
		}

		@media only screen and (max-width: 767px) {
			.swiper-container-horizontal > .swiper-pagination-bullets,
			.swiper-pagination-custom,
			.swiper-pagination-fraction {
				left: 0 !important;
			}

			.swiper-pagination-bullet-active,
			.swiper-pagination-bullet {
				background: #fff !important;
			}
		}
	`;
	return <LayoutStyle>{props.children}</LayoutStyle>;
};

Layout.propTypes = {
	children: PropTypes.string.isRequired,
};

export default Layout;
