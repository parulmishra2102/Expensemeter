import React,{useState} from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
// import Card from './component/UIFolder/Card';
import ExpenseFilter from './ExpenseFilter'
function Expenseitem(props) {
  const [title,updateTitle]=useState(props.title);

  // let title=props.title;
   const clickHandler=()=>{
   updateTitle('done')
   console.log(title)
    
   }
  return (
    
    <div className="expense-item">
      
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">{title}</div>
      <div className="expense-item__price">{props.amount}</div>
      <div><button onClick={clickHandler}>changeTitle</button></div>
       </div>
     
    
  );
}
export default Expenseitem;
