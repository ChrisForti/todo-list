import { useState, useEffect } from "react";
// import styles from "./App.module.css";
import { AddTodo } from "./components/AddTodo";
import { Todo, Todos } from "./components/Todos";
import { Footer } from "./components/Footer";
import { recallTodos } from "./utils/storage";
import { Header } from "./components/Header";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const storedTodos = recallTodos() ?? "[]";
    const parsedTodos = JSON.parse(storedTodos) as Todo[];
    setTodos(parsedTodos);
  }, []);

  return (
    <>
      <Header />
      <AddTodo todos={todos} setTodos={setTodos} />
      <Todos todos={todos} setTodos={setTodos} />
      <Footer />
    </>
  );
}

export default App;
