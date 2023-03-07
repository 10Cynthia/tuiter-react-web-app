import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import {
  faHouse,
  faHashtag,
  faBell,
  faEnvelope,
  faBookmark,
  faListUl,
  faUser,
  faEllipsis,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";

const NavigationSidebar = ({ }) => {
  const {pathname} = useLocation();
  const paths = pathname.split('/')
  const active = paths[2];
  return (
    <div className="list-group">
      <a className="list-group-item">
        <FontAwesomeIcon icon={faTwitter} />
        <span> Tuiter</span>
      </a>
      <Link
        to="/tuiter/home"
        className={`list-group-item ${active === "home" ? "active" : ""}`}
      >
        Home
      </Link>
      <Link
        to="/tuiter/explore"
        className={`list-group-item ${active === "explore" ? "active" : ""}`}
      >
        Explore
      </Link>
      <Link to="/" className="list-group-item">
        Labs
      </Link>
      <a
        className={`list-group-item
                    ${active === "home" ? "active" : ""}`}
      >
        <FontAwesomeIcon icon={faHouse} />
        <span> Home</span>
      </a>
      <a
        className={`list-group-item
                    ${active === "explore" ? "active" : ""}`}
      >
        <FontAwesomeIcon icon={faHashtag} />
        <span> Explore</span>
      </a>
      <a
        className={`list-group-item
                    ${active === "notifications" ? "active" : ""}`}
      >
        <FontAwesomeIcon icon={faBell} />
        <span> Notifications</span>
      </a>
      <a
        className={`list-group-item
                    ${active === "messages" ? "active" : ""}`}
      >
        <FontAwesomeIcon icon={faEnvelope} />
        <span> Messages</span>
      </a>
      <a
        className={`list-group-item
                    ${active === "bookmarks" ? "active" : ""}`}
      >
        <FontAwesomeIcon icon={faBookmark} />
        <span> Bookmarks</span>
      </a>
      <a
        className={`list-group-item
                    ${active === "lists" ? "active" : ""}`}
      >
        <FontAwesomeIcon icon={faListUl} />
        <span> Lists</span>
      </a>
      <a
        className={`list-group-item
                    ${active === "profile" ? "active" : ""}`}
      >
        <FontAwesomeIcon icon={faUser} />
        <span> Profile</span>
      </a>
      <a
        className={`list-group-item
                    ${active === "more" ? "active" : ""}`}
      >
        <FontAwesomeIcon icon={faEllipsis} />
        <span> More</span>
      </a>
    </div>
  );
};
export default NavigationSidebar;
