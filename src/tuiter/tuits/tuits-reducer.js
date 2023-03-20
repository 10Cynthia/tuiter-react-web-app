import { createSlice } from "@reduxjs/toolkit";
import tuits from './tuits.json';

const tuitsSlice = createSlice({
 name: 'tuits',
 initialState: tuits,
 reducers: {
    tuitLikeToggle(state, action) {
        const tuit = state.find((tuit) =>
        tuit._id == action.payload._id)
        tuit.liked = !tuit.liked
    }
 }
});

export const {tuitLikeToggle} = tuitsSlice.actions;
export default tuitsSlice.reducer;