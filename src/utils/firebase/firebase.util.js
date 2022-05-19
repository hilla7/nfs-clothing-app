// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";
import appConsts from "../../constants/app.const";

const { firebaseConfig } = appConsts;

const firebaseApp = initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: 'select_account'
})

const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalProperties = {}) => {

    if (!userAuth) {
        console.error('userAuth can not be undefined');
        return;
    }

    const userDocRef = doc(db, 'users', userAuth.uid);
    let userSnapshot = await getDoc(userDocRef);

    if (userSnapshot.exists()) {
        console.log(`user ${userAuth.email} exists, returning the user doc`)
        return userSnapshot.data();
    }

    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
        await setDoc(userDocRef, { displayName, createdAt, email, ...additionalProperties });
        console.log(`user ${email} created successfully`)
    } catch (error) {
        console.error('error creating the user', error.message);
    }

    userSnapshot = await getDoc(userDocRef);

    return userSnapshot.data();
}

export const createAuthUserWithEmailAndPassword = (email, password) => {
    if (!email || !password) {
        console.error('email and password can not be undefined');
        return;
    }

    return createUserWithEmailAndPassword(auth, email, password);
}

export const signInUserWithEmailAndPassword = (email, password) => {
    if (!email || !password) {
        console.error('email and password can not be undefined');
        return;
    }

    return signInWithEmailAndPassword(auth, email, password);

}

export const getUserFromAuth = async (userAuth) => {
    if (!userAuth) {
        console.error('userAuth can not be undefined');
        return;
    }

    const userDocRef = doc(db, "users", userAuth.uid);
    const userDocSnapshot = await getDoc(userDocRef);

    if (!userDocSnapshot.exists()) {
        console.error(`user ${userAuth.uid} not found!`);
    }

    return userDocSnapshot.data();
}

export const signOutUser = () => signOut(auth);

export const onAuthStateChangeListener = (callback) => onAuthStateChanged(auth, callback)
