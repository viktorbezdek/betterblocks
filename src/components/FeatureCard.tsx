import React from 'react';

/**
 * Props for the FeatureCard component
 * @interface FeatureCardProps
 * @extends React.HTMLAttributes<HTMLDivElement>
 */
export interface FeatureCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The icon SVG path for the feature */
  iconPath: string;
  /** The title of the feature */
  title: string;
  /** The description of the feature */
  description: string;
  /** Theme color for the component */
  theme?: string;
}

/**
 * FeatureCard component to display a feature with an icon, title, and description
 * @param {FeatureCardProps} props - The props for the component
 */
export const FeatureCard: React.FC<FeatureCardProps> = ({
  iconPath,
  title,
  description,
  theme = 'indigo',
  className = '',
  ...rest
}) => {
  return (
    <div className={`xl:w-1/3 md:w-1/2 p-4 ${className}`} {...rest}>
      <div className="border border-gray-200 p-6 rounded-lg dark:border-gray-700">
        <div className={`w-10 h-10 inline-flex items-center justify-center rounded-full bg-${theme}-100 text-${theme}-500 mb-4 dark:bg-${theme}-900 dark:text-${theme}-300`}>
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-6 h-6"
            viewBox="0 0 24 24"
          >
            <path d={iconPath} />
          </svg>
        </div>
        <h2 className="text-lg text-gray-900 font-medium title-font mb-2 dark:text-white">
          {title}
        </h2>
        <p className="leading-relaxed text-base dark:text-gray-400">
          {description}
        </p>
      </div>
    </div>
  );
};