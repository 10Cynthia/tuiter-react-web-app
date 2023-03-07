import React from "react";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEllipsis,faMessage, faRetweet, faHeart, faShare} from '@fortawesome/free-solid-svg-icons'

const PostItem = ({
  homepost = {
    avatarIcon: "nasa.png",
    userName: "SpaceX",
    handle: "SpaceX",
    title:
      "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
    time: "23h",
    image: "starship.jpg",
    messageNum: "595",
    retweetNum: "1,168",
    likeNum: "11.1K"
  },
}) => {
  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col-1 ">
          <img
            className="rounded-circle wd-img mb-2"
            height={48}
            src={`/image/${homepost.avatarIcon}`}
          />
          
        </div>
        <div className="col-11 position-relative">
          <div>
            <span className="fw-bold ms-3">{homepost.userName}</span>
            <i className="bi bi-check"></i>
            <span className="text-secondary">
              {" "}
              @{homepost.handle} . {homepost.time}
            </span>
            <FontAwesomeIcon icon={faEllipsis} className='float-end text-secondary position-relative'/>
          </div>
          <p className="ms-3">{homepost.title}</p>
          <img
            className="wd-img-rounded-corner w-100 ms-3"
            src={`/images/${homepost.image}`}
          />
          <div className="mt-2 text-secondary ms-3">
          <FontAwesomeIcon icon={faMessage} className='me-3'/> <span className="me-5">{homepost.messageNum}</span>
          <FontAwesomeIcon icon={faRetweet} className='me-3'/><span className="me-5">{homepost.retweetNum}</span>
          <FontAwesomeIcon icon={faHeart} className='me-3'/><span className="me-5">{homepost.likeNum}</span>
          <FontAwesomeIcon icon={faShare} className='me-3'/>
          </div>

        </div>
      </div>
    </li>
  );
};
export default PostItem;
