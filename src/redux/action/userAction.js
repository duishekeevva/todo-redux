import axios from "axios";
import {ADD_TODOS, EDIT_USER, GET_TODO, GET_USER, GET_USERS, REMOVE_USER} from "../types";

export const getUsers=() =>{
    return (dispatch) => {
        axios.get('https://65642480ceac41c0761d7ea7.mockapi.io/users')
          .then(({data}) => {
                dispatch({type: GET_USERS, payload: data})
            })
    }
}

export const removeUser=(id)=> {
    return (dispatch) => {
        axios.delete(`https://65642480ceac41c0761d7ea7.mockapi.io/users/${id}`)
         .then(({data}) => {
                dispatch({type: REMOVE_USER, payload: data.id})
            })
    }
}

export const editUser=(user)=> {
    return dispatch => {
        axios.put(`https://65642480ceac41c0761d7ea7.mockapi.io/users/${user.id}`, user)
        .then(({data}) => {
                dispatch({type: EDIT_USER, payload: data})
            })
    }
}

export const getUser = (user) => {
    return {type: GET_USER, payload: user}

}