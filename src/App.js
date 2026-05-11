import { useState } from "react";
import TodoList from "./TodoList";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");

  function handleAddTask() {
    if (task.trim() === "") {
      return;
    }

    const newTodo = {
      id: Date.now(),
      text: task
    };

    setTodos([...todos, newTodo]);
    setTask("");
  }

  function handleDeleteTask(id) {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  }

  return (
    <div className="app-container">
      <h1>My ToDo List</h1>

      <div className="input-section">
        <input
          type="text"
          placeholder="Enter a task"
          value={task}
          onChange={(event) => setTask(event.target.value)}
        />

        <button onClick={handleAddTask}>Add Task</button>
      </div>

      <TodoList todos={todos} onDeleteTask={handleDeleteTask} />
    </div>
  );
}

export default App;
