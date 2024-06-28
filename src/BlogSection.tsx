import React from 'react';
import { BlogCard, BlogCardProps } from './BlogCard';

/**
 * Props for the BlogSection component
 * @interface BlogSectionProps
 * @extends React.HTMLAttributes<HTMLElement>
 */
export interface BlogSectionProps extends React.HTMLAttributes<HTMLElement> {
  /** Array of blog posts to display */
  posts: BlogCardProps[];
  /** Theme color for the component */
  theme?: string;
}

/**
 * BlogSection component to display a grid of blog posts
 * @param {BlogSectionProps} props - The props for the component
 */
export const BlogSection: React.FC<BlogSectionProps> = React.memo(({ 
  posts,
  theme = 'indigo',
  className = '',
  ...rest
}) => {
  return (
    <section className={`text-gray-600 body-font dark:text-gray-300 ${className}`} {...rest}>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {posts.map((post, index) => (
            <div key={index} className="p-4 md:w-1/3">
              <BlogCard {...post} theme={theme} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

BlogSection.displayName = 'BlogSection';