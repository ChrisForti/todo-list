import { TodoItem } from "./Todo";

export type Todo = { id: string; name: string };
type TodosProps = {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

export function Todos({ todos, setTodos }: TodosProps) {
  return (
    <ul>
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
