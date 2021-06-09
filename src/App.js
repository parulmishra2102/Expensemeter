import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import ExpenseItem from './component/Expenses/ExpenseItem';
import Card from './component/UIFolder/Card';
import NewExpenses from './component/InputItem/NewExpenses';
import ExpenseFilter from './component/Expenses/ExpenseFilter'

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  const[filteredyear,setfilteredyear]=useState('2020')

  const recievedDataFromNewExpense=(data)=>{

    console.log(data)
    
}
const changeFilterHandler=(selectedyear)=>{
  setfilteredyear(selectedyear)

  // console.log('app' + selectedyear)

}

  return (
    <div>
      <div>
       
      </div>
      <Card className="test">
      <ExpenseFilter   selected={filteredyear} filterchanger={changeFilterHandler}></ExpenseFilter>
        {/* <NewExpenseItem></NewExpenseItem> */}
        <NewExpenses recievedData={recievedDataFromNewExpense}></NewExpenses>
        {/* {expenses &&
          expenses.map(function (item) {
            return <ExpenseItem key={item.title}
            title={item.title}
            amount={item.amount}
            date={item.date}
          ></ExpenseItem>;
          })} */}
        <ExpenseItem
          title={expenses[0].title}
          amount={expenses[0].amount}
          date={expenses[0].date}
        ></ExpenseItem>
        <ExpenseItem
          title={expenses[1].title}
          amount={expenses[1].amount}
          date={expenses[1].date}
        ></ExpenseItem>
        <ExpenseItem
          title={expenses[2].title}
          amount={expenses[2].amount}
          date={expenses[2].date}
        ></ExpenseItem>
        <ExpenseItem
          title={expenses[3].title}
          amount={expenses[3].amount}
          date={expenses[3].date}
        ></ExpenseItem>
      </Card>
    </div>
  );
}

export default App;
