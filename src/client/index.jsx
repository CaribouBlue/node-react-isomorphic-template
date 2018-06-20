import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import AppRouter from './components/app-router/AppRouter';
import './global';

ReactDOM.render(<AppRouter />, document.getElementById('root'));