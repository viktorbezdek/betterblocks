import React from 'react';

/**
 * Props for the SocialIcons component
 * @interface SocialIconsProps
 * @extends React.HTMLAttributes<HTMLDivElement>
 */
export interface SocialIconsProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Array of social media icons */
  icons: Array<{
    /** The name of the social media platform */
    name: string;
    /** The URL of the social media profile */
    url: string;
    /** The SVG path for the icon */
    svgPath: string;
  }>;
}

/**
 * SocialIcons component to display social media icons
 * @param {SocialIconsProps} props - The props for the component
 */
export const SocialIcons: React.FC<SocialIconsProps> = ({
  icons,
  className = '',
  ...rest
}) => {
  return (
    <span className={`inline-flex ${className}`} {...rest}>
      {icons.map((icon, index) => (
        <a key={icon.name} href={icon.url} className={`text-gray-500 dark:text-gray-400 ${index > 0 ? 'ml-4' : ''}`}>
          <svg
            fill="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <path d={icon.svgPath} />
          </svg>
        </a>
      ))}
    </span>
  );
};