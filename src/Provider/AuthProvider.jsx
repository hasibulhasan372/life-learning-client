import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged,signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firbase.config";
import axios from "axios";
export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword ( auth, email, password);
    };
    const logIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword (auth, email, password)
    };

    const googleSignIn = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    };
    const updateProfileInfo = (name, photo) =>{
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo 
        })
    }
 
    useEffect(() =>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            if(currentUser?.email){
               
                axios.post(`${import.meta.env.VITE_LOCAL_HOST}/jwt`,{email: currentUser.email})
                .then(data =>{
                    localStorage.setItem("access-token", data.data.token);
                   
                })
            }
            else{
                localStorage.removeItem("access-token")
            }
            setLoading(false);
        });
        return ()=>{
            unSubscribe()
        }

    },[]);

    const logOut = ()=>{
        setLoading(true);
        return signOut(auth)
    };


    const authInfo ={
        user,
        loading,
        setLoading,
        updateProfileInfo,
        createUser,
        googleSignIn,
        logIn,
        logOut

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;