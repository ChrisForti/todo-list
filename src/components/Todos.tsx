import React from "react";

type TodosProps = { todos: string[] };

export function Todos({ todos }: TodosProps) {
  return (
    <ul>
      {todos.length > 0 &&
        todos.map((todo, index) => {
          return <li key={index}>{todo}</li>;
        })}
    </ul>
  );
}
