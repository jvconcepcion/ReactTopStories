import React from 'react';
import styled from 'styled-components';
import { PropTypes } from 'prop-types';

const Wrapper = props => {
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
			{props.embedBar ? (
				<ShareAndEmbed>
					<p>
						<a href='#'>Embed</a>
					</p>
				</ShareAndEmbed>
			) : (
				''
			)}
			{props.children}
		</LayoutStyle>
	);
};

Wrapper.propTypes = {
	children: PropTypes.node,
	embedBar: PropTypes.string,
};

export default Wrapper;
