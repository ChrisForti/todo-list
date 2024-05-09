import { useState } from "react";
// import styles from "./App.module.css";
import { AddTodo } from "./components/AddTodo";
import { Todos } from "./components/Todos";

function App() {
  const [todos, setTodos] = useState<string[]>([]);

  return (
    <>
      <h1>Todo list</h1>
      <AddTodo todos={todos} setTodos={setTodos} />
      <Todos todos={todos} />
    </>
  );
}

export default App;
