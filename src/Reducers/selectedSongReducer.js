import { createReducer } from 'reduxsauce'
import SelectedSongActions from '../Actions/selectedSong';

// the initial state of this reducer
export const INITIAL_STATE = { song : {} }

export const setSelectedSong = (state = INITIAL_STATE, action) => {
  return { ...state, song : action.payload }
}

// map our action types to our reducer functions
export const HANDLERS = {
  [SelectedSongActions.Types.SET_SELECTED_SONG]: setSelectedSong,
}

const selectedSongReducer = createReducer(INITIAL_STATE, HANDLERS);


export default selectedSongReducer;