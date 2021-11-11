import { useEffect, useState } from 'react';
import initializeAuthentation from '../Login/Firebase/firebase.init';
import { getAuth, createUserWithEmailAndPassword, signOut, updateProfile, onAuthStateChanged, signInWithEmailAndPassword, getIdToken } from "firebase/auth";
import { useHistory } from 'react-router-dom';



initializeAuthentation();

const useFirebase = () => {
    const history = useHistory();
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);

    const auth = getAuth();


    const registerUser = (email, password, name, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');
                const newUser = { email, displayName: name };
                setUser(newUser);
                saveUser(email, name);
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                });
                history.push('/');
            })
            .catch((error) => {
                setAuthError(error.message);
                // console.log(error);
            })
            .finally(() => setIsLoading(false));
    }


    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                history.push(destination);
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    // @ts-ignore
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                // getIdToken(user)
                //     .then(idToken => {
                //         setToken(idToken);
                //     })
            } else {
                setUser({});
            }
            setIsLoading(false)
        });
        return () => unsubscribe;
    }, []);

    const logOut = () => {
        signOut(auth).then(() => {
            history.push('/home');
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoading(false));
    };

    useEffect(() => {
        fetch(`http://localhost:5000/users/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setAdmin(data.admin);
            })
    }, [user?.email]);

    const saveUser = (email, displayName) => {
        const user = { email, displayName };
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user),
        })
            .then(res => res.json())
            .then(data => {

            })
    };


    return {
        user,
        admin,
        setUser,
        registerUser,
        logOut,
        loginUser,
        isLoading,
        setIsLoading, authError
    }
};

export default useFirebase;