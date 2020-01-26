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

	const ShareAndEmbed = styled.div`
		display: flex;
		flex-direction: row;
		align-items: center;
		width: 100%;
		height: 100%;
		margin-bottom: -0.5%;
		background-color: #f2f2f2;

		p {
			margin-left: 24px;
			margin-right: 24px;
		}
		p a {
			color: #000;
		}
	`;

	return (
		<LayoutStyle>
			<ShareAndEmbed>
				<p>
					<a href='#'>Embed</a>
				</p>
			</ShareAndEmbed>
			{props.children}
		</LayoutStyle>
	);
};

export default Layout;
