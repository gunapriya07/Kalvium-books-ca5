import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./Register.css";

// Define a functional component called Form
const Form = () => {
  // State to toggle password visibility
  const [showPassword, setShowPassword] = useState(false);
  // State to toggle repeat password visibility
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);

  // Destructuring useForm hook to access form methods and state
  const {
    register, // Function to register form inputs
    handleSubmit, // Function to handle form submission
    formState: { errors, isSubmitSuccessful, isSubmitting }, // Object containing form state
    getValues, // Function to get form input values
  } = useForm();

  // Function to handle form submission
  const onSubmit = async (data) => {
    // Simulate asynchronous operation (e.g., API request)
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data); // Log form data to the console
  };

  // Render the form component
  return (
    <div className="form-container">
      {/* Show success message if form submission is successful */}
      {isSubmitSuccessful ? (
        <h2 className="success-msg">Registration Successful..!!!!</h2>
      ) : null}

      {/* Form element with onSubmit handler */}
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* First Name input field */}
        <div>
          <input
            type="text"
            placeholder="First Name"
            {...register("firstName", {
              // Validation rules for first name
              required: "❗ First name required",
              minLength: {
                value: 3,
                message: "❗ Name should be at least 3 characters long",
              },
              maxLength: {
                value: 30,
                message: "❗ Name should not exceed 30 characters",
              },
              pattern: {
                value: /^[a-zA-Z]+$/,
                message: "❗ Invalid First name",
              },
            })}
          />
          {/* Display error message if validation fails */}
          {errors.firstName && <p>{errors.firstName.message}</p>}
        </div>
        {/* Email input field */}
        <div>
          <input
            type="text"
            placeholder="Email Id"
            {...register("email", {
              // Validation rules for email
              required: "❗ Email required",
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "❗ Invalid email",
              },
            })}
          />
          {/* Display error message if validation fails */}
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        {/* Password input field */}
        <div>
          <input
            type={showPassword ? "text" : "password"} // Toggle between text and password type
            placeholder="Password"
            {...register("pass", {
              // Validation rules for password
              required: "❗ Password required",
              minLength: {
                value: 10,
                message: "❗ Password must be at least 10 characters long",
              },
              pattern: {
                value: /^(?=.*[!@#$%^&*])/,
                message: "❗ Password must contain at least one special character",
              },
            })}
          />
          {/* Display error message if validation fails */}
          {errors.pass && <p>{errors.pass.message}</p>}
          {/* Button to toggle password visibility */}
          <button
            type="button"
            className="show-password-btn"
            onClick={() => setShowPassword(!showPassword)}
          >
            {/* Toggle between show/hide password emoji */}
            <div className="result_emoji">{showPassword ? "🙈" : "👁️"}</div> 
          </button> 
        </div>
        {/* Repeat Password input field */}
        <div>
          <input
            type={showRepeatPassword ? "text" : "password"} // Toggle between text and password type
            placeholder="Repeat Password "
            {...register("confirmPass", {
              // Validation rules for repeat password
              required: "❗ Please repeat your password",
              validate: (value) =>
                value === getValues("pass") || "❗ Passwords do not match",
            })}
          />
          {/* Display error message if validation fails */}
          {errors.confirmPass && <p>{errors.confirmPass.message}</p>}
          {/* Button to toggle repeat password visibility */}
          <button
            type="button"
            className="show-password-btn"
            onClick={() => setShowRepeatPassword(!showRepeatPassword)}
          >
            {/* Toggle between show/hide password emoji */}
            <div className="result_emoji">{showRepeatPassword ? "🙈" : "👁️"}</div> 
          </button> 
        </div>
        {/* Submit button */}
        <button
          className="regBtn"
          // Disable button if form is submitting or if there are validation errors
          disabled={isSubmitting || Object.keys(errors).length > 0}
          type="submit"
        >
          {/* Display loading text while submitting */}
          {isSubmitting ? "Loading" : "Register"}
        </button>
      </form>
    </div>
  );
};

// Export the Form component
export default Form;
