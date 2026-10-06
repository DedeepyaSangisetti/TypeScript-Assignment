import { useState } from "react";
import "./index.css";

function App() {
  const [showList, setShowList] = useState(true);

  const [name, setName] = useState("");
  const [submittedName, setSubmittedName] = useState("");

  const students = [
    "Student 1",
    "Student 2",
    "Student 3",
    "Student 4"
  ];

  function handleSubmit(event) {
    event.preventDefault();
    setSubmittedName(name);
  }

  return (
    <div className="container">
      <h1>React Conditional Rendering, Lists and Forms</h1>

      <button onClick={() => setShowList(!showList)}>
        {showList ? "Hide Students" : "Show Students"}
      </button>

      {showList && (
        <div>
          <h2>Student List</h2>

          <ul>
            {students.map((student, index) => (
              <li key={index}>{student}</li>
            ))}
          </ul>
        </div>
      )}

      <h2>Student Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <button type="submit">
          Submit
        </button>
      </form>

      {submittedName && (
        <h3>
          Form submitted successfully! Welcome, {submittedName}.
        </h3>
      )}
    </div>
  );
}

export default App;