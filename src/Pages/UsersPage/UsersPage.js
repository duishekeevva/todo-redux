import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getUsers} from "../../redux/action/userAction";
import UserItem from "../../components/UserItem/UserItem";
import {addTodo} from "../../redux/action/todoAction";

const UsersPage = () => {
    const dispatch = useDispatch()
    const users = useSelector(s => s.user.users)

    useEffect(() => {
        dispatch(getUsers())
    }, []);

    return (
        <div className={'user-container'}>
            <table className="table table-hover">
                <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Address</th>
                    <th scope="col">Job</th>
                </tr>
                </thead>
                <tbody>
                {
                        users.map(el =>
                            <UserItem key={el.id} el={el}/>
                        )
                }
                </tbody>
            </table>


        </div>
    );
};

export default UsersPage;