/* eslint-disable func-names */
/* eslint-disable consistent-return */
/* eslint-disable react/prop-types */
// import App from 'next/app';
import React from 'react';
import 'swiper/css/swiper.css';
import 'swiper/css/swiper.min.css';

function MyApp({ Component, pageProps }) {
	return <Component {...pageProps} />;
}
// MyApp.getInitialProps = async appContext => {
// 	const appProps = await App.getInitialProps(appContext);
// 	return { ...appProps };
// };

export default MyApp;
