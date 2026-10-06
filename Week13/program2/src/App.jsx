import { useEffect, useState } from "react";
import "./index.css";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <div className="container">
      <h1>Understanding React Hooks</h1>

      <h2>useState Hook</h2>

      <p>Count: {count}</p>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>

      <button onClick={() => setCount(count - 1)}>
        Decrease
      </button>

      <button onClick={() => setCount(0)}>
        Reset
      </button>

      <h2>useState with Input</h2>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      <p>Hello, {name || "Student"}!</p>

      <h2>useEffect Hook</h2>

      <p>
        The browser tab title changes whenever the counter value changes.
      </p>
    </div>
  );
}

export default App;