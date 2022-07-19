import React, { useState } from "react";
import { useGetTodoQuery, useGetTodosQuery } from "./src/store/todosApi";

export const TodosApp = () => {
//   const { data: todos = [], isLoading } = useGetTodosQuery();
//   console.log(todos);
    const [todoId, setTodoId] = useState(1);
    const {data: todo, isLoading} = useGetTodoQuery(todoId);

    const handleNext = () => {
        setTodoId(todoId+1);
    }
    const handlePrevius = () => {
        if(todoId===1) return;
        setTodoId(todoId-1);
    }

  return (
    <>
      <h1>TodosApp - RTK Query</h1>
      <hr />
      {isLoading&&<h1>Loading...</h1>}
      {/* <ul>
        {todos.map(todo => <li key={todo.id}>
            <strong>{todo.completed?'DONE ':'Pending '}</strong>
            {todo.title}
        </li>)}
      </ul> */}
      <pre>{JSON.stringify(todo)}</pre>
      <button onClick={handlePrevius}>Previus</button>
      <button onClick={handleNext}>Next</button>
    </>
  );
};
