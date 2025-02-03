// Contact Page: Just the <main> from v1's corresponding HTML refactored to JSX

// State to determine if form's submitted or not so we can give a success message
import { useState } from "react";

// Hook from NPM module for live/active form validation (meaning as we type, not just each time we try and submit)
import { useForm } from "react-hook-form";

// Importing css file from v1 for Contact page
import "../styles/contact.css";

export default function Contact() {
  // Default of false, meaning not submitted
  const [submitted, setSubmitted] = useState(false);

  // Much like useState, calling useForm returns these 2 functions and an obj
  const {
    register, // Connects an input to useForm() hook's state, done on each input
    handleSubmit, // runs after forms submitted, also handles preventDefault() and runs onSubmit() instead (below this function)
    formState: { errors }, // obj holds error messages and form validation
    reset, // Clears input fields after submission
  } = useForm();

  // When the form is submitted, the logic here is ran
  const onSubmit = (data) => {
    console.log("Form submitted successfully:", data);
    setSubmitted(true); // Change to true when form submits
    reset(); // Clear inputs
  };

  return (
    <main>
      <h1 className="contact-heading">Contact Form</h1>
      {/* Heading while form hasn't submitted (submitted === false) */}
      {!submitted && (
        <h2 className="contact-subheading">
          Fill out this form and we'll get back to you shortly...
        </h2>
      )}

      {/* Success Message if submitted === true */}
      {submitted && (
        <h2 className="contact-subheading blue-text">
          Thank you for submitting your form. We'll get back to you as soon as
          possible!
        </h2>
      )}

      {/* Form element: Consider adding name attribute to inputs?? */}
      <form
        className="browser-default contact-form"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* Label and textbox for FIRST NAME */}
        <div className="input-pair-container">
          <label htmlFor="fName" className="browser-default custom-label">
            First Name:
          </label>
          <input
            type="text"
            placeholder="Ex: John"
            className="browser-default custom-textbox"
            id="fName"
            {...register("fname", {
              required: "First name is required.",
              minLength: {
                value: 2,
                message: "First name must be at least 2 characters",
              },
              maxLength: {
                value: 30,
                message: "First name must be no more than 30 characters",
              },
            })}
          />
          {errors.fname && (
            <p className="error-message">{errors.fname.message}</p>
          )}
        </div>

        {/* Label and textbox for LAST NAME */}
        <div className="input-pair-container">
          <label htmlFor="lName" className="browser-default custom-label">
            Last Name:
          </label>
          <input
            type="text"
            placeholder="Ex: John"
            className="browser-default custom-textbox"
            id="lName"
            {...register("lname", {
              required: "Last name is required.",
              minLength: {
                value: 2,
                message: "Last name must be at least 2 characters",
              },
              maxLength: {
                value: 30,
                message: "Last name must be no more than 30 characters",
              },
            })}
          />
          {errors.lname && (
            <p className="error-message">{errors.lname.message}</p>
          )}
        </div>

        {/* Label and textbox for EMAIL ADDRESS  */}
        <div className="input-pair-container">
          <label htmlFor="email" className="browser-default custom-label">
            Email:
          </label>
          <input
            type="email"
            placeholder="Ex: jstamos88@gmail.com"
            className="browser-default custom-textbox"
            id="email"
            {...register("email", {
              required: "Email is required.",
              pattern: {
                value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
                message: "Invalid email address.",
              },
            })}
          />
          {errors.email && (
            <p className="error-message">{errors.email.message}</p>
          )}
        </div>

        {/* Label and textbox for Telephone */}
        <div className="input-pair-container">
          <label htmlFor="tele" className="browser-default custom-label">
            Phone Number:
          </label>
          <input
            type="tel"
            placeholder="Ex: 704-330-8271"
            className="browser-default custom-textbox"
            id="tele"
            {...register("tele", {
              required: "Phone number is required.",
              pattern: {
                value: /^\d{10}$/,
                message: "Phone number must be exactly 10 digits.",
              },
            })}
          />
          {errors.tele && (
            <p className="error-message">{errors.tele.message}</p>
          )}
        </div>

        {/* Label and Dropdown menu for Contact Reasons */}
        <div className="input-pair-container">
          <label
            htmlFor="contact-reasons"
            className="browser-default custom-label"
          >
            Reason for Contact:
          </label>
          {/* Figure out what the value att. should be */}
          <select
            name="contact-reasons"
            id="contact-reasons"
            className="browser-default custom-dropdown"
            defaultValue=""
            {...register("reason", {
              required: "Please select a reason for contact.",
            })}
          >
            <option value="" className="browser-default" disabled>
              Select a reason
            </option>
            <option value="private-tutoring" className="browser-default">
              Private Tutoring
            </option>
            <option value="sponsorships" className="browser-default">
              Sponsorships
            </option>
            <option value="collaboration" className="browser-default">
              Collaboration
            </option>
            <option value="content-requests" className="browser-default">
              Content Requests
            </option>
            <option value="site-errors" className="browser-default">
              Site Errors/Bugs
            </option>
            <option value="other" className="browser-default">
              Other
            </option>
          </select>
          {errors.reason && (
            <p className="error-message">{errors.reason.message}</p>
          )}
        </div>

        {/* Label and textarea for comments */}
        <div className="input-pair-container">
          <label htmlFor="comments" className="browser-default custom-label">
            Comments:
          </label>
          <textarea
            className="browser-default custom-textarea"
            name="comments"
            id="comments"
            placeholder="Enter any additional that we may need..."
            {...register("comments", {
              required: "Comments are required.",
              minLength: {
                value: 10,
                message: "Comments must be at least 10 characters.",
              },
              maxLength: {
                value: 1000,
                message: "Comments must be no more that 1000 characters.",
              },
            })}
          ></textarea>
          {errors.comments && (
            <p className="error-message">{errors.comments.message}</p>
          )}
        </div>

        <div className="container center">
          <input type="submit" className="submit-button" />
        </div>
      </form>
    </main>
  );
}
