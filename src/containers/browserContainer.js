import React, { useContext, useState, useEffect } from 'react';
import SelectProfileContainer from './profileContainer';
import FirebaseContext from '../context/firebase';
import { Loading } from '../components';

function BrowserContainer({ slides }) {
    const [profile, setProfile] = useState({});
    const [loading, setLoading] = useState(true);
    const { firebase } = useContext(FirebaseContext);
    const user = firebase.auth().currentUser || {};

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000)
    }, [profile.displayName])

    return (
        profile.dislayName ? ( 
            loading ? <Loading src={user.photoURL} /> : null) : 
            <SelectProfileContainer user={user} setProfile={setProfile}/>
        ); 
}

export default BrowserContainer;
  