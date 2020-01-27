import React from 'react';
import styled from 'styled-components';
import Swiper from 'react-id-swiper';
import PropTypes from 'prop-types';

const TopstoriesContent = props => {
	const TopStoriesItemWrapper = styled.div`
		@font-face {
			src: url(https://fonts.googleapis.com/css?family=Roboto&display=swap);
			font-family: 'Roboto', sans-serif;
		}
		display: flex;
		flex-direction: row;
		width: 100%;
		margin: 8px 0;
		background-color: rgb(235, 237, 255);

		@media only screen and (max-width: 767px) {
			flex-direction: column;
		}
	`;

	const TopStoriesImageWrapper = styled.div`
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

	const TopStoriesImage = styled.img`
		width: 640px;
		height: 360px;

		@media only screen and (max-width: 767px) {
			width: 100%;
			height: unset;
		}
	`;

	const TopStoriesTxtWrapper = styled.div`
		margin: 10px 35px 10px 10px;

		h2 {
			font-family: 'Roboto', sans-serif;
			font-size: 35px;
			color: rgb(240, 79, 60);
		}

		h3 {
			font-family: 'Roboto', sans-serif;
			font-size: 18px;
			font-weight: 400;
		}

		p {
			margin: 42px 0;
		}

		p a {
			font-family: 'Roboto', sans-serif;
			font-size: 22px;
			text-decoration: none;
			color: #333;
			border: solid 1px #333;
			padding: 10px;
		}

		p a:visited {
			color: #333;
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
			}
			h3 {
				font-size: 14px;
				color: #fff;
			}
			p {
				margin: 35px 0 52px 0;
			}
			p a {
				font-size: 16px;
				color: #fff;
				border: solid 1px #fff;
			}

			p a:visited {
				color: #fff;
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
	};

	const getTopStories = props.getData.data.map(items => {
		const finalUrl = `https://www.rappler.com${items.url}`;
		const articleID = items.id;
		const imgPath = items.images[0].tn;
		const img = new URL(imgPath).pathname;
		return (
			<TopStoriesItemWrapper key={articleID}>
				<TopStoriesImageWrapper>
					<TopStoriesImage src={`https://assets.rappler.com${img}`} alt='' />
				</TopStoriesImageWrapper>
				<TopStoriesTxtWrapper>
					<h2>{items.title}</h2>
					<h3>{items.metadesc}</h3>
					<p>
						<a href={finalUrl} target='_blank' rel='noopener noreferrer'>
							Read More
						</a>
					</p>
				</TopStoriesTxtWrapper>
			</TopStoriesItemWrapper>
		);
	});
	return <Swiper {...settings}>{getTopStories}</Swiper>;
};

TopstoriesContent.propTypes = {
	getData: PropTypes.objectOf(PropTypes.any).isRequired,
};
export default TopstoriesContent;
