import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components';
import * as Route from '../constants/routes';
import logo from '../logo.svg';

function HeaderContainer({children}) {
    return (
        <Header>
            <div className='container-header'>
                <Link to={Route.Home}><img className='Logo' src={logo} alt="Netflix" /></Link>
                <Link className='buttonLink' to={Route.SignIn}>Sign In</Link>
            </div>
            {children}
        </Header>
        
    )
}

export default HeaderContainer;
