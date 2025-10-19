import React from "react";

export function App() {
  const [message, setMessage] = React.useState<string>("");

  async function callApi() {
    const res = await fetch("/api/hello");
    const data = await res.json();
    setMessage(data.message);
  }

  React.useEffect(() => {
    callApi();
  }, []);

  return (
    <main style={{ fontFamily: "system-ui, sans-serif", padding: 24 }}>
      <h1>React + Nest(Fastify) from scratch</h1>
      <p>
        API says: <strong>{message || "…loading"}</strong>
      </p>

      <section>
        <h2>Counter</h2>
        <Counter />
      </section>

      <section>
        <h2>Simple Form</h2>
        <SimpleForm />
      </section>
    </main>
  );
}

function Counter() {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>+1</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

function SimpleForm() {
  const [name, setName] = React.useState("");
  const [items, setItems] = React.useState<string[]>([]);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim()) return;
    setItems((prev) => [...prev, name.trim()]);
    setName("");
  }

  return (
    <form onSubmit={onSubmit} style={{ marginTop: 8 }}>
      <label>
        Add item:{" "}
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <button type="submit">Add</button>
      <ul>
        {items.map((it, i) => (
          <li key={i}>{it}</li>
        ))}
      </ul>
    </form>
  );
}
