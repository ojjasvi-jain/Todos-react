function TodoList({ todos, deletTodo, editTodo }) {
  return (
    <>
      {todos.map((todo, index) => (
        <div key={todo.id} className="list">
          <span className="todoText">{todo.text}</span>
          <button
            id="detBtn"
            className="btn"
            onClick={() => deletTodo(todo.id)}
          >
            Delete
          </button>
          <button
            id="editBtn"
            className="btn"
            onClick={() => editTodo(todo.id, index)}
          >
            Edit
          </button>
        </div>
      ))}
    </>
  );
}

export default TodoList;
