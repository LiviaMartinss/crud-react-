import React from 'react'
import './nav.css'

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            <a href="/">
                <i className="fa fa-home"></i> Home
            </a>
            <a href="/users">
                <i className='fa fa-users'></i> Usuários
            </a>
        </nav>
    </aside>
