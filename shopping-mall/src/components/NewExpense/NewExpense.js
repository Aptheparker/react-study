// hooks
import { useState } from "react";

//css
import "./NewExpense.css";

//components
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const SaveExpenseHandler = (enteredExpenseData) => {
    const expenseData = {
      //object
      ...enteredExpenseData, //spread operator
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData); //from parent component
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpense={SaveExpenseHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
