import React, {useState, useContext} from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import HeaderContainer from '../containers/headerContainer';
import FooterContainer from '../containers/footerContainer';
import FirebaseContext from '../context/firebase';
import * as Routes from '../constants/routes';

import './styles/signup.scss';

function Signup() {

    const history = useHistory();
    const [firstName, setFirstName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const { firebase } = useContext(FirebaseContext);

    const isInvalid = firstName === '' || password === '' || emailAddress === '';

    const handleSignIn = (event) => {
        event.preventDefault();

        //NOTE: firebase work here!
        firebase.auth().createUserWithEmailAndPassword(emailAddress, password)
        .then((result) => {
            result.user.updateProfile({
                displayName: firstName,
                photoURL: Math.floor(Math.random() *  5) + 1,
            })
        })
        .then(() => {
            //NOTE: push to browser page
            history.push(Routes.Browser);
        })
        .catch((error) => {
            setFirstName('');
            setEmailAddress('');
            setPassword('');
            setError(error.message);
        })
    }

    return (
        <>
        <HeaderContainer buttonTitle='Sign In' backgroundUrl='url("../images/misc/home-bg.jpg")' >
        <div className='signup-container'>
            <h1 className='title'>Sign Up</h1>
            { error && 
            <div className='error'>{error}</div>
            }
            <form className='base' onSubmit={handleSignIn} method='POST' >
                <input placeholder='First Name' value={firstName} onChange={({ target}) => setFirstName(target.value)}></input>
                <input placeholder='Email Address' autoComplete='off' value={emailAddress} onChange={({ target}) => setEmailAddress(target.value)} />
                <input type='password' placeholder='Password' autoComplete="off" value={password} onChange={({ target }) => setPassword(target.value)} />
                <button disabled={isInvalid} type='submit'>Sign Up</button>
            </form>
            <p className='text'>Already a user? <Link className='link' to={Routes.SignIn}>Sign in now.</Link></p>
            <p className='smalltext'>This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.</p>
        </div>
        </HeaderContainer>
        <FooterContainer />
        </>
    )
}

export default Signup;
