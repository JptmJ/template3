// Import necessary modules and components
import React, { useState } from 'react';
import './App.css';

// Define the main App component
function App() {
  // Initialize state variables using the useState hook
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmpassword: ''
  });

  const [errors, setErrors] = useState({});

  // Define a handleChange function to update form data when input values change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Define a handleSubmit function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Initialize an object to store validation errors
    const validationErrors = {};

    // Validate the username field
    if (!formData.username.trim()) {
      validationErrors.username = 'Username is required';
    }

    // Validate the password field
    if (!formData.password.trim()) {
      validationErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      validationErrors.password = 'Password must be more than 6 characters';
    }

    // Validate the confirm password field
    if (!formData.confirmpassword.trim()) {
      validationErrors.confirmpassword = 'Confirm Password is required';
    }
    else if (Object.keys(validationErrors).length === 0) {
      alert('Form submitted successfully');
    }

    // Set the validation errors in the state
    setErrors(validationErrors);

    // Check if Confirm Password is empty and if there are no validation errors
    if (!formData.confirmpassword.trim() && Object.keys(validationErrors).length === 0) {
      alert('Form submitted successfully');
    }
  };

  // Render the form with input fields and error messages
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h2>Login Form</h2>
        <hr />
        <div>
          <label>Username : </label>
          <input
            type="text"
            name="username"
            placeholder="Enter Username"
            onChange={handleChange}
          />
          <br />
          {errors.username && <span>{errors.username}</span>}
        </div>
        <div>
          <label>Password : </label>
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            onChange={handleChange}
          />
          <br />
          {errors.password && <span>{errors.password}</span>}
        </div>
        <div>
          <label>Confirm Password : </label>
          <input
            type="password"
            name="confirmpassword"
            placeholder="Enter Confirm Password"
            onChange={handleChange}
          />
          <br />
          {errors.confirmpassword && <span>{errors.confirmpassword}</span>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

// Export the App component as the default export
export default App;
