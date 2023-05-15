import React, { useState } from 'react'
import "./SignUp.css"
import { auth } from '../firebase'
const SignUpScreen = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const register = (e)=> {
    e.preventDefault()
    auth.createUserWithEmailAndPassword(
      email, 
      password
      ).then(authUser => {
        console.log(authUser)
      }).catch(err => {
        alert(err.message)
      })
  }
  const signIn = (e) => {
    e.preventDefault()
    auth.signInWithEmailAndPassword(email, password)
    .then(authUser => console.log(authUser))
    .catch(err => console.log(err.messsage))
  }
  return (
    <div className='signUpScreen'>
      <form>
       <h1>Sign Up</h1> 
       <input type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
       <input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)}/>
       <button onClick={signIn}>Sign In</button>
       <h4><span className='signupScreen-gary'>New to netflix? </span>
       <span className='signupScreen-link' onClick={register}>SignUp Now</span></h4>
      </form>
      
    </div>
  )
}

export default SignUpScreen