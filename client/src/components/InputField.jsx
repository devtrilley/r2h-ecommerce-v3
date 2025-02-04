import { useForm } from "react-hook-form";

// InputField component that holds div containing input and it's label as well as error handling
export default function InputField({
  type, // Input type
  id, // Id & name is the same
  label, // Label text
  placeholder, // Input placeholder text
  register, // useForm register() func
  validation, //
  errors, // Error handling/messages
}) {
  {
    /* Label and textbox for Input */
  }
  return (
    <div className="input-pair-container">
      <label htmlFor={id} className="browser-default custom-label">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="browser-default custom-textbox"
        id={id}
        {...register(id, validation)}
      />
      {errors[id] && <p className="error-message">{errors[id].message}</p>}
    </div>
  );
}

/*
  NOTE ON ERRORS IN REACT-HOOK-FORM:
  They are stored like this...

  errors = {
    fname: { message: "First name is required." },
    email: { message: "Email is required." }
  }

  Therefore we use "errors[id]" to dynamically access fname because id = our inputs name.

  Dot notation won't work because there isn't a value in our errors obj called id, only the input fields name instead
*/
