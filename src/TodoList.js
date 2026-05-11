import TodoItem from "./TodoItem";

function TodoList({ todos, onDeleteTask }) {
  return (
    <div className="todo-list">
      {todos.length === 0 ? (
        <p className="empty-message">No tasks yet. Add a task above.</p>
      ) : (
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDeleteTask={onDeleteTask}
          />
        ))
      )}
    </div>
  );
}

export default TodoList;