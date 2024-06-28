import React from 'react';

/**
 * Props for the ContentCard component
 * @interface ContentCardProps
 * @extends React.HTMLAttributes<HTMLDivElement>
 */
export interface ContentCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The title of the card */
  title: string;
  /** The content of the card */
  content: string;
  /** The text for the learn more link */
  learnMoreText?: string;
  /** The URL for the learn more link */
  learnMoreUrl?: string;
  /** Theme color for the component */
  theme?: string;
}

/**
 * ContentCard component to display a card with title, content, and a learn more link
 * @param {ContentCardProps} props - The props for the component
 */
export const ContentCard: React.FC<ContentCardProps> = ({
  title,
  content,
  learnMoreText = 'Learn More',
  learnMoreUrl = '#',
  theme = 'indigo',
  className = '',
  ...rest
}) => {
  return (
    <div className={`xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60 dark:border-gray-700 ${className}`} {...rest}>
      <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2 dark:text-white">
        {title}
      </h2>
      <p className="leading-relaxed text-base mb-4 dark:text-gray-400">
        {content}
      </p>
      <a href={learnMoreUrl} className={`text-${theme}-500 inline-flex items-center dark:text-${theme}-400`}>
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