import React, { useState } from "react";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [inputTodo, setInputTodo] = useState("");

  const handleChangeTodo = (e) => {
    setInputTodo(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputTodo.trim() !== "") {
      setTodos([...todos, inputTodo]);
      setInputTodo("");
    }
  };

  console.log(inputTodo);

  const handleRemoveTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Todo"
        onChange={handleChangeTodo}
        value={inputTodo}
      />
      <button onClick={handleAddTodo}>AddTodo</button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleRemoveTodo(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
