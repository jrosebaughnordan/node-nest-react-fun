// src/pages/Todos.tsx
import { useEffect, useState } from "react";
import {
  listTodos,
  createTodo,
  toggleDone,
  type Todo,
} from "../services/todos";

export function Todos() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    listTodos().then(setTodos);
  }, []);

  async function onAdd(e: React.FormEvent) {
    e.preventDefault();
    if (!title.trim()) return;
    const newTodo = await createTodo({ title: title.trim() });
    setTodos((prev) => [newTodo, ...prev]);
    setTitle("");
  }

  async function onToggle(id: string) {
    const updated = await toggleDone(id);
    setTodos((prev) => prev.map((x: Todo) => (x.id === id ? updated : x)));
  }

  return (
    <div style={{ padding: 24 }}>
      <h1>Todos</h1>
      <form onSubmit={onAdd}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="New todo"
        />
        <button>Add</button>
      </form>
      <ul>
        {todos.map((t) => (
          <li key={t.id}>
            <label>
              <input
                type="checkbox"
                checked={t.done}
                onChange={() => onToggle(t.id)}
              />
              {t.title}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
