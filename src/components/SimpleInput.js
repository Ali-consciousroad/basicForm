import { useRef, useState } from "react";

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredName, setEnterdName] = useState("");

  const nameInputChangeHandler = (event) => {
    setEnterdName(event.target.value);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    console.log(enteredName);
    const enteredValue = nameInputRef.current.value; 
    console.log(enteredValue);
    // Reset the entered name if we use ref (not recommended, manipulate directly the DOM)
    // nameInputRef.current.value = "";
    // Reset the entered name using state
    setEnterdName('');
  };

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputRef}
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          value={enteredName}
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
