import React from "react";
import homepostsArray from "./home-posts.json";
import PostItem from "./postItem";

const HomeComponent = () => {
 return(
   <ul className="list-group">
     {
       homepostsArray.map(homepost =>
         <PostItem
           key={homepost._id} homepost={homepost}/> )
     }
   </ul>
 );
};
export default HomeComponent;
