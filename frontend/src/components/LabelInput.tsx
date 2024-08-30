import { ChangeEvent } from "react";

interface LabelInput {
  label: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}
export const LabelInput = ({
  label,
  placeholder,
  onChange,
  type,
}: LabelInput) => {
  return (
    <div className="mt-2">
      <label htmlFor="first_name" className="block mb-2 text-md font-bold ">
        {" "}
        {label}
      </label>
      <input
        type={type || "text"}
        onChange={onChange}
        id="first_name"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
        placeholder={placeholder}
        required
      />
    </div>
  );
};
