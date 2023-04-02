import { text } from "@fortawesome/fontawesome-svg-core";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import "./index.css";
import { updateProfile } from "./profile-reduser";

const EditProfile = () => {
  const profile = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const [user, setUser] = useState(profile);
  const profileChangeHandler = (key, event) => {
    const value = event.target.value;
    const newUser = {
      ...user,
      [key]: value,
    };
    setUser(newUser);
  };

  const saveProfileHandler = () => {
    dispatch(updateProfile(user));
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "5px",
        }}
      >
        <p className="fw-bolder" style={{marginBottom: 0}}>Edit Profile</p>
        <button onClick={saveProfileHandler} className="wd-save">
          Save
        </button>
      </div>
      <div className="wd-container">
        <img
          src={`/images/${profile.bannerPicture}`}
          style={{ width: "100%" }}
        ></img>
        <img
          src={`/images/${profile.profilePicture}`}
          className="wd-banner-position rounded-circle"
          style={{ width: "90px", height: "90px" }}
        ></img>
      </div>
      <div className="wd-edit-container">
        <label for="firstName" className="wd-label text-secondary ms-1 mt-1">
          FirstName
        </label>
        <input
          id="firstName"
          onChange={(event) => profileChangeHandler("firstName", event)}
          value={`${user.firstName}`}
          className="wd-input-container ms-1 mb-1"
        />
      </div>
      <div className="wd-edit-container">
        <label for="lastName" className="wd-label text-secondary ms-1 mt-1">
          LastName
        </label>
        <input
          id="lastName"
          onChange={(event) => profileChangeHandler("lastName", event)}
          value={`${user.lastName}`}
          className="wd-input-container ms-1 mb-1"
        />
      </div>
      <div className="wd-edit-container">
        <label for="bio" className="wd-label text-secondary ms-1 mt-1">
          Bio
        </label>
        <textarea
          id="bio"
          onChange={(event) => profileChangeHandler("bio", event)}
          className="wd-input-container ms-1 mb-1"
        >{`${user.bio}`}</textarea>
      </div>
      <div className="wd-edit-container">
        <label for="location" className="wd-label text-secondary ms-1 mt-1">
          Location
        </label>
        <input
          id="location"
          onChange={(event) => profileChangeHandler("location", event)}
          value={`${user.location}`}
          className="wd-input-container ms-1 mb-1"
        />
      </div>
      <div className="wd-edit-container">
        <label for="website" className="wd-label text-secondary ms-1 mt-1">
          Website
        </label>
        <input
          id="website"
          onChange={(event) => profileChangeHandler("website", event)}
          value={`${user.website}`}
          className="wd-input-container ms-1 mb-1"
        />
      </div>
      <div className="wd-edit-container">
        <label for="birthDate" className="wd-label text-secondary ms-1 mt-1">
          Birth Date
        </label>
        <input
          id="birthDate"
          onChange={(event) => profileChangeHandler("dateOfBirth", event)}
          value={`${user.dateOfBirth}`}
          className="wd-input-container ms-1 mb-1"
        />
      </div>
      </>

  );
};
export default EditProfile;
