import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = props => (
	<div>
		404 page not found <Link to="/" >return home</Link>
	</div>
);

export default PageNotFound;