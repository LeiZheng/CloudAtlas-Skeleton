import React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import { PrivateRoute } from './components/PrivateRoute';
import  LoginPage  from './pages/LoginPage'
import  RegisterPage  from './pages/RegisterPage'
import MainAppPage from './pages/MainAppPage'

export default () => (
    <Layout>
        <Route path='/login' component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <PrivateRoute path='/' component={MainAppPage} />
    </Layout>
);
