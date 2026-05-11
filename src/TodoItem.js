function TodoItem({ todo, onDeleteTask }) {
  return (
    <div className="todo-item">
      <span>{todo.text}</span>

      <button onClick={() => onDeleteTask(todo.id)}>
        Delete
      </button>
    </div>
  );
}

export default TodoItem;