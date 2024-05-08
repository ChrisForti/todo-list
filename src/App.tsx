import { useState } from "react";
import styles from "./App.module.css";

function App() {
  const [newTaskName, setNewTaskName] = useState("");
  const [todos, setTodos] = useState<string[]>([]);

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const newTodos = [...todos, newTaskName];
    setTodos(newTodos);
    setNewTaskName("");
  }

  return (
    <>
      <h1>Todo list</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label htmlFor="taskName">add task</label>
        <input
          type="text"
          name="taskName"
          placeholder="Add task here"
          value={newTaskName}
          onChange={(event) => {
            setNewTaskName(event.target.value);
          }}
        />
        <button type="submit" className="button">
          Submit
        </button>
      </form>
      <ul>
        {todos.length > 0 &&
          todos.map((todo, index) => {
            return <li key={index}>{todo}</li>;
          })}
      </ul>
    </>
  );
}

export default App;
