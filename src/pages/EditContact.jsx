import React, { useState } from 'react'
import { editUser } from '../redux/features/users/userSlice'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useParams } from "react-router-dom";

function EditContact() {

    const paramId = useParams();

    const oldUser = useSelector((state) => state.users.users.find((user)=> user.id == paramId.id));

    const [editedUser, setEditedUser] = useState({id: oldUser.id, name: oldUser.name, email: oldUser.email});
    const dispatch = useDispatch();

    const nameInputHandler = (e) => {
        setEditedUser((prevState) => ({ ...prevState, name: e.target.value }));
    }

    const emailInputHandler = (e) => {
        setEditedUser((prevState) => ({ ...prevState, email: e.target.value }));
    }

    const onClickHandler = () => {
        dispatch(editUser(editedUser));
    }
    return (
        <div className='flexCol full-page'>
            <input type="text" name="" id="" placeholder='Name' onChange={nameInputHandler} value={editedUser.name}/>
            <input type="text" name="" id="" placeholder='Email' onChange={emailInputHandler} value={editedUser.email}/>
            <Link to="/" className='addBtn' onClick={onClickHandler}> Update Contact </Link>
        </div>
    )
}

export default EditContact