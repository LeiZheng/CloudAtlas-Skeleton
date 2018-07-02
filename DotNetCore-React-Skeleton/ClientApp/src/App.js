import React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Counter from './components/Counter';
import FetchData from './components/FetchData';
import { PrivateRoute } from './components/PrivateRoute';
import  HomePage  from './pages/HomePage';
import { LoginPage } from './pages/LoginPage'
import { RegisterPage } from './pages/RegisterPage'

export default () => (
    <Layout>
        <PrivateRoute exact path='/' component={HomePage} />
        <Route path='/login' component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route exact path='/home' component={HomePage} />
    </Layout>
);
