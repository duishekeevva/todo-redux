import axios from "axios";
import {ADD_TODOS, EDIT_TODOS, GET_TODO, GET_TODOS, REMOVE_TODOS} from "../types";

export const getTodos = () => {
    return (dispatch) => {
        axios('https://658988ec324d4171525919ae.mockapi.io/todo')
            .then(({data}) => {
                dispatch({type: GET_TODOS, payload: data})
            })
    }
}

export const addTodo = (todo) => {
    return (dispatch) => {
        axios.post('https://658988ec324d4171525919ae.mockapi.io/todo', todo)
            .then(({data}) => {
                dispatch({type: ADD_TODOS, payload: data})
            })
    }
}

export const removeTodo = (id) => {
    return (dispatch) => {
        axios.delete(`https://658988ec324d4171525919ae.mockapi.io/todo/${id}`)
            .then(({data}) => {
                dispatch({type: REMOVE_TODOS, payload: data.id})
            })
    }
}

export const editTodo = (todo) => {
    return dispatch => {
        axios.put(`https://658988ec324d4171525919ae.mockapi.io/todo/${todo.id}`, todo)
            .then(({data}) => {
                dispatch({type: EDIT_TODOS, payload: data})
            })
    }
}

export const getTodo = (todo) => {
    return {type: GET_TODO, payload: todo}

}

