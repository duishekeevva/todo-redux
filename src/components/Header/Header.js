import React from 'react';
import {Link} from "react-router-dom";
import Logo from "../Assets/logo1.png"

const Header = () => {
    return (
        <header className={'header'}>
            <img className={'logo-img'} src={Logo} alt=""/>
            <nav className="nav">
                <Link className={'link'}  to={'/'}>Home</Link>
                <a href={'#'}>About</a>
                <a href={'#'}>Reviews</a>
                <a href={'#'}>Contact</a>
            </nav>
            <div className={'header-btn'}>
                <button className={'btn btn-info'}>Sign up</button>
                <button className={'btn btn-info'}>Login</button>
            </div>
        </header>
    );
};

export default Header;