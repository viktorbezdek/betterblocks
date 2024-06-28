import React, { useState } from 'react';

/**
 * Props for the ContactForm component
 * @interface ContactFormProps
 * @extends React.HTMLAttributes<HTMLDivElement>
 */
export interface ContactFormProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The title of the form */
  title: string;
  /** The description of the form */
  description: string;
  /** The label for the email input */
  emailLabel: string;
  /** The label for the message input */
  messageLabel: string;
  /** The text for the submit button */
  buttonText: string;
  /** The footer text */
  footerText: string;
  /** Theme color for the component */
  theme?: string;
  /** Callback function for form submission */
  onSubmit?: (email: string, message: string) => void;
}

/**
 * ContactForm component to display a contact form
 * @param {ContactFormProps} props - The props for the component
 */
export const ContactForm: React.FC<ContactFormProps> = ({
  title,
  description,
  emailLabel,
  messageLabel,
  buttonText,
  footerText,
  theme = 'indigo',
  onSubmit,
  className = '',
  ...rest
}) => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(email, message);
    }
  };

  return (
    <div className={`lg:w-1/3 md:w-1/2 bg-white dark:bg-gray-800 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md ${className}`} {...rest}>
      <h2 className="text-gray-900 dark:text-white text-lg mb-1 font-medium title-font">{title}</h2>
      <p className="leading-relaxed mb-5 text-gray-600 dark:text-gray-400">{description}</p>
      <form onSubmit={handleSubmit}>
        <div className="relative mb-4">
          <label htmlFor="email" className="leading-7 text-sm text-gray-600 dark:text-gray-400">
            {emailLabel}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`w-full bg-white dark:bg-gray-700 rounded border border-gray-300 dark:border-gray-600 focus:border-${theme}-500 focus:ring-2 focus:ring-${theme}-200 text-base outline-none text-gray-700 dark:text-gray-300 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`}
            required
          />
        </div>
        <div className="relative mb-4">
          <label htmlFor="message" className="leading-7 text-sm text-gray-600 dark:text-gray-400">
            {messageLabel}
          </label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={`w-full bg-white dark:bg-gray-700 rounded border border-gray-300 dark:border-gray-600 focus:border-${theme}-500 focus:ring-2 focus:ring-${theme}-200 h-32 text-base outline-none text-gray-700 dark:text-gray-300 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out`}
            required
          ></textarea>
        </div>
        <button type="submit" className={`text-white bg-${theme}-500 border-0 py-2 px-6 focus:outline-none hover:bg-${theme}-600 rounded text-lg`}>
          {buttonText}
        </button>
      </form>
      <p className="text-xs text-gray-500 dark:text-gray-400 mt-3">{footerText}</p>
    </div>
  );
};