import { createActions } from 'reduxsauce';
import { SET_SEARCH_DATA, FETCH_SEARCH_DATA  } from '../Constants'

export const  fetchSearchData = (value) => ({ type: FETCH_SEARCH_DATA, value });

export const  setSearchedData = (payload) => ({ type: SET_SEARCH_DATA, payload });

const { Types, Creators } = createActions({
    fetchSearchData: ['value'],
    setSearchData: ['payload']
});

const Actions = { Types, Creators };

export default Actions;
