import React, {useState} from 'react';
import {editTodo, getTodo, removeTodo} from "../../redux/action/todoAction";
import {useDispatch} from "react-redux";

const TodoItem = ({el,idx}) => {
    const dispatch=useDispatch()
    const [edit, setEdit]=useState({})

    const handleRemove=(id) => {
        dispatch(removeTodo(el.id))
    }

    const handleEdit=() => {
        setEdit(el)
        dispatch(getTodo(el))
    }

    const handleSave=() => {
        dispatch(editTodo(edit))
        setEdit({})
    }
    return (
        <tr className={'todo-item'}>
                {
                    edit.id ?
                      <td> <input value={edit.title || ''}  onChange={(e)=>setEdit({...edit, title:e.target.value})} type="text"/></td>
                        :<td>{el.title}</td>
                }
                <td className={'edit-delete-todo'}>
                    <button className={'btn btn-primary'} onClick={edit.id? handleSave : handleEdit}>{edit.id ? <i className='bx bxs-save' ></i> : <i class='bx bxs-edit-alt' ></i>}</button>
                    <button className={'btn btn-danger'} onClick={handleRemove}><i className='bx bx-trash'></i></button>
                </td>
        </tr>
    );
};

export default TodoItem;