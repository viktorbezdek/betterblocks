import React from 'react';
import { AuthorInfo, AuthorInfoProps } from './AuthorInfo';

/**
 * Props for the BlogPost component
 * @interface BlogPostProps
 * @extends React.HTMLAttributes<HTMLDivElement>
 */
export interface BlogPostProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The category of the blog post */
  category: string;
  /** The title of the blog post */
  title: string;
  /** The content of the blog post */
  content: string;
  /** The link for the "Learn More" button */
  learnMoreLink?: string;
  /** The number of views */
  views: number;
  /** The number of comments */
  comments: number;
  /** The author information */
  author: AuthorInfoProps;
  /** Theme color for the component */
  theme?: string;
}

/**
 * BlogPost component to display a single blog post
 * @param {BlogPostProps} props - The props for the component
 */
export const BlogPost: React.FC<BlogPostProps> = ({
  category,
  title,
  content,
  learnMoreLink = '#',
  views,
  comments,
  author,
  theme = 'indigo',
  className = '',
  ...rest
}) => {
  return (
    <div className={`p-12 md:w-1/2 flex flex-col items-start ${className}`} {...rest}>
      <span className={`inline-block py-1 px-2 rounded bg-${theme}-50 text-${theme}-500 text-xs font-medium tracking-widest dark:bg-${theme}-900 dark:text-${theme}-300`}>
        {category}
      </span>
      <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4 dark:text-white">
        {title}
      </h2>
      <p className="leading-relaxed mb-8 dark:text-gray-300">{content}</p>
      <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full dark:border-gray-700">
        <a href={learnMoreLink} className={`text-${theme}-500 inline-flex items-center dark:text-${theme}-400`}>
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
        <span className="text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200 dark:border-gray-700">
          <svg
            className="w-4 h-4 mr-1"
            stroke="currentColor"
            strokeWidth={2}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
            <circle cx={12} cy={12} r={3} />
          </svg>
          {views}K
        </span>
        <span className="text-gray-400 inline-flex items-center leading-none text-sm">
          <svg
            className="w-4 h-4 mr-1"
            stroke="currentColor"
            strokeWidth={2}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
          </svg>
          {comments}
        </span>
      </div>
      <AuthorInfo {...author} />
    </div>
  );
};