import { Todo } from "./Todos";
import styles from "./Todo.module.css";
import MyImage from "../assets/original-cv-symbol.png";
import { useEffect, useState } from "react";
import { saveTodos } from "../utils/storage";

type TodoProps = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

export function TodoItem(props: TodoProps) {
  const [checked, setChecked] = useState(props.todo.completed);
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(props.todo.name);
  const [newName, setNewName] = useState(props.todo.name);

  useEffect(() => {
    if (isEditing) return;
    if (name === newName) return;
    handleEdit();
  }, [isEditing]);

  function handleComplete() {
    const newTodos = props.todos.map((todoItem) => {
      if (todoItem.id === props.todo.id) {
        todoItem.completed = !todoItem.completed;
        setChecked(todoItem.completed);
      }
      return todoItem;
    });
    saveTodos(JSON.stringify(newTodos));
    props.setTodos(newTodos);
  }

  function handleEdit() {
    const newTodos = props.todos.map((todoItem) => {
      if (todoItem.id === props.todo.id) {
        todoItem.name = newName;
        setName(todoItem.name);
      }
      return todoItem;
    });
    saveTodos(JSON.stringify(newTodos));
    props.setTodos(newTodos);
  }

  function handleDelete() {
    const newTodos = props.todos.filter((todo) => {
      return todo.id !== props.todo.id;
    });
    saveTodos(JSON.stringify(newTodos));
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
      {!isEditing && <span>{props.todo.name}</span>}
      {isEditing && (
        <textarea
          className={styles.edit}
          value={newName}
          onChange={(event) => {
            setNewName(event.target.value);
          }}
        />
      )}
      <button className={styles.edit} onClick={() => setIsEditing(!isEditing)}>
        {isEditing ? "Done" : "Edit"}
      </button>
      <button onClick={handleDelete} className={styles.button}>
        <img src={MyImage} width="30px" height="30px" />
      </button>
    </li>
  );
}
