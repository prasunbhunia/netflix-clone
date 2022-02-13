import { useState, useEffect, useContext } from 'react';
import FirebaseContext from '../context/firebase';

function useContent(target) {

    const { firebase } = useContext(FirebaseContext);
    const [content, setContent] = useState([]);


    useEffect(() => {
        firebase.firestore().collection(target).get().then((snapshot) => {
            const allContent = snapshot.docs.map((content) => ({
                ...content.data(),
                docId: content.id,
            }));
            setContent(allContent);
        }).catch((error) => {
            console.log(error.message);
        });
    },[]);

    return {[target]: content};
}

export default useContent;
