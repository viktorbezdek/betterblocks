import React from 'react';

/**
 * Props for the Icon component
 * @interface IconProps
 * @extends React.SVGAttributes<SVGElement>
 */
export interface IconProps extends React.SVGAttributes<SVGElement> {
  /** The SVG path for the icon */
  path: string;
  /** Theme color for the component */
  theme?: string;
}

/**
 * Icon component to display an SVG icon
 * @param {IconProps} props - The props for the component
 */
export const Icon: React.FC<IconProps> = ({
  path,
  theme = 'indigo',
  className = '',
  ...rest
}) => {
  return (
    <div className={`w-12 h-12 inline-flex items-center justify-center rounded-full bg-${theme}-100 dark:bg-${theme}-900 text-${theme}-500 dark:text-${theme}-400 mb-4 flex-shrink-0 ${className}`}>
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        className="w-6 h-6"
        viewBox="0 0 24 24"
        {...rest}
      >
        <path d={path} />
      </svg>
    </div>
  );
};