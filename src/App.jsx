import { useState } from "react";
import "./App.css";
import TodoList from "./component/TodoList.jsx";
import TodoForm from "./component/TodoForm.jsx";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text };
    setTodos([...todos, newTodo]);
  };

  const deletTodo = (id) => {
    const newTodo = todos.filter((todo) => todo.id !== id);
    setTodos(newTodo);
  };

  const editTodo = (id, index) => {
    let updatedText = prompt("edit the todo");
    if (todos[index] !== updatedText) {
      let newTodo = todos.map((todo) => {
        if (todo.id === id) return { ...todo, text: updatedText };
        else return todo;
      });

      setTodos(newTodo);
    }
  };
  return (
    <div className="container">
      <div className="wrapper">
        <h1>Todo List demo</h1>
        <TodoForm addTodo={addTodo} />
        <TodoList todos={todos} deletTodo={deletTodo} editTodo={editTodo} />
      </div>
    </div>
  );
}

export default App;
