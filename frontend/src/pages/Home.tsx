import { Link } from "react-router-dom";

export function Home() {
  return (
    <div style={{ padding: 24 }}>
      <h1>Welcome</h1>
      <p>This is the home page!</p>

      <Link to="/todos">Go to Todos →</Link>
    </div>
  );
}
