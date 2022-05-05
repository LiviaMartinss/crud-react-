import React from 'react'
import './logo.css'
import logo from '../../assets/img/logo.png'

export default props =>
    <aside className="logo">
        <a href="/" className="logo">
            <img scr={logo} alt="logo"/>
        </a>
    </aside>
