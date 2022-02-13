import React from 'react';
import HeaderContainer from './headerContainer';
import {Profiles} from '../components';


function SelectProfileContainer({ user, setProfile }) {
    
    return (
        <Profiles Title="Who's Watching?" user={user} setProfile={setProfile} >
            <HeaderContainer  /> 
        </Profiles>
    )
}

export default SelectProfileContainer;
