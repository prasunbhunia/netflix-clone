import Firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyC_s-_iWaAZcM06XjQNy_NmqXHeTfzh6h8",
    authDomain: "netflix-clone-40911.firebaseapp.com",
    projectId: "netflix-clone-40911",
    storageBucket: "netflix-clone-40911.appspot.com",
    messagingSenderId: "688670577026",
    appId: "1:688670577026:web:47044a117c484cb355ff9b"
};

const firebase = Firebase.initializeApp(config);


export { firebase };