import '../intro.css'

export function SignupFormPage({ hideSignupForm, signUp, nameRef, emailRef, passwordRef }){
    return (
        <div className="signup_form">
                <div className="close">
                    <div className="close_img_container">
                        <img className="close_img" src='../../src/assets/X.png' width={20} height={20} onClick={() => hideSignupForm()} />
                    </div>
                </div>
                <div className="create_account_text">
                    <div className="account_text">
                        Create Account
                    </div>
                    <div className="form_container">
                        <div className="form">
                            <div className="form_text_container">
                                <div className="form_text">
                                    Create Your Account
                                </div>
                            </div>
                            <div className="name">
                                <input type="text" placeholder="Username" className="name_input" maxLength={15} ref={nameRef} />
                            </div>
                            <div className="email">
                                <input type="email" placeholder="Email" className="email_input" ref={emailRef} />
                            </div>
                            <div className="password">
                                <input type="password" placeholder="Password" className="password_input" ref={passwordRef} />
                            </div>
                            <div className="form_create">
                                <button className="create_btn" onClick={signUp}>
                                    CREATE
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}