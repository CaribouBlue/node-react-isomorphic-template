import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import AppRoutes from '../client/components/app-router/AppRoutes';
import getHtml from './getHtml';

const router = express.Router();

router.get('*', (req, res) => {
	const context = {};

	const app = renderToString(
		<StaticRouter basename="/" context={context} location={req.url} >
			<AppRoutes />
		</StaticRouter>
	);

	res.status(200).send(getHtml(app, 'Application Title'));
})

module.exports = router;