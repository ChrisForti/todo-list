import { useState } from "react";
import styles from "./AddTodo.module.css";
import { Todo } from "./Todos";
import { v4 as uuidv4 } from "uuid";

type AddTodoProps = {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

export function AddTodo({ todos, setTodos }: AddTodoProps) {
  const [newTaskName, setNewTaskName] = useState("");

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (newTaskName === "") return;
    const newTodo = { id: uuidv4(), name: newTaskName };
    const newTodos = [...todos, newTodo];
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
