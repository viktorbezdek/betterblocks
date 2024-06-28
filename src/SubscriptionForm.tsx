import React from 'react';
import { InputField, InputFieldProps } from './InputField';

/**
 * Props for the SubscriptionForm component
 * @interface SubscriptionFormProps
 * @extends React.HTMLAttributes<HTMLDivElement>
 */
export interface SubscriptionFormProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Props for the full name input field */
  fullNameProps: InputFieldProps;
  /** Props for the email input field */
  emailProps: InputFieldProps;
  /** The text for the submit button */
  buttonText: string;
  /** Theme color for the component */
  theme?: string;
  /** Callback function for form submission */
  onSubmit?: (fullName: string, email: string) => void;
}

/**
 * SubscriptionForm component to display a subscription form with input fields and a submit button
 * @param {SubscriptionFormProps} props - The props for the component
 */
export const SubscriptionForm: React.FC<SubscriptionFormProps> = ({
  fullNameProps,
  emailProps,
  buttonText,
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
    <form onSubmit={handleSubmit} className={`flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end ${className}`} {...rest}>
      <InputField {...fullNameProps} theme={theme} />
      <InputField {...emailProps} theme={theme} />
      <button type="submit" className={`text-white bg-${theme}-500 border-0 py-2 px-8 focus:outline-none hover:bg-${theme}-600 rounded text-lg`}>
        {buttonText}
      </button>
    </form>
  );
};