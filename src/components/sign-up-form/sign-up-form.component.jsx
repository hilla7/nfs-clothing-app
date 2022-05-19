import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.util";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import './sign-up-form.styles.scss';

const SignUpForm = () => {

    const defaultFormFields = {
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
    }
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const handleChange = (event) => {
        const { name, value } = event?.target;
        setFormFields({ ...formFields, [name]: value });
    }

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleFormSubmitted = async (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            alert('password & confirm password fields are not compatible, please try again')
            return;
        }

        try {
            const { user: userAuth } = await createAuthUserWithEmailAndPassword(email, password);
            const user = await createUserDocumentFromAuth(userAuth, { displayName });
            // setCurrentUser(user);
            resetFormFields();
            alert('sign up successfully :)')

        } catch (e) {
            if (e?.code === 'auth/email-already-in-use') {
                alert('email is already in use, sign in or try another one')
            }
            console.error('error while trying to create userAuth', e);
        }
    }

    return (
        <div className="sign-up-form-container">
            <h2>Don't have an account? </h2>
            <span>Sign up with your email and password</span>
            <form className="sign-up-form" onSubmit={handleFormSubmitted}>
                <FormInput label="Display Name" id="displayName" name="displayName" type="text" required value={displayName} onChange={handleChange} />
                <FormInput label="Email" id="email" name="email" type="email" required value={email} onChange={handleChange} />
                <FormInput label="Password" id="password" minLength="6" name="password" type="password" required value={password} onChange={handleChange} />
                <FormInput label="Confirm Password" id="confirmPassword" minLength="6" name="confirmPassword" type="password" required value={confirmPassword} onChange={handleChange} />
                <Button type="submit">Sign Up</Button>
            </form>
        </div>
    );
}

export default SignUpForm;
