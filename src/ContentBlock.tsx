import React from 'react';

/**
 * Props for the ContentBlock component
 * @interface ContentBlockProps
 * @extends React.HTMLAttributes<HTMLDivElement>
 */
export interface ContentBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The title of the content block */
  title: string;
  /** The description of the content block */
  description: string;
}

/**
 * ContentBlock component to display a title and description
 * @param {ContentBlockProps} props - The props for the component
 */
export const ContentBlock: React.FC<ContentBlockProps> = ({
  title,
  description,
  className = '',
  ...rest
}) => {
  return (
    <div className={`lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0 ${className}`} {...rest}>
      <h1 className="title-font font-medium text-3xl text-gray-900 dark:text-white">
        {title}
      </h1>
      <p className="leading-relaxed mt-4 dark:text-gray-400">
        {description}
      </p>
    </div>
  );
};