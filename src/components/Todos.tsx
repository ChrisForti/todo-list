import { TodoItem } from "./Todo";
import styles from "./Todos.module.css";

export type Todo = { id: string; name: string; completed: boolean };
type TodosProps = {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

export function Todos({ todos, setTodos }: TodosProps) {
  return (
    <ul className={styles.ul}>
      {todos.length > 0 &&
        todos.map((todo, index) => {
          return (
            <TodoItem
              key={index}
              todo={todo}
              todos={todos}
              setTodos={setTodos}
            />
          );
        })}
    </ul>
  );
}
