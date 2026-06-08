import { useState, useEffect } from "react";

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
  // const [stock, setStock] = useState(0);

  // const addStock = () => {
  //   setStock(stock + 10);
  // };

  // const removeStock = () => {
  //   if (stock > 0) {
  //     setStock(stock - 1);
  //   }
  // };

  // const stockStatus = () => {
  //   if(stock == 0){
  //     return "Out of Stock";
  //   } return stock;
  // };
  {
    /*Task 3 */
  }
  // const [showProfile, setShowProfile] = useState(false);

  // const toggleProfile = () => {
  //   setShowProfile(!showProfile);
  // };

  {
    /*Task 4 */
  }
  // const [expenseName, setExpenseName] = useState("");
  // const [amount, setAmount] = useState("");
  // const [expenses, setExpenses] = useState([]);

  // const addExpense = () => {
  //   if (!expenseName || !amount) {
  //     return;
  //   }

  //   const newExpense = {
  //     name: expenseName,
  //     amount: Number(amount),
  //   };

  //   setExpenses([...expenses, newExpense]);

  //   setExpenseName("");
  //   setAmount("");
  // };

  // const totalExpense = expenses.reduce(
  //   (total, expense) => total + expense.amount,
  //   0,
  // );

  {
    /*Task 5 */
  }
  const [loading, setLoading] = useState(true);
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setEmployees(["Akees", "Ali", "Niyas", "Fazil"]);

      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

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
      {/* <h1>Product Stock Management</h1>

      <h2>Current Stock: {stockStatus()}</h2>

      <button onClick={addStock}>Add Stock</button>
      <button onClick={removeStock}>Remove Stock</button> */}

      {/*Task 3 */}

      {/* <h2>User Profile Toggle</h2>

      <button onClick={toggleProfile}>
        {showProfile ? "Hide Profile" : "Show Profile"}
      </button>

      {showProfile && (
        <div>
          <h2>Mohamed Akees</h2>
          <p>Frontend Developer</p>
          <p>Kalmunai</p>
        </div>
      )} */}

      {/*Task 4 */}
      {/* <h1>Expense Tracker</h1>

      <input
        type="text"
        placeholder="Expense Name"
        value={expenseName}
        onChange={(e) => setExpenseName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button onClick={addExpense}>Add Expense</button>

      <h2>Expense List</h2>

      <ul>
        {expenses.map((expense, index) => (
          <li key={index}>
            {expense.name} - Rs.{expense.amount}
          </li>
        ))}
      </ul>

      <h2>Total Expense: Rs.{totalExpense}</h2> */}

      {/*Task 5 */}
      <h1>Employee List</h1>

      <ul>
        {employees.map((employee, index) => (
          <li key={index}>{employee}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
