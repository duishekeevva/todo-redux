import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {addTodo, deleteTodo, editTodo, getTodos} from "./redux/action/todoAction";

const App = () => {
    const dispatch = useDispatch()
    const todosArray = useSelector(state => state.todos)
    const [todo, setTodo] = useState({})
    const [edit, setEdit] = useState(false)

    useEffect(() => {
        dispatch(getTodos(todos))
    }, []);

    const handeAddTodo = () => {
        const data = {id: todosArray.length + 1, title: todo.title, completed: false}
        dispatch(addTodo(data))
        setTodo({})
    }

    const handleDelete=(id)=> {
        dispatch(deleteTodo(id))
    }

    const handleEdit=(todo)=> {
        dispatch(editTodo(todo))
    }

    const handleCompleted=()=> {
    }
    return (
        <div>
            <input type="text" value={todo.title || ''} onChange={(e) => setTodo({...todo, title: e.target.value})}/>
            <button onClick={handeAddTodo}>Add</button>

            {
                todosArray.map(todo =>
                    <div key={todo.id} style={{display: 'flex', gap: '10px', alignItems: 'center'}}>
                        <h3>{todo.title}</h3>
                        <input onChange={handleCompleted} type="checkbox" checked={todo.completed}/>
                        <button onClick={() => handleEdit(todo)}>{edit?'Save':'Edit'}</button>
                        <button onClick={()=>handleDelete(todo.id)}><i className='bx bxs-trash'></i></button>
                    </div>
                )
            }
        </div>
    );
}

export default App;

const todos = [
    {
        id: 1,
        title: 'Buy milk',
        completed: false
    },
    {
        id: 2,
        title: 'Buy eggs',
        completed: false
    },
    {
        id: 3,
        title: 'Buy bread',
        completed: false
    },
    {
        id: 4,
        title: 'Buy butter',
        completed: false
    }
]