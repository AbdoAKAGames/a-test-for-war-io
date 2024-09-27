import '../intro.css'
import { Intro } from './intro';
import { MainPage } from './mainPage';
import { useState, useRef, useCallback, useMemo, useEffect } from 'react'

export function SignupPage({ signupForm, showSignup, hideSignupForm, signUp, nameRef, emailRef, passwordRef }){
    

    return (
        <>
        <Intro />
        <MainPage signupForm={signupForm} showSignup={showSignup} hideSignupForm={hideSignupForm} signUp={signUp} nameRef={nameRef} emailRef={emailRef} passwordRef={passwordRef} />
        </>
    )
}