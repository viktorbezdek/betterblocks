import React from 'react';

/**
 * Props for the CategoryList component
 * @interface CategoryListProps
 * @extends React.HTMLAttributes<HTMLDivElement>
 */
export interface CategoryListProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The title for the category list */
  title: string;
  /** Array of category links */
  categories: Array<{
    /** The text for the category link */
    text: string;
    /** The URL for the category link */
    url: string;
  }>;
}

/**
 * CategoryList component to display a list of category links
 * @param {CategoryListProps} props - The props for the component
 */
export const CategoryList: React.FC<CategoryListProps> = ({
  title,
  categories,
  className = '',
  ...rest
}) => {
  return (
    <div className={`flex flex-col md:w-1/2 md:pl-12 ${className}`} {...rest}>
      <h2 className="title-font font-semibold text-gray-800 dark:text-gray-200 tracking-wider text-sm mb-3">
        {title}
      </h2>
      <nav className="flex flex-wrap list-none -mb-1">
        {categories.map((category, index) => (
          <li key={index} className="lg:w-1/3 mb-1 w-1/2">
            <a href={category.url} className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white">
              {category.text}
            </a>
          </li>
        ))}
      </nav>
    </div>
  );
};