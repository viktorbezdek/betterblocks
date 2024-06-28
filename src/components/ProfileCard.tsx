import React from 'react';

/**
 * Props for the ProfileCard component
 * @interface ProfileCardProps
 * @extends React.HTMLAttributes<HTMLDivElement>
 */
export interface ProfileCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The name of the profile */
  name: string;
  /** The description of the profile */
  description: string;
  /** The SVG path for the profile icon */
  iconPath: string;
  /** Theme color for the component */
  theme?: string;
}

/**
 * ProfileCard component to display a user profile card
 * @param {ProfileCardProps} props - The props for the component
 */
export const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  description,
  iconPath,
  theme = 'indigo',
  className = '',
  ...rest
}) => {
  return (
    <div className={`sm:w-1/3 text-center sm:pr-8 sm:py-8 ${className}`} {...rest}>
      <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400 dark:bg-gray-700 dark:text-gray-300">
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="w-10 h-10"
          viewBox="0 0 24 24"
        >
          <path d={iconPath} />
        </svg>
      </div>
      <div className="flex flex-col items-center text-center justify-center">
        <h2 className="font-medium title-font mt-4 text-gray-900 text-lg dark:text-white">
          {name}
        </h2>
        <div className={`w-12 h-1 bg-${theme}-500 rounded mt-2 mb-4`}></div>
        <p className="text-base dark:text-gray-400">{description}</p>
      </div>
    </div>
  );
};