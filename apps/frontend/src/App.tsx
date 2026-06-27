import { useEffect, useState } from 'react';

type State = 'idle' | 'loading' | 'success' | 'error';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [state, setState] = useState<State>('idle');

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        setState('loading');

        const response = await fetch('http://localhost:8080/todosd');

        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }

        const data = await response.json();

        setTodos(data);
        setState('success');
      } catch (err) {
        console.error(err);
        setState('error');
      }
    };

    fetchTodos();

    return () => {
      setTodos([]);
    };
  }, []);

  return (
    <div>
      <h1>Todos</h1>
      {state === 'loading' && <p>Loading...</p>}
      {state === 'error' && <p>Error fetching todos.</p>}

      {state === 'success' && (
        <ul>
          {todos.map((todo: any) => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;
