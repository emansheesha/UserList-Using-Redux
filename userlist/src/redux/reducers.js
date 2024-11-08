import { ADD_USER, FAVORITE, GET_ERROR, GET_USERS } from "./types";

const initialState = {
    users: [],
    favorites: [],
    error: '',
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS:
            return { ...state, users: action.payload, error: '' };
        case ADD_USER:
            return { ...state, users: [action.payload, ...state.users], error: '' };
        case GET_ERROR:
            return { ...state, error: action.payload };
        case FAVORITE:
            return {
                ...state,
                favorites: state.favorites.includes(action.payload)
                    ? state.favorites.filter((id) => id !== action.payload)
                    : [...state.favorites, action.payload],
            };
        default:
            return state;
    }
};

export default userReducer;