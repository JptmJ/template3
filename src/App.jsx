import React, { useState } from 'react';
import './App.css';

function App() {
  // State for form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    password: '',
    conpassword: '',
  });

  // State for form validation errors
  const [errors, setErrors] = useState({});

  // State for toggling between Sign Up and Log In
  const [isSignUp, setIsSignUp] = useState(true);

  // Determine the initial button class based on isSignUp
  const initialButtonClass = isSignUp ? 'auth-button' : 'disabled-button';

  // Set the button class based on the presence of errors
  const buttonClass = Object.keys(errors).length === 0 ? 'auth-button' : 'disabled-button';

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Object to store validation errors
    const validationErrors = {};

    // Validation for name field
    if (!formData.name.trim()) {
      validationErrors.name = 'Name Must Be Filled Out';
    }

    // Validation for email field
    if (!formData.email.trim()) {
      validationErrors.email = 'Please Enter Email Address';
    } else if (!formData.email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i)) {
      validationErrors.email = 'Please Enter Valid Email Address';
    }

    // Validation for mobile field
    if (!formData.mobile.trim()) {
      validationErrors.mobile = 'Please Enter Mobile Number';
    } else if (formData.mobile.length < 10) {
      validationErrors.mobile = 'Please Enter Valid Mobile Number';
    }

    // Validation for password field
    if (!formData.password.trim()) {
      validationErrors.password = 'Please Enter Password';
    } else if (formData.password.length < 6) {
      validationErrors.password = 'Password must be more than 6 characters';
    }

    // Validation for confirm password field
    if (!formData.conpassword.trim()) {
      validationErrors.conpassword = 'Confirm Password is required';
    } else if (formData.password.trim() !== formData.conpassword.trim()) {
      validationErrors.conpassword = 'Passwords do not match';
    }

    // Check if there are any validation errors
    if (Object.keys(validationErrors).length > 0) {
      // Display the alert for validation errors
      alert("Please Fill all the input fields correctly");
    } else {
      // If there are no validation errors, display a success message
      alert('Form submitted successfully');
    }

    // Set the validation errors in state
    setErrors(validationErrors);
  };


  // Function to handle input changes and update form data
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Clear the error for the field being updated
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: undefined,
    }));

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };



  // Function to toggle between Sign Up and Log In
  const toggleForm = () => {
    setIsSignUp(!isSignUp);

    // Clear form data and errors when switching between Sign Up and Log In
    setFormData({
      name: '',
      email: '',
      mobile: '',
      password: '', // Change to ''
      conpassword: '', // Change to ''
    });
    setErrors({});
  };

  return (
    <div className="App">
      <form action="#" className="auth-form" onSubmit={handleSubmit}>
        <h1 className="form-header">{isSignUp ? 'Sign Up Here' : 'Log In Here'}</h1>

        {/* Render name input and error */}
        {isSignUp && (
          <div>
            <label htmlFor="name">Name:</label>
            <input onChange={handleChange} type="text" id="name" name="name" value={formData.name} />
            {errors.name && <p className="error">{errors.name}</p>}
          </div>
        )}

        {/* Render email input and error */}
        <div>
          <label htmlFor="email">Email:</label>
          <input onChange={handleChange} type="email" id="email" name="email" value={formData.email} />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        {/* Render mobile input and error */}
        {isSignUp && (
          <div>
            <label htmlFor="mobile">Mobile:</label>
            <input onChange={handleChange} type="number" id="mobile" name="mobile" value={formData.mobile} />
            {errors.mobile && <p className="error">{errors.mobile}</p>}
          </div>
        )}

        {/* Render password input and error */}
        <div>
          <label htmlFor="password">Password:</label>
          <input onChange={handleChange} type="password" id="password" name="password" value={formData.password} />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>

        {/* Render confirm password input and error */}
        {isSignUp && (
          <div>
            <label htmlFor="conpassword">Confirm Password:</label>
            <input onChange={handleChange} type="password" id="conpassword" name="conpassword" value={formData.conpassword} />
            {errors.conpassword && <p className="error">{errors.conpassword}</p>}
          </div>
        )}

        {/* Submit button */}
        <button type="submit" className={buttonClass}>
          {isSignUp ? 'signup' : 'login'}
        </button>


        {/* Toggle button to switch between Sign Up and Log In */}
        <div className="button-prop">
          <button onClick={toggleForm} className="button toggle-button">
            {isSignUp ? 'Login to an existing account...' : 'Create a new account...'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
