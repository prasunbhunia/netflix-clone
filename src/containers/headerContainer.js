import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components';
import * as Route from '../constants/routes';
import logo from '../logo.svg';

function HeaderContainer({children, buttonTitle, backgroundUrl}) {
    return (
        <Header backgroundUrl={backgroundUrl}>
            <div className='container-header'>
                <Link to={Route.Home}><img className='Logo' src={logo} alt="Netflix" /></Link>
                {
                    buttonTitle && <Link className='buttonLink' to={Route.SignIn}>{buttonTitle}</Link>
                }
            </div>
            {children}
        </Header>
        
    )
}

export default HeaderContainer;
