import React from 'react';

/**
 * Props for the ProductTabs component
 * @interface ProductTabsProps
 * @extends React.HTMLAttributes<HTMLDivElement>
 */
export interface ProductTabsProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Array of tab items */
  tabs: Array<{
    /** The label for the tab */
    label: string;
    /** The URL for the tab */
    url: string;
    /** Whether the tab is active */
    isActive?: boolean;
  }>;
  /** Theme color for the component */
  theme?: string;
}

/**
 * ProductTabs component to display tabs for product information
 * @param {ProductTabsProps} props - The props for the component
 */
export const ProductTabs: React.FC<ProductTabsProps> = ({
  tabs,
  theme = 'indigo',
  className = '',
  ...rest
}) => {
  return (
    <div className={`flex mb-4 ${className}`} {...rest}>
      {tabs.map((tab, index) => (
        <a
          key={index}
          href={tab.url}
          className={`flex-grow border-b-2 ${tab.isActive ? `border-${theme}-500 text-${theme}-500` : 'border-gray-300 dark:border-gray-700'} py-2 text-lg px-1`}
        >
          {tab.label}
        </a>
      ))}
    </div>
  );
};