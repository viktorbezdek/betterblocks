import React from 'react';

/**
 * Props for the Button component
 * @interface ButtonProps
 * @extends React.ButtonHTMLAttributes<HTMLButtonElement>
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** The text to display on the button */
  text: string;
  /** Theme color for the component */
  theme?: string;
}

/**
 * Button component to display a styled button
 * @param {ButtonProps} props - The props for the component
 */
export const Button: React.FC<ButtonProps> = ({
  text,
  theme = 'indigo',
  className = '',
  ...rest
}) => {
  return (
    <button
      className={`flex-shrink-0 text-white bg-${theme}-500 border-0 py-2 px-8 focus:outline-none hover:bg-${theme}-600 rounded text-lg mt-10 sm:mt-0 dark:bg-${theme}-600 dark:hover:bg-${theme}-700 ${className}`}
      {...rest}
    >
      {text}
    </button>
  );
};