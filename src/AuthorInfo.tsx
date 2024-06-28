import React from 'react';

/**
 * Props for the AuthorInfo component
 * @interface AuthorInfoProps
 * @extends React.HTMLAttributes<HTMLAnchorElement>
 */
export interface AuthorInfoProps extends React.HTMLAttributes<HTMLAnchorElement> {
  /** The name of the author */
  name: string;
  /** The role or title of the author */
  role: string;
  /** The URL of the author's avatar */
  avatarUrl: string;
}

/**
 * AuthorInfo component to display information about the author
 * @param {AuthorInfoProps} props - The props for the component
 */
export const AuthorInfo: React.FC<AuthorInfoProps> = ({
  name,
  role,
  avatarUrl,
  className = '',
  ...rest
}) => {
  return (
    <a href="#" className={`inline-flex items-center ${className}`} {...rest}>
      <img
        alt={`Avatar of ${name}`}
        src={avatarUrl}
        className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
      />
      <span className="flex-grow flex flex-col pl-4">
        <span className="title-font font-medium text-gray-900 dark:text-white">{name}</span>
        <span className="text-gray-400 text-xs tracking-widest mt-0.5 dark:text-gray-500">{role}</span>
      </span>
    </a>
  );
};