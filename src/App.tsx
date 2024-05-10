import { useState } from "react";
// import styles from "./App.module.css";
import { AddTodo } from "./components/AddTodo";
import { Todos } from "./components/Todos";
import Iframe from "react-iframe";

function App() {
  const [todos, setTodos] = useState<string[]>([]);

  return (
    <>
      <h1>Todo list</h1>
      <AddTodo todos={todos} setTodos={setTodos} />
      <Todos todos={todos} />
      <Iframe
        url="https://shaderpark.com/embed/-Np7TJ7lhufKxAsiV0ik"
        width="640px"
        height="320px"
        id=""
        className=""
        display="block"
        position="relative"
      />
    </>
  );
}

export default App;
