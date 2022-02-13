import React from 'react';
import HeaderContainer from '../../containers/headerContainer';

import './styles/profiles.scss';

function Profiles({ children, user, Title, setProfile, ...restProps }) {
    return (
        <div className='profiles-conatiner'>
            <HeaderContainer />
            <h1 className='title'>{Title}</h1>
            <ul className='list'>
                <li className='item' onClick={() => setProfile({displayName: user.displayName})}>
                    <img className='picture' src={user.photoURL ? `/images/users/${user.photoURL}.png` : '/images/misc/loading.gif'} alt='profile'/>
                    <p className='name'>{user.displayName}</p>
                </li>
            </ul>
        </div>
    )
}

export default Profiles;
