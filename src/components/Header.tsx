import React from 'react';

/**
 * Props for the Header component
 * @interface HeaderProps
 * @extends React.HTMLAttributes<HTMLDivElement>
 */
export interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The subtitle of the header */
  subtitle: string;
  /** The title of the header */
  title: string;
  /** The description of the header */
  description: string;
  /** Theme color for the component */
  theme?: string;
}

/**
 * Header component to display a header with subtitle, title, and description
 * @param {HeaderProps} props - The props for the component
 */
export const Header: React.FC<HeaderProps> = ({
  subtitle,
  title,
  description,
  theme = 'indigo',
  className = '',
  ...rest
}) => {
  return (
    <div className={`flex flex-col text-center w-full mb-20 ${className}`} {...rest}>
      <h2 className={`text-xs text-${theme}-500 tracking-widest font-medium title-font mb-1 dark:text-${theme}-400`}>
        {subtitle}
      </h2>
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 dark:text-white">
        {title}
      </h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base dark:text-gray-400">
        {description}
      </p>
    </div>
  );
};