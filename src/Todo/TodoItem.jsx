import React, { useState, useRef } from 'react';

import './TodoItem.css';

const TodoItem = (props) => {
  const [updStatus, setupdStatus] = useState(false);
  const [complete, setupComplete] = useState(false);
  const taskInputRef = useRef();

  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  const updateHandler = () => {
    setupdStatus(true);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onUpdate(taskInputRef.current.value, props.id);
    setupdStatus(false);
  };

  const toggleComplete = () => {
    setupComplete((prevState) => !prevState);
  };

  const context = (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        name="task"
        id="task"
        defaultValue={props.task}
        ref={taskInputRef}
      />
      <button type="submit">Save</button>
    </form>
  );

  return (
    <li className="todoitem">
      <div className="todoitem__actions">
        <button onClick={updateHandler}>Upd</button>
        <button onClick={deleteHandler}>Del</button>
      </div>
      <div className="todoitem__info">
        {!updStatus ? (
          <p
            className={`todoitem__task ${complete ? 'complete' : ''}`}
            id="todo__task"
            onClick={toggleComplete}
          >
            {props.task}
          </p>
        ) : (
          <div className="todoitem__task">{context}</div>
        )}
      </div>
    </li>
  );
};

export default TodoItem;
