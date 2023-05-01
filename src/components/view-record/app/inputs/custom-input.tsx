import { HTMLInputTypeAttribute } from "react";

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

export default CustomInput;
