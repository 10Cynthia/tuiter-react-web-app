import React from "react";
import { useSelector } from "react-redux";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLandmark,
  faBabyCarriage,
  faCalendar,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const ProfileComponent = () => {
  const profile = useSelector((state) => state.profile);

  return (
    <>
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
        <Link to="/tuiter/edit-profile">
          <button className="float-end wd-button fw-bolder">Edit Profile</button>
        </Link>
      </div>
      <div className="wd-container-text ">
        <p>
          <span className="fw-bolder wd-name">
          {profile.firstName} {profile.lastName}{" "}
          </span>
          <br />
          <span className="text-secondary wd-handler">{profile.handle}</span>
        </p>
        <p className="wd-text">{profile.bio}</p>
        <p className="wd-text text-secondary">
          <FontAwesomeIcon icon={faLandmark} className="me-1" />{" "}
          <span className="me-4">{profile.location}</span>
          <FontAwesomeIcon icon={faBabyCarriage} className="me-1" />{" "}
          <span className="me-4">{profile.dateOfBirth}</span>
          <FontAwesomeIcon icon={faCalendar} className="me-1" />{" "}
          <span className="me-4">{profile.dateJoined}</span>
        </p>
        <p>
          <span className="wd-text fw-bolder">{profile.followingCount}</span> <span className="text-secondary me-3">Following</span>  
          <span className="wd-text fw-bolder">{profile.followersCount}</span> <span className="text-secondary">Followers</span>
        </p>
      </div>
    </>
  );
};
export default ProfileComponent;
