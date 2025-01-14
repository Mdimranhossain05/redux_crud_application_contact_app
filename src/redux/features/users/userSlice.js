import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  users : [
    {id: 1, name: "Imran", email: "imran@mail.com"},
    {id: 2, name: "Rubel", email: "rubel@mail.com"}
], lastId: 2
}

export const counterSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
      state.lastId+=1;
    },
    editUser: (state, action) => {
      const {id, name, email} = action.payload;
      const oldUser = state.users.find((user) => user.id == id);
      if(oldUser){
        oldUser.name = name;
        oldUser.email = email;
      }
    },
    deleteUser: (state, action) => {
      const id = action.payload;
      const oldUser = state.users.find((user) => user.id == id);
      if(oldUser){
        const users = JSON.parse(JSON.stringify(state.users))
        state.users = users.filter((user) => user.id != id)
      }
      if(!state.users){
        state.users = []
      }
    }
  },
})

// Action creators are generated for each case reducer function
export const { addUser, editUser, deleteUser } = counterSlice.actions;

export default counterSlice.reducer;