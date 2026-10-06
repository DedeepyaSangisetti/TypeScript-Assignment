import { useState } from "react";
import "./index.css";

function Student({ name, course }) {
  return (
    <div className="student-card">
      <h2>{name}</h2>
      <p>Course: {course}</p>
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("Welcome to Week 11");

  function handleClick() {
    setCount(count + 1);
    setMessage("Button was clicked!");
  }

  return (
    <div className="container">
      <h1>React Props, State, Styling and Events</h1>

      <Student
        name="Student"
        course="Full Stack Development"
      />

      <h2>{message}</h2>

      <p>Button clicked: {count} times</p>

      <button onClick={handleClick}>
        Click Me
      </button>
    </div>
  );
}

export default App;