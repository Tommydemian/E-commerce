import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import FormInput from "../../components/form-input/FormInput";
import CustomButton from "../../components/custom-button/CustomButton";
import { AiOutlineEye } from "react-icons/ai";

import { toast } from "react-toastify";


import "./SignIn.scss";

import { sign_up, signInWithGoogle, auth } from "../../firebase/config";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const navigate = useNavigate;

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value, // Change the value based on the Id
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      if (userCredential.user) {
        navigate("/");
      }
    } catch (error) {
     
      toast.error('Bad user Credentials')
    }
  };

  return (
    <div className="signIn__container">
      <header className='si__title'>
        <p className="page-header"> Log in please!</p>
      </header>

      <main className='main'>
        <div className="c-form" >
        <form className="si-form" onSubmit={handleSubmit}>

          <div className='si-form__div'>
          <label className="si-form__label" >Email</label>
          <input
            type="email"
            className="si-form__input"
            placeholder="Email..."
            id="email"
            value={email}
            onChange={handleChange}
            required
          />
          </div>

          <div className="si-form__div">
            <label className='si-form__label'>Password</label>
            <input
              className="si-form__input"
              type={showPassword ? "text" : "password"}
              placeholder="Password..."
              id="password"
              value={password}
              onChange={handleChange}
              required
            />
            {
              <AiOutlineEye
                className="show-icon"
                onClick={() => setShowPassword((prevState) => !prevState)}
              />
            }
            </div>

            <div className="buttons">
              <CustomButton onClick={''} type="submit">
                sign in
              </CustomButton>
              <CustomButton onClick={""} isGoogleSignedIn>
                sign in with google
              </CustomButton>
            </div>
        
            <Link to='/forgot-password' className="forgot-password-link">
              Forgot Password
            </Link>

        </form>
        </div>

      </main>
          
        <div className='sign-up-link__div'>
        <Link to='/sign-up' className="sign-up-link" >
        Sign up instead
        </Link>
        </div>
    </div>
  );
};

export default SignIn;
