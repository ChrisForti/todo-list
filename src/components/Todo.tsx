import { Todo, Todos } from "./Todos";
import styles from "./Todo.module.css";
import MyImage from "../assets/original-cv-symbol.png";
import { useState } from "react";

type TodoProps = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

export function TodoItem(props: TodoProps) {
  const [checked, setChecked] = useState(props.todo.completed);
  function handleComplete() {
    props.setTodos(
      props.todos.map((todoItem) => {
        if (todoItem.id === props.todo.id) {
          todoItem.completed = !todoItem.completed;
          setChecked(todoItem.completed);
        }
        return todoItem;
      })
    );
  }
  function handleDelete() {
    const newTodos = props.todos.filter((todo) => {
      return todo.id !== props.todo.id;
    });
    props.setTodos(newTodos);
  }
  return (
    <li className={styles.li}>
      <input
        className={styles.checkbox}
        onChange={handleComplete}
        checked={checked}
        type="checkbox"
        name="completed"
      />
      <span>{props.todo.name} </span>
      <button onClick={handleDelete} className={styles.button}>
        <img src={MyImage} width="30px" height="30px" />
      </button>
    </li>
  );
}
