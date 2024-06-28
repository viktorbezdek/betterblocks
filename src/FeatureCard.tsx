import React from 'react';
import { Icon, IconProps } from './Icon';

/**
 * Props for the FeatureCard component
 * @interface FeatureCardProps
 * @extends React.HTMLAttributes<HTMLDivElement>
 */
export interface FeatureCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Props for the icon */
  iconProps: IconProps;
  /** The title of the feature */
  title: string;
  /** The description of the feature */
  description: string;
  /** The text for the "Learn More" link */
  learnMoreText?: string;
  /** The URL for the "Learn More" link */
  learnMoreUrl?: string;
  /** Theme color for the component */
  theme?: string;
}

/**
 * FeatureCard component to display a single feature with an icon, title, and description
 * @param {FeatureCardProps} props - The props for the component
 */
export const FeatureCard: React.FC<FeatureCardProps> = ({
  iconProps,
  title,
  description,
  learnMoreText = 'Learn More',
  learnMoreUrl = '#',
  theme = 'indigo',
  className = '',
  ...rest
}) => {
  return (
    <div className={`p-4 md:w-1/3 flex ${className}`} {...rest}>
      <Icon {...iconProps} theme={theme} />
      <div className="flex-grow pl-6">
        <h2 className="text-gray-900 dark:text-white text-lg title-font font-medium mb-2">
          {title}
        </h2>
        <p className="leading-relaxed text-base dark:text-gray-400">
          {description}
        </p>
        <a href={learnMoreUrl} className={`mt-3 text-${theme}-500 dark:text-${theme}-400 inline-flex items-center`}>
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
    </div>
  );
};