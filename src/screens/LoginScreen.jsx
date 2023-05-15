import React, { useState } from 'react'
import SignUpScreen from './SignUpScreen'
import "./Login.css"
const LoginScreen = () => {
  const [signIn, setSignIn] = useState(false)
  return (
    <div className='loginScreen'>
      <div className="loginScreen_background">
        <img className='loginScreen-logo'
         src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" />
         <button className='loginScreen-button'
         onClick={() => setSignIn(true)}
         >
          Sign In
         </button>
         <div className='loginScreen-gradient'/>
      </div>
      <div className="loginScreen-body">
      {signIn ?( <SignUpScreen/>
      ) :(
        <>
        <h1>
          Unlimited films, TV programmes and more.
        </h1>
        <h2>Watch anywhere. cancel at any time.</h2>
        <h3>
          Ready to watch? Enter your email to create or restart your membership.
        </h3>
        <div className="loginScreen-input">
          <form >
          <input type="Email"
          placeholder='Email Address'
          />
          <button className='loginScreen_getstarted'
          onClick={() => setSignIn(true)}
          >GET STARTED</button>
          </form>
        </div>
        </>
      ) }
      </div>
    </div>
  )
}

export default LoginScreen