import React from "react";
import { useSelector } from "react-redux";
import TuitItem from "./TuitItem ";
import TuitBar from "./TuitStats ";

const TuitList = () => {
  const tuitPosts = useSelector((state) => state.tuits);

  return (
    <>
      <h1>Home</h1>
      <ul className="list-group">
        {tuitPosts.map((tuit) => (
          <TuitItem key={tuit._id} tuit={tuit} />
        ))}
      </ul>
    </>
  );
};
export default TuitList;
