import React, { useState } from 'react';

import { Button } from '../../UI/Button/Button';
import './CourseInput.css';

export function CourseInput( props) {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);


  function goalInputChangeHandler(event) {
    if(event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  function formSubmitHandler(event) {
    event.preventDefault();
    if(enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label style={{ color: !isValid ? 'red' : 'black'}}>Course Goal</label>
        <input 
          style={{ 
            borderColor: !isValid ? 'red' : 'black', 
            backgroundColor: !isValid ? 'salmon' : 'transparent'
          }} 
          type="text" 
          onChange={goalInputChangeHandler} 
        />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};


