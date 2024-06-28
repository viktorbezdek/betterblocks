import React from 'react';

/**
 * Props for the ActionArea component
 * @interface ActionAreaProps
 * @extends React.HTMLAttributes<HTMLDivElement>
 */
export interface ActionAreaProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The description text */
  description: string;
  /** The text for the primary button */
  buttonText: string;
  /** The text for the "Learn More" link */
  learnMoreText?: string;
  /** The URL for the "Learn More" link */
  learnMoreUrl?: string;
  /** Theme color for the component */
  theme?: string;
  /** Callback function for button click */
  onButtonClick?: () => void;
}

/**
 * ActionArea component to display a description, button, and "Learn More" link
 * @param {ActionAreaProps} props - The props for the component
 */
export const ActionArea: React.FC<ActionAreaProps> = ({
  description,
  buttonText,
  learnMoreText = 'Learn More',
  learnMoreUrl = '#',
  theme = 'indigo',
  onButtonClick,
  className = '',
  ...rest
}) => {
  return (
    <div className={`flex md:mt-4 mt-6 ${className}`} {...rest}>
      <button
        onClick={onButtonClick}
        className={`inline-flex text-white bg-${theme}-500 border-0 py-1 px-4 focus:outline-none hover:bg-${theme}-600 rounded`}
      >
        {buttonText}
      </button>
      <a href={learnMoreUrl} className={`text-${theme}-500 inline-flex items-center ml-4 dark:text-${theme}-400`}>
        {learnMoreText}
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="w-4 h-4 ml-2"
          viewBox="0 0 24 24"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </a>
    </div>
  );
};