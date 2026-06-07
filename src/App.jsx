import { useState } from "react";

function App() {
  const [present, setPresent] = useState(0);
  const [absent, setAbsent] = useState(0);

  const addPresent = () => {
    setPresent(present + 1);
  };

  const addAbsent = () => {
    setAbsent(absent + 1);
  };

  const resetAttendance = () => {
    setPresent(0);
    setAbsent(0);
  };

  return (
    <div>
      <h1>Student Attendance Counter</h1>

      <h2>Present: {present}</h2>
      <h2>Absent: {absent}</h2>

      <button onClick={addPresent}>Present +</button>

      <button onClick={addAbsent}>Absent +</button>

      <button onClick={resetAttendance}>Reset</button>
    </div>
  );
}

export default App;
