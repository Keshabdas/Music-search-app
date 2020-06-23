import { call, put, takeLatest } from "redux-saga/effects";
import Api from '../Api/api'

import SearchActions from '../Actions/Search';
import SelectedSongActions from '../Actions/selectedSong';

function* fetchSearchData(action) {
    try {
        const payload = yield call(getData, action.value);
        yield put(SearchActions.Creators.setSearchData(payload));
    } catch (e) {
        console.log(e);
    }
}

function* setSelectedData(action) {
    try {
        yield put(SelectedSongActions.Creators.setSelectedSong(action.payload));
    } catch (e) {
        console.log(e)
    }
}

async function getData(arg) {
    const response = await Api.get(`/search?term=${arg}`);
    return await response.data;
}

export default function* mySaga() {
  yield takeLatest(SearchActions.Types.FETCH_SEARCH_DATA, fetchSearchData);
  yield takeLatest(SelectedSongActions.Types.GET_SELECTED_SONG, setSelectedData);
}