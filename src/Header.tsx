import React from 'react';

/**
 * Props for the Header component
 * @interface HeaderProps
 * @extends React.HTMLAttributes<HTMLDivElement>
 */
export interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The title of the header */
  title: string;
  /** The description of the header */
  description: string;
  /** Theme color for the component */
  theme?: string;
}

/**
 * Header component to display a header with title and description
 * @param {HeaderProps} props - The props for the component
 */
export const Header: React.FC<HeaderProps> = ({
  title,
  description,
  theme = 'indigo',
  className = '',
  ...rest
}) => {
  return (
    <div className={`flex flex-col ${className}`} {...rest}>
      <div className="h-1 bg-gray-200 rounded overflow-hidden dark:bg-gray-700">
        <div className={`w-24 h-full bg-${theme}-500`}></div>
      </div>
      <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
        <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0 dark:text-white">
          {title}
        </h1>
        <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0 dark:text-gray-400">
          {description}
        </p>
      </div>
    </div>
  );
};