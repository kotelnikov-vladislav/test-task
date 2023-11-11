import { legacy_createStore as createStore } from 'redux'
import { Action, State, UserDetailedInfo } from './types';

const defaultState: State = {
    loginSelectedUser: 'github',
    isOpenUserDetails: false,

    savedUsers: JSON.parse(localStorage.users) as UserDetailedInfo[],
    foundUsers: []
};

const reducer = (state: State = defaultState, action: Action): State => {
    switch (action.type) {
        case 'SET_LOGIN_SELECTED_USER':
            return { ...state, isOpenUserDetails: true, loginSelectedUser: action.payload };
        case 'TOGGLE_IS_OPEN_USER_DETAILS':
            return { ...state, isOpenUserDetails: !state.isOpenUserDetails };
        case 'SET_SAVED_USERS':
            return { ...state, savedUsers: [...state.savedUsers, action.payload] };
        case 'UNSAVE_USER':
            return { ...state, savedUsers: state.savedUsers.filter(user => user.login !== action.payload) };
        case 'SET_FOUND_USERS':
            return { ...state, foundUsers: action.payload };
        default:
            return state;
    }
};


const store = createStore(reducer);

export default store;