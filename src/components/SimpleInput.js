import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnterdName] = useState("");  
  const [enteredNameTouched, setEnterdNameTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== '';
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched; 

  let formIsValid = false;  

  if (enteredNameIsValid) {
    formIsValid = true;
  } 

  const nameInputChangeHandler = (event) => {
    setEnterdName(event.target.value);
  };

  const nameInputBlurHandler = event => {
    setEnterdNameTouched(true);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setEnterdNameTouched(true);

    if (!enteredNameIsValid) {  
      return;
    }

    console.log(enteredName);
    // Reset the entered name if we use ref (not recommended, manipulate directly the DOM)
    // nameInputRef.current.value = "";
    // Reset the entered name using state
    setEnterdName('');
    setEnterdNameTouched(false);
  };

  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {nameInputIsInvalid && (
          <p className="error-text">Name must not be empty.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
