import '../intro.css'
import { SignupFormPage } from './signupForm'

export function MainPage({ signupForm, showSignup, hideSignupForm, signUp, nameRef, emailRef, passwordRef }){
    return (
        <div id="signup-app">
        <div className="title">
            <div className="game_name2">
                <div className="game_name_text">
                    War.io
                </div>
            </div>
        </div>
        <div className="signup">
            <div className="create_account">
                <div className="create_text">
                    <div className="text">
                        Create A New <span>WAR</span> Account
                    </div>
                </div>
                <div className="create">
                    <button className="create_btn" onClick={() => showSignup()}>
                        CREATE ACCOUNT
                    </button>
                </div>
            </div>
            {signupForm ? <SignupFormPage hideSignupForm={hideSignupForm} signUp={signUp}  nameRef={nameRef} emailRef={emailRef} passwordRef={passwordRef} /> : <></>}
        </div>
        </div>
    )
}