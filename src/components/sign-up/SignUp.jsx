import React, { useState } from "react";
import CustomButton from "../custom-button/CustomButton";
import FormInput from "../form-input/FormInput";

import "./SignUp.scss";

import { createUserWithEmailAndPassword, onAuthStateChanged, signOut} from "firebase/auth";
import { auth } from "../../firebase/config"; // esta variable contiene info del user logueado

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({});

  const handleSubmit = () => {};

  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        //Signed in
        const user = userCredentials.user; // Creando al usuario => Consecuencia del createUserWithEmailAndPassword
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message; // Podria ser un email que no es formato de email. De todos modos es mas util en el Login
      });
  };

  onAuthStateChanged(auth, (currentUser)=>{
    setUser(currentUser)
  })

  const logout = async () =>{
    await signOut(auth)
  }

  return (
    <div className="sign-up">
      <h2>I all ready have an account</h2>


      <h3>The user logued in is {user?.email}</h3>

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

        <CustomButton onClick={register} type="submit">
          sign up
        </CustomButton>
     <CustomButton onClick={logout} >SIGN OUT</CustomButton> 
      </form>
    </div>
  );
};

export default SignUp;
