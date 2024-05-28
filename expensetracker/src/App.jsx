import { useState } from "react";
import { useEffect } from "react";
import Expense from "./components/Expense.jsx"
import Header from "./components/Header.jsx"
import Expenseform from "./components/Expenseform.jsx";
const App = () => {
  const [list, setList] = useState([
    { id: 1, title: "Car", amount: 500 },
    { id: 2, title: "Salary", amount: -300 },
    { id: 3, title: "Snacks", amount: -200 },
  ]);

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  useEffect(() => {
    let totalIncome = 0;
    let totalExpense = 0;
    list.forEach((item) => {
      if (item.amount > 0) {
        totalIncome += item.amount;
      } else {
        totalExpense += item.amount;
      }
    });
    setIncome(totalIncome);
    setExpense(totalExpense);
  }, [list]);

  const deleteItem = (id) => {
    const updatedList = list.filter((item) => item.id !== id);
    setList(updatedList);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(title, amount);
  };

  const handleEdit = (id, newTitle, newAmount) => {
    const updatedList = list.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          title: newTitle,
          amount: parseInt(newAmount),
        };
      }
      return item;
    });
    setList(updatedList);
  };

  const addItem = (title, amount) => {
    const newitem = {
      id: list[list.length - 1].id + 1,
      title: title,
      amount: parseInt(amount),
    };
    setList([...list, newitem]);
  };

  return (
    <>
      <Header income={income} expense={expense} />
      <h1>History</h1>
      <Expenseform handleTitleChange={handleTitleChange} handleAmountChange={handleAmountChange} handleSubmit={handleSubmit} title={title}amount={amount}/>
      {list.map((expense) => (
        <Expense
          key={expense.id}
          title={expense.title}
          id={expense.id}
          amount={expense.amount}
          deleteItem={deleteItem}
          handleEdit={handleEdit} />
      ))}
    </> 
  );
};

export default App;