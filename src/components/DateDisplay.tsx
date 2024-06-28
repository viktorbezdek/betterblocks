import React from 'react';

/**
 * Props for the DateDisplay component
 * @interface DateDisplayProps
 * @extends React.HTMLAttributes<HTMLDivElement>
 */
export interface DateDisplayProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The month of the date */
  month: string;
  /** The day of the date */
  day: string | number;
}

/**
 * DateDisplay component to display a date in a stylized format
 * @param {DateDisplayProps} props - The props for the component
 */
export const DateDisplay: React.FC<DateDisplayProps> = ({
  month,
  day,
  className = '',
  ...rest
}) => {
  return (
    <div className={`w-12 flex-shrink-0 flex flex-col text-center leading-none ${className}`} {...rest}>
      <span className="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200 dark:text-gray-400 dark:border-gray-700">
        {month}
      </span>
      <span className="font-medium text-lg text-gray-800 title-font leading-none dark:text-gray-200">
        {day}
      </span>
    </div>
  );
};