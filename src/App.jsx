import { useState } from "react";

function App() {
  {
    /*Task 1*/
  }
  // const [present, setPresent] = useState(0);
  // const [absent, setAbsent] = useState(0);

  // const addPresent = () => {
  //   setPresent(present + 1);
  // };

  // const addAbsent = () => {
  //   setAbsent(absent + 1);
  // };

  // const resetAttendance = () => {
  //   setPresent(0);
  //   setAbsent(0);
  // };

  {
    /*Task 2 Question 2*/
  }
  const [stock, setStock] = useState(0);

  const addStock = () => {
    setStock(stock + 10);
  };

  const removeStock = () => {
    if (stock > 0) {
      setStock(stock - 1);
    }
  };

  const stockStatus = () => {
    if(stock == 0){
      return "Out of Stock";
    } return stock;
  };

  return (
    <>
      {/*Task 1*/}
      {/* <h1>Student Attendance Counter</h1>

      <h2>Present: {present}</h2>
      <h2>Absent: {absent}</h2>

      <button onClick={addPresent}>Present +</button>

      <button onClick={addAbsent}>Absent +</button>

      <button onClick={resetAttendance}>Reset</button> */}

      {/*Task 2*/}
      <h1>Product Stock Management</h1>

      <h2>Current Stock: {stockStatus()}</h2>

      <button onClick={addStock}>Add Stock</button>
      <button onClick={removeStock}>Remove Stock</button>


    </>
  );
}

export default App;
