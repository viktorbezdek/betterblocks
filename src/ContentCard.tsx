import React from 'react';

/**
 * Props for the ContentCard component
 * @interface ContentCardProps
 * @extends React.HTMLAttributes<HTMLDivElement>
 */
export interface ContentCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The image URL for the card */
  imageUrl: string;
  /** The alt text for the image */
  imageAlt: string;
  /** The title of the card */
  title: string;
  /** The description of the card */
  description: string;
  /** The text for the "Learn More" link */
  learnMoreText?: string;
  /** The URL for the "Learn More" link */
  learnMoreUrl?: string;
  /** Theme color for the component */
  theme?: string;
}

/**
 * ContentCard component to display an image, title, description, and "Learn More" link
 * @param {ContentCardProps} props - The props for the component
 */
export const ContentCard: React.FC<ContentCardProps> = ({
  imageUrl,
  imageAlt,
  title,
  description,
  learnMoreText = 'Learn More',
  learnMoreUrl = '#',
  theme = 'indigo',
  className = '',
  ...rest
}) => {
  return (
    <div className={`p-4 md:w-1/3 sm:mb-0 mb-6 ${className}`} {...rest}>
      <div className="rounded-lg h-64 overflow-hidden">
        <img
          alt={imageAlt}
          className="object-cover object-center h-full w-full"
          src={imageUrl}
        />
      </div>
      <h2 className="text-xl font-medium title-font text-gray-900 mt-5 dark:text-white">
        {title}
      </h2>
      <p className="text-base leading-relaxed mt-2 dark:text-gray-400">
        {description}
      </p>
      <a href={learnMoreUrl} className={`text-${theme}-500 inline-flex items-center mt-3 dark:text-${theme}-400`}>
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