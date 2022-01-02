import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';
import { firebase } from './components/lib/firebase';
import FirebaseContext from './context/firebase';

import './global-styles.scss';
import 'normalize.css';

ReactDOM.render(
    <>
    <FirebaseContext.Provider value={{ firebase }}>
        <App />
    </FirebaseContext.Provider>
    </>, 
    document.getElementById('root')
);


