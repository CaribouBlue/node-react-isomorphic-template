import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import AppRouter from './app-router/AppRouter';
import '../styling/css/main.css';

ReactDOM.render(<AppRouter />, document.getElementById('root'));