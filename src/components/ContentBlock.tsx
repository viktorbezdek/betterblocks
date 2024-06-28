import React from 'react';

/**
 * Props for the ContentBlock component
 * @interface ContentBlockProps
 * @extends React.HTMLAttributes<HTMLDivElement>
 */
export interface ContentBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The title of the content block */
  title: string;
  /** The content of the block */
  content: string;
  /** The text for the "Learn More" link */
  learnMoreText?: string;
  /** The URL for the "Learn More" link */
  learnMoreUrl?: string;
  /** Theme color for the component */
  theme?: string;
}

/**
 * ContentBlock component to display a block of content with a title and "Learn More" link
 * @param {ContentBlockProps} props - The props for the component
 */
export const ContentBlock: React.FC<ContentBlockProps> = ({
  title,
  content,
  learnMoreText = 'Learn More',
  learnMoreUrl = '#',
  theme = 'indigo',
  className = '',
  ...rest
}) => {
  return (
    <div className={`md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-200 dark:border-gray-700 ${className}`} {...rest}>
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900 dark:text-white">
        {title}
      </h1>
      <p className="leading-relaxed text-base dark:text-gray-400">
        {content}
      </p>
      <a href={learnMoreUrl} className={`text-${theme}-500 inline-flex items-center mt-4 dark:text-${theme}-400`}>
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