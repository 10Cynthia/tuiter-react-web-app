import React from "react";
import "./index.css";
import TuitBar from "./TuitStats ";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faMessage,
//   faRetweet,
//   faHeart,
//   faShare,
// } from "@fortawesome/free-solid-svg-icons";

const TuitItem = ({
  tuit = {
    "_id": 123,
    "topic": "Space",
    "userName": "SpaceX",
    "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
    "time": "2h",
    "image": "space.jfif",
    "liked": true,
    "replies": 123,
    "retuits": 432,
    "likes": 2345,
    "handle": "@spacex",
    "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
  },
}) => {
  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col-1 ">
          <img alt="avatar"
            className="rounded-circle wd-img mb-2"
            height={48}
            src={`/images/${tuit.image}`}
          />
        </div>
        <div className="col-11 position-relative">
          <div>
            <span className="fw-bold ms-3">{tuit.userName}</span>
            <i className="bi bi-check"></i>
            <span className="text-secondary">
              {" "}
              {tuit.handle} . {tuit.time}
            </span>
            
          </div>
          <p className="ms-3 mt-1">{tuit.tuit}</p>

          <div className="mt-2 text-secondary wd-container-icon ms-3">
            <TuitBar tuit={tuit}/>
          </div>
          
          {/* <div className="mt-2 text-secondary wd-container-icon ms-3">
            <div className="me-5">
              <FontAwesomeIcon icon={faMessage} className="me-2" />
              <span>{tuit.messageNum}</span>
            </div>
            <div className="me-5">
              <FontAwesomeIcon icon={faRetweet} className="me-2" />
              <span>{tuit.retweetNum}</span>
            </div>
            <div className="me-5">
              <FontAwesomeIcon icon={faHeart} className="me-2" />
              <span>{tuit.likeNum}</span>
            </div>
            <div className="me-5">
              <FontAwesomeIcon icon={faShare} className="me-2" />
            </div>

          
          </div> */}
        </div>
      </div>
    </li>
  );
};
export default TuitItem;
