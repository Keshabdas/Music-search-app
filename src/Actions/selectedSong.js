import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
    getSelectedSong: ['payload'],
    setSelectedSong: ['payload']
});

const Actions = { Types, Creators };

export default Actions;