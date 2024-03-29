import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css';

import './app.css'

import Logo from '../components/template/logo'
import Nav from '../components/template/nav'
import Home from '../components/home/home'
import Footer from '../components/template/footer'

export default props =>
    <div className="app">x
        <Logo />
        <Nav />
        <Home/>
        <Footer />
    </div>
