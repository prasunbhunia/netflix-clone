import React from 'react';
import HeaderContainer from './headerContainer';
import {Profiles} from '../components';
import * as Routes from '../constants/routes';
import logo from '../logo.svg';

function SelectProfileContainer({ user, setProfile }) {
    return (
        <Profiles Title="Who's Watching?" user={user} setProfile={setProfile} >
            <HeaderContainer  /> 
        </Profiles>
    )
}

export default SelectProfileContainer;
