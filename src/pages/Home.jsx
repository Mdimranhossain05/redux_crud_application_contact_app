import "../App.css"
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { deleteUser } from '../redux/features/users/userSlice'


function Home() {
   
  const users = useSelector((state) => state.users.users);

  const dispatch = useDispatch();

  const deleteOnClickHandler = (id) => {
    dispatch(deleteUser(id));
  }

  return (
    <>
      <p className="large-title">React Redux Contact App</p>

      <Link to="/create"> <button className="createBtn">Create+</button> </Link>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td> <Link to={`/edit/${user.id}`} > <button className="editBtn">Edit</button> </Link> <button onClick={() => deleteOnClickHandler(user.id)} className="deleteBtn">Delete</button> </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default Home
