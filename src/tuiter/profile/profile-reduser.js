import { createSlice } from "@reduxjs/toolkit";

const user = 
  {
    firstName: "Jose",
    lastName: "Annunziato",
    handle: "@jannunzi",
    profilePicture: "react.png",
    bannerPicture: "banner.jpg",
    bio:
      "Faculty, Software Engineer, AI, Space, and renewable enthusiast.Retuits and likes are not endorsements.",
    website: "youtube.com/webdevtv",
    location: "Boston, MA",
    dateOfBirth: "7/7/1968",
    dateJoined: "4/2009",
    followingCount: 340,
    followersCount: 223,
  }

const profileSlice = createSlice({
  name: "user",
  initialState: user,
  reducers: {
    updateProfile(state, action) {
      console.log(action.payload)
      return action.payload
    },
  //   todoDoneToggle(state, action) {
  //     const todo = state.find((todo) =>
  //           todo._id === action.payload._id)
  //     todo.done = !todo.done

  // }

 }})

export const { updateProfile} = profileSlice.actions;
export default profileSlice.reducer;
