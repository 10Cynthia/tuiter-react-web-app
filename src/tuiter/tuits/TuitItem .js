import React from "react";
import "./index.css";
import TuitBar from "./TuitStats ";
import { useDispatch } from "react-redux";
import {deleteTuitThunk} from "../../services/tuits-thunks";
// import { deleteTuit } from "./tuits-reducer";

const TuitItem = ({
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
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuitThunk(id));
  };

  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col-1 ">
          <img
            alt="avatar"
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
            <i className="bi bi-x-lg float-end"
            onClick={() => deleteTuitHandler(tuit._id)}></i>
          </div>
          <p className="ms-3 mt-1">{tuit.tuit}</p>

          <div className="mt-2 text-secondary wd-container-icon ms-3">
            <TuitBar tuit={tuit} />
          </div>

        </div>
      </div>
    </li>
  );
};
export default TuitItem;
