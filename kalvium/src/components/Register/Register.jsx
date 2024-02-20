import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./Register.css";

const Form = () => {
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const [showRepeatPassword, setShowRepeatPassword] = useState(false); // State to toggle repeat password visibility

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful, isSubmitting },
    getValues,
  } = useForm();

  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);
  };

  return (
    <div className="form-container">
      {isSubmitSuccessful ? (
        <h2 className="success-msg">Registration Successful..!!!!</h2>
      ) : null}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            type="text"
            placeholder="First Name"
            {...register("firstName", {
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
          {errors.firstName && <p>{errors.firstName.message}</p>}
        </div>
        <div>
          <input
            type="text"
            placeholder="Email Id"
            {...register("email", {
              required: "❗ Email required",
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "❗ Invalid email",
              },
            })}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div>
          <input
            type={showPassword ? "text" : "password"} // Toggle between text and password type
            placeholder="Password"
            {...register("pass", {
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
           {errors.pass && <p>{errors.pass.message}</p>}
          <button
            type="button"
            className="show-password-btn"
            onClick={() => setShowPassword(!showPassword)}
          >
            <div className="result_emoji">{showPassword ? "🙈" : "👁️"}</div> 
          </button> 
        </div>
        <div>
          <input
            type={showRepeatPassword ? "text" : "password"} // Toggle between text and password type
            placeholder="Repeat Password "
            {...register("confirmPass", {
              required: "❗ Please repeat your password",
              validate: (value) =>
                value === getValues("pass") || "❗ Passwords do not match",
            })}
          />
          {errors.confirmPass && <p>{errors.confirmPass.message}</p>}
          <button
            type="button"
            className="show-password-btn"
            onClick={() => setShowRepeatPassword(!showRepeatPassword)}
          >
            <div className="result_emoji">{showRepeatPassword ? "🙈" : "👁️"}</div> 
          </button> 
          
        </div>
        <button
          className="regBtn"
          disabled={isSubmitting || Object.keys(errors).length > 0}
          type="submit"
        >
          {isSubmitting ? "Loading" : "Register"}
        </button>
      </form>
    </div>
  );
};

export default Form;
