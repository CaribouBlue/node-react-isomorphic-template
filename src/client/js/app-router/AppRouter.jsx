import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './AppRoutes';

const AppRouter = props => (
	<Router>
		<AppRoutes />
	</Router>
);

export default AppRouter;