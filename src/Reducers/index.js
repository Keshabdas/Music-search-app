import { combineReducers } from "redux";
import SearchReducer from "./SearchReducer";
import selectedSongReducer from "./selectedSongReducer";

const rootReducers = combineReducers({
    searchData:  SearchReducer,
    selectedSong: selectedSongReducer,
})

export default rootReducers;