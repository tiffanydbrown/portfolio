import React, { useEffect, useState } from 'react';
import './Todos.css';

export default function Todos() {
  const [ todos, setTodos ] = useState([]);

  useEffect(function() {
    async function getTodos() {
      const resp = await fetch('/api/todos');
      const todos = await resp.json();

      setTodos(todos);
    }

    getTodos();
  }, []);

  return (
    <>
      <ul className="Todos">
        {
          todos.map(({ task, todoId }) => (
            <li key={todoId}>{task}</li>
          ))
        }
      </ul>
      <p className="Note">* Above list is populated from a Postgres database, from the server API endpoint <a href="/api/todos" target="_blank"><code>/api/todos</code></a></p>
    </>
  );
}
