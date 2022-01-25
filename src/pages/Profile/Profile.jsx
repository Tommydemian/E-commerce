import React, { useState } from "react";
import { auth, db } from "../../firebase/config";
import { useNavigate } from "react-router-dom";
import { updateDoc } from "firebase/firestore/lite";
import { updateProfile } from "firebase/auth";

import "./Profile.scss";

const Profile = () => {
  const [changeDetails, setChangeDetails] = useState(false);

  const [formData, setFormData] = useState({
    name: auth.currentUser?.displayName,
    email: auth.currentUser?.email,
  });

  const { name, email } = formData;

  const navigate = useNavigate();

  const logout = () => {
    auth.signOut();
    navigate("/");
  };

  const onSubmit = () => {
    console.log("yaa");
  };

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  return (
    <div className="profile__div">
      <header className="profile__header">
        <p className="profile__header-text">My Profile</p>
        <button className="logout" onclick={logout}>
          Log Out
        </button>
      </header>

      <main>
        <div className="profile__details-header" >
          <p className="profile__details-text" >Personal Details</p>
          <p
            className="change-personal-details"
            onClick={() => {
              changeDetails && onSubmit();
              setChangeDetails((prevState) => !prevState);
            }}
          >
            {changeDetails ? "done" : "change"}
          </p>
        </div>

        <div className='profile__card'>
          <form>
            <div>
              <input
                type="text"
                id="name"
                className={!changeDetails ? "profile__name" : "profile__name-active"}
                disabled={!changeDetails}
                value={name}
                onchange={handleChange}
              />
            </div>

            <div>
              <input
                type="email"
                id="email"
                className={!changeDetails ? "profile__email" : "profile__email-active"}
                disabled={!changeDetails}
                value={email}
                onchange={handleChange}
              />
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Profile;
