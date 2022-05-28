import { createContext, useEffect, useState } from "react";
import { createUserDocumentFromAuth, onAuthStateChangeListener } from "../utils/firebase/firebase.util";

// the actual value you want to access.
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = { currentUser, setCurrentUser };

    useEffect(() => {
        const unsubscribe = onAuthStateChangeListener(async (userAuth) => {
            let user = null;
            if (userAuth) {
                user = await createUserDocumentFromAuth(userAuth);
            }
            setCurrentUser(user);
            console.log('logged-in user:', userAuth?.email);
        });
        return unsubscribe;
    }, []);
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
