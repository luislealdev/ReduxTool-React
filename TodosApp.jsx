import React from "react";
import { useGetTodosQuery } from "./src/store/todosApi";

export const TodosApp = () => {
  const { data: todos = [], isLoading } = useGetTodosQuery();
  console.log(todos);

  return (
    <>
      <h1>TodosApp - RTK Query</h1>
      <hr />
      <ul>
        {todos.map(todo => <li key={todo.id}>
            <strong>{todo.completed?'DONE ':'Pending '}</strong>
            {todo.title}
        </li>)}
      </ul>
    </>
  );
};
