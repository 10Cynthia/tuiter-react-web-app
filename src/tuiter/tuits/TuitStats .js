import React from "react";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMessage,
  faRetweet,
  faHeart,
  faShare,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { tuitLikeToggle } from "./tuits-reducer";

const TuitBar = ({
  tuit = {
    _id: 123,
    topic: "Space",
    userName: "SpaceX",
    title:
      "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
    time: "2h",
    image: "space.jfif",
    liked: true,
    replies: 123,
    retuits: 432,
    likes: 2345,
    handle: "@spacex",
    tuit:
      "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars",
  },
}) => {
  const dispatch = useDispatch();
  const toggleLikedClicked = (tuit) => {
    dispatch(toggleLikedClicked(tuit));
  };
  const like = tuit.liked;

  return (
    <div className="mt-2 text-secondary wd-container-icon ms-3">
      <div className="col-3 me-5 float-start">
        <FontAwesomeIcon icon={faMessage} className="me-2" />
        <span>{tuit.replies}</span>
      </div>
      <div className="col-3 me-5 float-start">
        <FontAwesomeIcon icon={faRetweet} className="me-2" />
        <span>{tuit.retuits}</span>
      </div>
      <div className="col-3 me-5 float-start">
        <button style={{ border: 'none', background: 'none' }} onClick={() => tuitLikeToggle(tuit)}>
        <FontAwesomeIcon icon={faHeart} className="me-2" />
        </button>
        <span>{tuit.likes}</span>
      </div>
      <div className="col-3 me-5 float-start">
        <FontAwesomeIcon icon={faShare} className="me-2" />
      </div>
    </div>
  );
};
export default TuitBar;
