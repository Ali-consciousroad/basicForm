import { useRef, useState } from "react";

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredName, setEnterdName] = useState("");
  const [enteredNameIsValid, setEnterdNameIsValid] = useState(true); 

  const nameInputChangeHandler = (event) => {
    setEnterdName(event.target.value);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (enteredName.trim() === '') {
      setEnterdNameIsValid(false);  
      return;
    }

    setEnterdNameIsValid(true);

    console.log(enteredName);
    const enteredValue = nameInputRef.current.value; 
    console.log(enteredValue);
    // Reset the entered name if we use ref (not recommended, manipulate directly the DOM)
    // nameInputRef.current.value = "";
    // Reset the entered name using state
    setEnterdName('');
  };

  const nameInputClasses = enteredNameIsValid
    ? "form-control"
    : "form-control invalid";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputRef}
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          value={enteredName}
        />
        {!enteredNameIsValid && <p className="error-text">Name must not be empty.</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
