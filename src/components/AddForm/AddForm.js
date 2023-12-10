import React, {useState} from 'react';
import {addTodo} from "../../redux/action/todoAction";
import {useDispatch} from "react-redux";

const AddForm = () => {
    const [newTodo, setNewTodo] = useState('')
    const dispatch = useDispatch()

    const handleAddTodo = () => {
        const obj = {
            title: newTodo,
            'completed': false,
            'createAt': +new Date(),
            'completedAt': null
        }
        setNewTodo('')
        dispatch(addTodo(obj))
    }
    return (
        <div className={'add-todo'}>
            <input value={newTodo} onChange={(e) => setNewTodo(e.target.value)} type="text"/>
            <button style={{padding: '6px 15px',
                borderRadius: '0.375rem',
                border:'none',
                backgroundColor: '#198754',
                color: '#fff'}} onClick={handleAddTodo}>Add</button>
        </div>
    );
};

export default AddForm;