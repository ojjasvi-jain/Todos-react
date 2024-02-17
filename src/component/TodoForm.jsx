import { useState } from "react";

function TodoForm({ addTodo }) {
  const [text, setText] = useState("");
  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!text.trim()) return;
    addTodo(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={text} onChange={handleChange} />
      <button className="submitBtn" type="submit">
        ADD
      </button>
    </form>
  );
}

export default TodoForm;
