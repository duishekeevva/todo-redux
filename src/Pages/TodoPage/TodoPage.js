import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getTodos} from "../../redux/action/todoAction";
import AddForm from "../../components/AddForm/AddForm";
import TodoItem from "../../components/TodoItem/TodoItem";
import UserItem from "../../components/UserItem/UserItem";

const TodoPage = () => {
    const dispatch = useDispatch()
    const todos = useSelector(s => s.todo.todos)

    useEffect(() => {
        dispatch(getTodos())
    }, []);

    return (
        <div className={'todo-container'}>

            <table className="table table-hover">
                <thead>
                <AddForm/>
                <tr>
                    <th scope="col">Task</th>

                </tr>
                </thead>
                <tbody>
                {
                    todos.map((el,idx) =>
                        <TodoItem key={el.id} el={el} idx={idx} />
                    )
                }
                </tbody>
            </table>
        </div>
    )
};

export default TodoPage;