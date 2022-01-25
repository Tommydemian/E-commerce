import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import FormInput from "../../components/form-input/FormInput";
import CustomButton from "../../components/custom-button/CustomButton";
import { AiOutlineEye } from "react-icons/ai";

import useInput from "../../hooks/useInput";

import "./SignUp.scss";

import { signUp, signInWithGoogle, auth, db } from "../../firebase/config";

import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import { doc, setDoc, serverTimestamp } from "firebase/firestore/lite";
import { toast } from "react-toastify";

const SignUp = ({currentUser}) => {

  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = formData;

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value, // Change the value based on the Id
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;

      updateProfile(auth.currentUser, {
        displayName: name,
      });

      const formDataCopy = { ...formData };
      delete formDataCopy.password;
      formDataCopy.timeStamp = serverTimestamp();

      await setDoc(doc(db, "users", user.uid), formDataCopy);

      /* navigate('/') */
    } catch (error) {
      toast.error("Something went wrong with registration");
    }
  };

  return (
    <div className="">
      <header>
        <p className="page-header">
          {" "}
          Great to have you {currentUser?.displayName}!
        </p>
      </header>

      <main className="main">
        <div className="c-su-form">
          <form onSubmit={handleSubmit} className="su-form">
            <div className="su-form__div">
              <label className="su-form__label">Name</label>
              <input
                type="text"
                className="su-form__input"
                placeholder="Name..."
                id="name"
                value={name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="su-form__div">
              <label className="su-form__label">Email</label>
              <input
                type="email"
                className="su-form__input"
                placeholder="Email..."
                id="email"
                value={email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="su-form__div">
              <label className="su-form__label">Password</label>
              <input
                className="su-form__input"
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

              <div className="buttons">
                <CustomButton onClick={handleSubmit} type="submit">
                  sign Up
                </CustomButton>
              </div>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default SignUp;
