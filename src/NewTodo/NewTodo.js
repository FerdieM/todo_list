import React, { useRef } from 'react';
import './NewTodo.css';

const NewTodo = (props) => {
  const taskInputRef = useRef();

  const addTaskHandler = (event) => {
    event.preventDefault();
    if (taskInputRef.current.value.trim().length === 0) {
      return;
    }
    props.onAddTask(taskInputRef.current.value);
    taskInputRef.current.value = '';
  };

  return (
    <div className="newWrapper">
      <form onSubmit={addTaskHandler} className="newTodo">
        <label htmlFor="task">New Todo</label>
        <input
          type="text"
          name="task"
          id="task"
          ref={taskInputRef}
          placeholder="New Todo"
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default NewTodo;
