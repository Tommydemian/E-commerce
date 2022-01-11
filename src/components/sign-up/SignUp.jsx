import React, { useState } from 'react'
import CustomButton from '../custom-button/CustomButton'
import FormInput from '../form-input/FormInput'

import './SignUp.scss'

import { createUserWithEmailAndPassword } from 'firebase/auth'
import {auth} from '../../firebase/config' 

const SignUp = () => {


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = () =>{

    }
 
    const handleSignUp = (e) =>{
       e.preventDefault()
       createUserWithEmailAndPassword(auth, email, password)
       .then((userCredentials) =>{
           //Signed in 
           const user = userCredentials.user
           console.log(user)
       }).catch((error) =>{
        const errorCode = error.code;
        const errorMessage = error.message;
       })
        }

    


    return (
        <div className="sign-up">
      <h2>I all ready have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <FormInput
          type="email"
          name="email"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label>Password</label>
        <FormInput
          type="password"
          name="password"
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <CustomButton onClick={handleSignUp} type="submit">sign up</CustomButton>
       {/*  <CustomButton onClick={handleSignUp} ></CustomButton> */}
      </form>
    </div>
    )
}

export default SignUp