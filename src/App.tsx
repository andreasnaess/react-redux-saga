import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from './actions';
import './App.css';
import { RootState } from './reducers';

function App() {
  const dispatch = useDispatch()
  const { users, loading, error } = useSelector((state: RootState) => state.users)
  useEffect(() => {
    dispatch(getUsers());
  }, []);

  const listItems = users.map(user =>
    <>
      <li>{user.name}</li>
      <li>{user.username}</li>
      <li>{user.email}</li>
      <br></br>
    </>
);

  return (
    <div className="App">
        <h1>Ello!</h1>
        { error ? error : <ul style={ { listStyle: "none" } }>{listItems}</ul> }
    </div>
  );
}

export default App;
