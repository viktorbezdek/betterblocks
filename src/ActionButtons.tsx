import React from 'react';

/**
 * Props for the ActionButtons component
 * @interface ActionButtonsProps
 * @extends React.HTMLAttributes<HTMLDivElement>
 */
export interface ActionButtonsProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The price of the product */
  price: number;
  /** The text for the main action button */
  buttonText: string;
  /** Callback function for the main action button */
  onButtonClick?: () => void;
  /** Callback function for the favorite button */
  onFavoriteClick?: () => void;
  /** Theme color for the component */
  theme?: string;
}

/**
 * ActionButtons component to display price and action buttons
 * @param {ActionButtonsProps} props - The props for the component
 */
export const ActionButtons: React.FC<ActionButtonsProps> = ({
  price,
  buttonText,
  onButtonClick,
  onFavoriteClick,
  theme = 'indigo',
  className = '',
  ...rest
}) => {
  return (
    <div className={`flex ${className}`} {...rest}>
      <span className="title-font font-medium text-2xl text-gray-900 dark:text-white">
        ${price.toFixed(2)}
      </span>
      <button
        onClick={onButtonClick}
        className={`flex ml-auto text-white bg-${theme}-500 border-0 py-2 px-6 focus:outline-none hover:bg-${theme}-600 rounded`}
      >
        {buttonText}
      </button>
      <button
        onClick={onFavoriteClick}
        className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4 dark:bg-gray-700 dark:text-gray-400"
      >
        <svg
          fill="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="w-5 h-5"
          viewBox="0 0 24 24"
        >
          <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
        </svg>
      </button>
    </div>
  );
};