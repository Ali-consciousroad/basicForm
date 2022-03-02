import useInput from "../hooks/use-input";

const BasicForm = (props) => {

  const {
    value: enteredFirstName,
    isValid: enteredFirstNameIsValid, 
    hasError: firstNameInputHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstNameInput,
  } = useInput(value => value.trim() !== '');

  const {
    value: enteredName,
    isValid: enteredNameIsValid, 
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput(value => value.trim() !== '');

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid, 
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput(value => value.includes('@'));

  let formIsValid = false;  

  if (enteredFirstNameIsValid && enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  } 

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!enteredNameIsValid || !enteredFirstNameIsValid) {  
      return;
    }

    //console.log(enteredName);
    resetFirstNameInput();
    resetNameInput();
    resetEmailInput();
  };

    const firstNameInputClasses = firstNameInputHasError
    ? "form-control invalid"
    : "form-control";

    const nameInputClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control";

    const emailInputClasses = enteredEmailIsValid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className='control-group'>
        <div className={firstNameInputClasses}>
          <label htmlFor='firstName'>First Name</label>
          <input
            type="text"
            id="firstName"
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
            value={enteredFirstName}
          />
          {firstNameInputHasError && (
          <p className="error-text">First name must not be empty.</p>
          )}
        </div>
        <div className={nameInputClasses}>
          <label htmlFor='name'>Last Name</label>
          <input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
        {nameInputHasError && (
          <p className="error-text">Name must not be empty.</p>
        )}
        </div>
      </div>

      <div className={emailInputClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input
          type="email"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailInputHasError && (
          <p className="error-text">Please enter a valid email.</p>
        )}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
