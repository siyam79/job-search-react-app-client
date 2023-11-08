

import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState, } from "react";
import PropTypes from 'prop-types';
import { auth } from "../Config/firebase.Config";
import axios from "axios";
export const AuthContext = createContext(null)


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);



    const githubProvider = new GithubAuthProvider();
    const googleProvider = new GoogleAuthProvider();


    // google login  

    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    //  Github Login 
    const githubLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }



    const handleUpdateProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo

        })
    }



    //   create User 

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //   loging  Account 

    const signin = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    //   logOut account 

    const logOut = () => {
        return signOut(auth);

    }



    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            const userEmail = currentUser?.email || user?.email;
            const loggedUser = { email: userEmail };
            setUser(currentUser);
            console.log("current user", currentUser);
            setLoading(false);
            // if user exists then issue a token
            if (currentUser) {

                axios.post("https://assingment-server-11-henna.vercel.app/jwt", loggedUser, {
                    withCredentials: true,
                })
                    .then((res) => {
                        console.log("token response", res.data);
                    });
            } else {
                axios
                    .post("https://assingment-server-11-henna.vercel.app/logout", loggedUser, {
                        withCredentials: true,
                    })
                    .then((res) => {
                        console.log(res.data);
                    });
            }
        });
        return () => {
            return unsubscribe();
        };
    }, [user?.email]);










    // using Obseverb    ata  user ke  deka suna kore  

    // useEffect(() => {
    //     const unSubcribe = onAuthStateChanged(auth, (user) => {
    //         setUser(user);
    //        setLoading(false)

    //     });
    //     return () => {
    //         unSubcribe()

    //     }
    // }, []);

    // console.log(user);

    const authInformatiopn = {
        googleLogin,
        githubLogin,
        createUser,
        user,
        signin,
        logOut,
        loading,
        handleUpdateProfile,
    }

    return (
        <AuthContext.Provider value={authInformatiopn}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes
}


export default AuthProvider;

