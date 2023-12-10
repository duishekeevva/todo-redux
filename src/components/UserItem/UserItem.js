import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {editUser, getUser, removeUser} from "../../redux/action/userAction";
import {getTodo} from "../../redux/action/todoAction";
import Modal from "../Modal/Modal";

const UserItem = ({el}) => {
    const dispatch = useDispatch()
    const [edit, setEdit] = useState(false)

    const handleRemoveUser = (id) => {
        dispatch(removeUser(el.id))
    }

    const handleEditUser = () => {
        setEdit(el)
        dispatch(getUser(el))
    }

    console.log(el)
    return (
        <tr className={'user-container'}>
                <td>{el.name}</td>
                <td>{el.email}</td>
                <td>{el.phone}</td>
                <td>{el.address}</td>
                <td>{el.job}</td>

                <td className={'delete-edit-btn'}>
                    <button className={'btn btn-primary'} onClick={handleEditUser}>EDIT</button>
                    <button className={'btn btn-danger'} onClick={handleRemoveUser}>DELETE</button>
                </td>
                {
                    edit &&
                    <Modal id={el.id} setId={setEdit}/>
                }
        </tr>

    );
};

export default UserItem;