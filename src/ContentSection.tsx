import React from 'react';
import { Header, HeaderProps } from './Header';
import { ContentCard, ContentCardProps } from './ContentCard';

/**
 * Props for the ContentSection component
 * @interface ContentSectionProps
 * @extends React.HTMLAttributes<HTMLElement>
 */
export interface ContentSectionProps extends React.HTMLAttributes<HTMLElement> {
  /** Props for the header */
  headerProps: HeaderProps;
  /** Array of content cards */
  contentCards: ContentCardProps[];
  /** Theme color for the component */
  theme?: string;
}

/**
 * ContentSection component to display a content section with header and cards
 * @param {ContentSectionProps} props - The props for the component
 */
export const ContentSection: React.FC<ContentSectionProps> = React.memo(({ 
  headerProps,
  contentCards,
  theme = 'indigo',
  className = '',
  ...rest
}) => {
  return (
    <section className={`text-gray-600 body-font dark:text-gray-300 ${className}`} {...rest}>
      <div className="container px-5 py-24 mx-auto">
        <Header {...headerProps} theme={theme} />
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          {contentCards.map((card, index) => (
            <ContentCard key={index} {...card} theme={theme} />
          ))}
        </div>
      </div>
    </section>
  );
});

ContentSection.displayName = 'ContentSection';