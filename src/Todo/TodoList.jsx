import { useState } from 'react';
import uuid from 'uuid/v4';
import NewTodo from '../NewTodo/NewTodo';

import './TodoList.css';
import TodoItem from './TodoItem';

const TodoList = (props) => {
  const [todos, setTodos] = useState([
    { task: 'Write A Book', id: uuid() },
    { task: 'Buy A Chair', id: uuid() },
  ]);

  const addTaskHandler = (enteredTask) => {
    setTodos((prevTasks) => {
      const updatedTasks = [...prevTasks];
      updatedTasks.unshift({ task: enteredTask, id: uuid() });
      return updatedTasks;
    });
  };

  const delItemHandler = (taskId) => {
    setTodos((prevTasks) => {
      const updatedTasks = prevTasks.filter((task) => task.id !== taskId);
      return updatedTasks;
    });
  };

  const updateTaskHandler = (newTask, taskId) => {
    setTodos((prevTasks) => {
      const updatedTasks = [...prevTasks];
      const taskIndex = updatedTasks.findIndex((task) => task.id === taskId);
      updatedTasks[taskIndex].task = newTask;
      return updatedTasks;
    });
  };

  const todo = todos.map((todo) => {
    return (
      <TodoItem
        key={todo.id}
        task={todo.task}
        id={todo.id}
        onDelete={delItemHandler}
        onUpdate={updateTaskHandler}
      />
    );
  });

  return (
    <div className="todolist">
      <h1>Todo List!</h1>
      <span>A Simple React Todo List App.</span>
      <ul>{todo}</ul>
      <NewTodo onAddTask={addTaskHandler} />
    </div>
  );
};

export default TodoList;
