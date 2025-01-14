import React, { useState } from 'react'
import { addUser } from '../redux/features/users/userSlice'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from "react-router-dom";

function CreateContact(){
  const [newUser, setNewUser] = useState({});
  const dispatch = useDispatch();

  const users = useSelector((state) => state.users.users);

  // const lastId = users[users.length-1].id;
  const lastId = useSelector((state) => state.users.lastId);

  const nameInputHandler = (e) => {
    setNewUser((prevState) =>  ({...prevState, name : e.target.value}));
  }

  const emailInputHandler = (e) => {
    setNewUser((prevState) =>  ({...prevState, email : e.target.value}));
  }

  const onClickHandler = () => {
    newUser.id = lastId + 1;
    dispatch(addUser(newUser));
  }

  return (
    <div className='flexCol full-page'>
        <input type="text" name="" id="" placeholder='Name' onChange={nameInputHandler}/>
        <input type="text" name="" id="" placeholder='Email' onChange={emailInputHandler}/>
        <Link to="/" className='addBtn' onClick={onClickHandler}> Create Contact </Link>
    </div>
  )
}

export default CreateContact