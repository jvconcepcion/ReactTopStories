/* eslint-disable consistent-return */
import React from 'react';
import fetch from 'isomorphic-unfetch';
import PropTypes from 'prop-types';

import Layout from '../components/Main/Layout';
import TopstoriesContent from '../components/Main/TopstoriesContent';

const Index = props => {
	return (
		<Layout>
			<TopstoriesContent getData={props.data} />
		</Layout>
	);
};

Index.getInitialProps = async () => {
	try {
		const res = await fetch('https://svc.rappler.com/p/topstories');
		const data = await res.json();
		return {
			data,
		};
	} catch (error) {
		// eslint-disable-next-line no-console
		console.log(error);
	}
};

Index.propTypes = {
	data: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Index;
