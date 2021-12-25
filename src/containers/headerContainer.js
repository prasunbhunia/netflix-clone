import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components';
import * as Route from '../constants/routes';
import logo from '../logo.svg';

function HeaderContainer({children}) {
    return (
        <Header>
            <div className='container-header'>
                <img className='Logo' to={Route.Home} src={logo} alt="Netflix" />
                <Link className='buttonLink' to={Route.SignIn}>Sign In</Link>
            </div>
            {children}
        </Header>
        
    )
}

export default HeaderContainer;
