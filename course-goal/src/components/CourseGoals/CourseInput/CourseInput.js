import React, { useState } from "react";
import styles from "./CourseInput.module.css";

import Button from "../../UI/Button/Button";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true); // validation state

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) { // if input is not empty
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) { //if input is empty
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue); // pass enteredValue to onAddGoal function in App.js
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`${styles['form-control']} ${!isValid && styles.invalid}`}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
