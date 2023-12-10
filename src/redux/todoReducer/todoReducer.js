import {ADD_TODOS, EDIT_TODOS, GET_TODO, GET_TODOS, REMOVE_TODOS} from "../types";
const initialState ={
    todos:[],
    todo:{}
}

export const todoReducer=(state=initialState, action)=>{
    switch (action.type) {
        case GET_TODOS:
            return {...state, todos:action.payload}
        case ADD_TODOS:
            return {...state, todos: [...state.todos, action.payload]}
        case REMOVE_TODOS:
            return {...state, todos: state.todos.filter(todo=>todo.id!==action.payload)}
        case EDIT_TODOS:
            return {...state, todos: state.todos.map(todo => todo.id === action.payload.id ? action.payload:todo)}
        case GET_TODO:
            return {...state, todo:action.payload}
        default:
            return state
    }
}