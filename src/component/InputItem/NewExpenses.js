import './NewExpenses.css';
import ExpenseForm from './ExpenseForm';

const NewExpenses = (props) => {
  const saveExpenseDataHandler = (data) => {
    const newFormData = {
      ...data,

      id: Math.random(),
      
    };
    debugger;
    props.recievedData(newFormData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}></ExpenseForm>
    </div>
  );
}; 
export default NewExpenses;
