/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

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

export default Layout;
