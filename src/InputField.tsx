import React from 'react';

/**
 * Props for the InputField component
 * @interface InputFieldProps
 * @extends React.InputHTMLAttributes<HTMLInputElement>
 */
export interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** The label for the input field */
  label: string;
  /** Theme color for the component */
  theme?: string;
}

/**
 * InputField component to display a labeled input field
 * @param {InputFieldProps} props - The props for the component
 */
export const InputField: React.FC<InputFieldProps> = ({
  label,
  id,
  theme = 'indigo',
  className = '',
  ...rest
}) => {
  return (
    <div className="relative mb-4">
      <label htmlFor={id} className="leading-7 text-sm text-gray-600 dark:text-gray-400">
        {label}
      </label>
      <input
        id={id}
        className={`w-full bg-white dark:bg-gray-700 rounded border border-gray-300 dark:border-gray-600 focus:border-${theme}-500 focus:ring-2 focus:ring-${theme}-200 text-base outline-none text-gray-700 dark:text-gray-200 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out ${className}`}
        {...rest}
      />
    </div>
  );
};