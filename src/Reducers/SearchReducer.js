import { createReducer } from 'reduxsauce'
import SearchActions from '../Actions/Search';

// the initial state of this reducer
export const INITIAL_STATE = { data : [] }

// the eagle has landed
export const setSearchData = (state = INITIAL_STATE, action) => {
  return { ...state, data : action.payload }
}

// map our action types to our reducer functions
export const HANDLERS = {
  [SearchActions.Types.SET_SEARCH_DATA]: setSearchData,
}

const SearchReducer = createReducer(INITIAL_STATE, HANDLERS);

export default SearchReducer;