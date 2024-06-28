import React from 'react';
import { IconText, IconTextProps } from './IconText';

/**
 * Props for the BlogCard component
 * @interface BlogCardProps
 * @extends React.HTMLAttributes<HTMLDivElement>
 */
export interface BlogCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The image URL for the blog post */
  imageUrl: string;
  /** The category of the blog post */
  category: string;
  /** The title of the blog post */
  title: string;
  /** The content of the blog post */
  content: string;
  /** The link for the "Learn More" button */
  learnMoreLink: string;
  /** The number of views */
  views: number;
  /** The number of comments */
  comments: number;
  /** Theme color for the component */
  theme?: string;
}

/**
 * BlogCard component to display a single blog post
 * @param {BlogCardProps} props - The props for the component
 */
export const BlogCard: React.FC<BlogCardProps> = ({
  imageUrl,
  category,
  title,
  content,
  learnMoreLink,
  views,
  comments,
  theme = 'indigo',
  className = '',
  ...rest
}) => {
  return (
    <div className={`h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden dark:border-gray-700 ${className}`} {...rest}>
      <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={imageUrl} alt={title} />
      <div className="p-6">
        <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{category}</h2>
        <h1 className="title-font text-lg font-medium text-gray-900 mb-3 dark:text-white">{title}</h1>
        <p className="leading-relaxed mb-3 dark:text-gray-300">{content}</p>
        <div className="flex items-center flex-wrap">
          <a href={learnMoreLink} className={`text-${theme}-500 inline-flex items-center md:mb-2 lg:mb-0 dark:text-${theme}-400`}>
            Learn More
            <svg
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="M12 5l7 7-7 7" />
            </svg>
          </a>
          <IconText
            icon="eye"
            text={`${views}K`}
            className="lg:ml-auto md:ml-0 ml-auto"
          />
          <IconText
            icon="comment"
            text={`${comments}`}
          />
        </div>
      </div>
    </div>
  );
};