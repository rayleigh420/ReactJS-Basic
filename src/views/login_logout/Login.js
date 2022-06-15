import React from 'react';
import { authentication } from './FirebaseConfig'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { withRouter } from 'react-router-dom'

class Login extends React.Component {


    SignInGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(authentication, provider)
            .then(res => {

                this.props.history.push('/')
                console.log('>>> Check res: ', res.user.displayName)
            })
    }

    render() {
        return (
            <button onClick={() => this.SignInGoogle()}>Sign in</button>
        )
    }
}

export default withRouter(Login); 