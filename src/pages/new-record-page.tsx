import React, { HTMLInputTypeAttribute } from "react";

interface CustomInputProps {
  label: string;
  id: string;
  placeholder: string;
  type: HTMLInputTypeAttribute;
  required?: boolean;
}

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  id,
  placeholder,
  type,
  required,
}) => {
  return (
    <div className="relative z-0 w-full mb-6 group">
      <label
        htmlFor="email"
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

const NewRecordPage: React.FC = () => {
  return (
    <div className="container mx-auto flex flex-col items-center p-3 mt-14">
      <h1 className="text-4xl font-bold">ADD PATIENT</h1>

      <div className="w-full max-w-3xl mt-10">
        <form>
          <div className="grid md:grid-cols-2 md:gap-6">
            <CustomInput
              id="first_name"
              label="First Name"
              placeholder="John"
              type="text"
            />

            <CustomInput
              id="last_name"
              label="Last Name"
              placeholder="Doe"
              type="text"
            />
          </div>

          <CustomInput
            id="email"
            label="Your Email"
            placeholder="test@gmail.com"
            type="email"
          />

          <CustomInput
            id="password"
            label="Password"
            placeholder=""
            type="password"
          />

          <CustomInput
            id="confirm_password"
            label="Confirm Password"
            placeholder="test@gmail.com"
            type="password"
          />

          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center mt-3"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewRecordPage;
