import { useState, useEffect } from "react";
import FormInput from "../form-input/FormInput";
import CustomButton from "../custom-button/CustomButton"

import './SignIn.scss';


import { sign_up, signInWithGoogle, auth } from "../../firebase/config";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";


const SignIn = () => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState('')
  
  function login (){
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = setUser(userCredential.user) 
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  
  return (
    <div className="sign-in">
      <h2>I all ready have an account</h2>
      <span>Sign in with your email and password</span>
      <h1>current user is: {auth.currentUser?.email}</h1>

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
          <div className="buttons" >
        <CustomButton onClick={login} type="submit">sign in</CustomButton>
        <CustomButton onClick={signInWithGoogle} isGoogleSignedIn >sign in with google</CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
