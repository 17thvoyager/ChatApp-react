import { auth, provider } from '../firebase-config';
import { signInWithPopup } from 'firebase/auth'

import Cookies from "universal-cookie";
const cookies = new Cookies();

export const Auth = (props) => {
    const signInWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, provider)
            cookies.set("auth-token", result.user.refreshToken);    
            props.setIsAuth(true);
        } catch(err) {
            console.log(err)
        }
    };

    return (
        <div className="auth">
            <p> click here to sign in </p>
            <button onClick={signInWithGoogle}>Sign in with google</button>
        </div>
    );
};
