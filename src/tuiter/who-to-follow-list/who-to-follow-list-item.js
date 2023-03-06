import React from "react";
import './index.css';

const WhoToFollowListItem = ({
  who = { userName: "NASA", handle: "NASA", avatarIcon: "nasa.png" },
}) => {
  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col-2">
          <img
            className="rounded-circle wd-img mb-2"
            height={40}
            src={`/images/${who.avatarIcon}`}
          />
        </div>
        <div className="col-8">
          <div className="fw-bold">{who.userName}</div>
          <div>@{who.handle}</div>
        </div>
        <div className="col-2">
          <button className="btn btn-primary rounded-pill float-end">
            Follow
          </button>
        </div>
      </div>
    </li>
  );
};
export default WhoToFollowListItem;
