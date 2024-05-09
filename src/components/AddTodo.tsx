import { useState } from "react";
import styles from "./AddTodo.module.css";

type AddTodoProps = {
  todos: string[];
  setTodos: React.Dispatch<React.SetStateAction<string[]>>;
};

export function AddTodo({ todos, setTodos }: AddTodoProps) {
  const [newTaskName, setNewTaskName] = useState("");

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const newTodos = [...todos, newTaskName];
    setTodos(newTodos);
    setNewTaskName("");
  }

  return (
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
  );
}
