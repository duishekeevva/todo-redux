import React, {useState} from 'react';
import {editUser} from "../../redux/action/userAction";
import {useDispatch, useSelector} from "react-redux";

const Modal = ({id, setId}) => {
    const currentUser = useSelector(state => state.user.users.find(user => user.id === id))
    console.log(id, 'idddddd')
    const [name, setName] = useState(currentUser.name)
    const [email, setEmail] = useState(currentUser.email)
    const [phone, setPhone] = useState(currentUser.phone)
    const [address, setAddress] = useState(currentUser.address)
    const [job, setJob] = useState(currentUser.job)
    const dispatch = useDispatch()
    const handleSaveUser = () => {
        const newUser = {...currentUser, name: name, email: email, phone: phone, address: address, job: job}
        dispatch(editUser(newUser))
        setId("")
    }
    return (
        <thead className={id ? 'modal active' : 'modal'} onClick={() => setId(false)}>
        <tr onClick={e => e.stopPropagation()} className={id ? 'modal-content active' : 'modal-content'}>
            <td><h1 style={{textAlign:'center'}}>Modal</h1></td>
            <td><p>Name:</p>  <input type="text" defaultValue={currentUser?.name || ''}
                                     onChange={(e) => setName(e.target.value)}/></td>
            <td><p>Email:</p>  <input type="text" defaultValue={currentUser?.email || ''}
                                      onChange={(e) => setEmail(e.target.value)}/></td>
            <td><p>Phone:</p>  <input type="text" defaultValue={currentUser?.phone || ''}
                                      onChange={(e) => setPhone(e.target.value)}/></td>
            <td><p>Address:</p> <input type="text" defaultValue={currentUser?.address || ''}
                                       onChange={(e) => setAddress(e.target.value)}/></td>
            <td><p>Job:</p> <input type="text" defaultValue={currentUser?.job || ''}
                                   onChange={(e) => setJob(e.target.value)}/></td>
            <td className={'save-close-btn'}>
                <button className={'btn btn-success'} onClick={handleSaveUser}>SAVE CHANGES</button>
                <button className={'btn btn-secondary'} onClick={() => setId("")}>CLOSE</button>
            </td>

        </tr>

        </thead>
    );
};

export default Modal;