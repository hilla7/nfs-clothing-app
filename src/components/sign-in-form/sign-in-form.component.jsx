import { useContext, useState } from "react";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import { createUserDocumentFromAuth, getUserFromAuth, signInUserWithEmailAndPassword, signInWithGooglePopup } from "../../utils/firebase/firebase.util";
import './sign-in-form.styles.scss';
import { UserContext } from "../../contexts/user.context";

const defaultFormFields = {
    email: '',
    password: ''
};

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const { setCurrentUser } = useContext(UserContext);

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        // const createdUser = await createUserDocumentFromAuth(user);
        // setCurrentUser(createdUser);
    }

    const buildErrorMessage = (error) => {
        switch (error.code) {
            case 'auth/wrong-password':
                return `you've entered wrong email/password, please try again`;
            case 'auth/user-not-found':
                return 'user does not exists';
            default: return 'error while trying to sign in';
        }
    }

    const handleFormSubmitted = async (event) => {
        event.preventDefault()
        try {
            const { user: userAuth } = await signInUserWithEmailAndPassword(email, password);
            // const user = await getUserFromAuth(userAuth);
            // setCurrentUser(user);
            alert('sign in successfully :)')
            resetFormFields();
        } catch (error) {
            let errorMessage = buildErrorMessage(error);
            console.error(errorMessage, error?.message);
            alert(errorMessage)
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    }

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    return (
        <div className="sign-in-form-container">
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleFormSubmitted}>
                <FormInput label="Email" required type="email" value={email} name="email" id="sign-in-email" onChange={handleChange}></FormInput>
                <FormInput label="Password" required type='password' minLength="6" value={password} name="password" id="sign-in-password" onChange={handleChange}></FormInput>
                <div className="buttons-container">
                    <Button type='submit'>SIGN IN</Button>
                    <Button buttonType={'google'} type="button" onClick={logGoogleUser}>
                        GOOGLE SIGN IN
                    </Button>
                </div>
            </form>
        </div>);
}

export default SignInForm;
