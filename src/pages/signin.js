import React, {useState, useContext} from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import HeaderContainer from '../containers/headerContainer';
import FooterContainer from '../containers/footerContainer';
import FirebaseContext from '../context/firebase';
import * as Routes from '../constants/routes';

import './styles/signin.scss';


function Signin() {
    const history = useHistory();
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const { firebase } = useContext(FirebaseContext);

    const isInvalid = password === '' || emailAddress === '';

    const handleSignIn = (event) => {
        event.preventDefault();

        // firebase work here!
        firebase.auth().signInWithEmailAndPassword(emailAddress, password)
        .then(() => {
            // push to browser page
            history.push(Routes.Browser);
        })
        .catch((error) => {
            setEmailAddress('');
            setPassword('');
            setError(error.message);
        })
    }

    return (
        <>
        <HeaderContainer buttonTitle='Sign Up' backgroundUrl='url("../images/misc/home-bg.jpg")' >
        <div className='signin-container'>
            <h1 className='title'>Sign In</h1>
            { error && 
            <div className='error'>{error}</div>
            }
            <form className='base' onSubmit={handleSignIn} method='POST' >
                <input placeholder='Email Address' value={emailAddress} onChange={({ target}) => setEmailAddress(target.value)} />
                <input type='password' placeholder='Password' autoComplete='off' value={password} onChange={({ target }) => setPassword(target.value)} />
                <button disabled={isInvalid} type='submit'>Sign In</button>
            </form>
            <p className='text'>New to Netflix <Link className='link' to={Routes.SignUp}>Sign up now.</Link></p>
            <p className='smalltext'>This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.</p>
        </div>
        </HeaderContainer>
        <FooterContainer />
        </>
    )
}

export default Signin;
