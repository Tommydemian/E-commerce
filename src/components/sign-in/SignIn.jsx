import { useState, useEffect } from "react";
import FormInput from "../form-input/FormInput";
import CustomButton from "../custom-button/CustomButton"

import { sign_up, signInWithGoogle, auth } from "../../firebase/config";

import './SignIn.scss';

import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log(user.email) 
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
  }
}); // Te da persistencia sobre el usuario logueado


const SignIn = () => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [currentUser, setCurrentUser] = useState('')
  
  function signIn (){
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user)
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

      <h1>current user is: {'user'?.email}</h1>

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

        <CustomButton onClick={signIn} type="submit">sign in</CustomButton>
        <CustomButton onClick={signInWithGoogle} >sign in with google</CustomButton>
      </form>
    </div>
  );
};

export default SignIn;
