import React, { useContext, useState } from 'react';
import { UserContext } from './App';

function Todos() {
  const { username, setUsername } = useContext(UserContext);

  const [todos, setTodos] = useState([]);
  const [userInput, setUserInput] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInput.trim()) {
      const temp = {
        id: todos.length + 1,
        task: userInput.trim(),
        completed: false,
      };
      setTodos((prev) => [...prev, temp]);
    }
    console.log('submitted');
    setUsername('yesss');
  };

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="enter a task"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <button type="submit">Save Task</button>
      </form>
      {todos.length !== 0 && <h2>{username}'s Todo List</h2>}
      <ul>
        {todos.map((task) => {
          return <li key={task.id}>{task.task}</li>;
        })}
      </ul>
    </>
  );
}

export default Todos;
