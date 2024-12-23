import { useState } from "react";
import styles from "./AddTodo.module.css";
import { Todo } from "./Todos";
import { v4 as uuidv4 } from "uuid";
import { saveTodos } from "../utils/storage";

type AddTodoProps = {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

export function AddTodo({ todos, setTodos }: AddTodoProps) {
  const [newTaskName, setNewTaskName] = useState("");

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (newTaskName === "") return;
    const newTodo = { id: uuidv4(), name: newTaskName, completed: false };
    const newTodos = [...todos, newTodo];
    saveTodos(JSON.stringify(newTodos));
    setTodos(newTodos);
    setNewTaskName("");
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.label} htmlFor="taskName">
        Add task here
      </label>
      <input
        type="text"
        name="taskName"
        placeholder="input box"
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
