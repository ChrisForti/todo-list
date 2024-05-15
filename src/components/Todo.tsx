import { Todo } from "./Todos";

type TodoProps = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

export function TodoItem(props: TodoProps) {
  function handleDelete() {
    const newTodos = props.todos.filter((todo) => {
      return todo.id !== props.todo.id;
    });
    props.setTodos(newTodos);
  }
  return (
    <li>
      {props.todo.name} <button onClick={handleDelete}>X</button>
    </li>
  );
}
