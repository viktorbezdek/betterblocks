import React from 'react';
import { InputField, InputFieldProps } from './InputField';

/**
 * Props for the SignUpForm component
 * @interface SignUpFormProps
 * @extends React.HTMLAttributes<HTMLDivElement>
 */
export interface SignUpFormProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The title of the form */
  title: string;
  /** Props for the full name input field */
  fullNameProps: InputFieldProps;
  /** Props for the email input field */
  emailProps: InputFieldProps;
  /** The text for the submit button */
  buttonText: string;
  /** The footer text of the form */
  footerText: string;
  /** Theme color for the component */
  theme?: string;
  /** Callback function for form submission */
  onSubmit?: (fullName: string, email: string) => void;
}

/**
 * SignUpForm component to display a sign-up form with input fields and a submit button
 * @param {SignUpFormProps} props - The props for the component
 */
export const SignUpForm: React.FC<SignUpFormProps> = ({
  title,
  fullNameProps,
  emailProps,
  buttonText,
  footerText,
  theme = 'indigo',
  onSubmit,
  className = '',
  ...rest
}) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (onSubmit) {
      const fullName = (e.currentTarget.elements.namedItem('full-name') as HTMLInputElement).value;
      const email = (e.currentTarget.elements.namedItem('email') as HTMLInputElement).value;
      onSubmit(fullName, email);
    }
  };

  return (
    <div className={`lg:w-2/6 md:w-1/2 bg-gray-100 dark:bg-gray-800 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 ${className}`} {...rest}>
      <h2 className="text-gray-900 dark:text-white text-lg font-medium title-font mb-5">{title}</h2>
      <form onSubmit={handleSubmit}>
        <InputField {...fullNameProps} theme={theme} />
        <InputField {...emailProps} theme={theme} />
        <button type="submit" className={`text-white bg-${theme}-500 border-0 py-2 px-8 focus:outline-none hover:bg-${theme}-600 rounded text-lg`}>
          {buttonText}
        </button>
      </form>
      <p className="text-xs text-gray-500 dark:text-gray-400 mt-3">{footerText}</p>
    </div>
  );
};