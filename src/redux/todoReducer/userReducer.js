import {EDIT_USER, GET_USER, GET_USERS, REMOVE_USER} from "../types";

const initialState = {
    users: [],
    user:{}
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS:
            return {...state, users: action.payload}
        case REMOVE_USER:
            return {...state, users: state.users.filter(user => user.id !== action.payload)}
        case EDIT_USER:
            return {...state, users: state.users.map(user => user.id === action.payload.id ? action.payload : user)}
        case GET_USER:
            return {...state, user: action.payload}
        default:
            return state
    }
}