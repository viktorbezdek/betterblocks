import React from 'react';
import { Header, HeaderProps } from './Header';
import { ContentCard, ContentCardProps } from './ContentCard';
import { Button, ButtonProps } from './Button';

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
  /** Props for the button */
  buttonProps: ButtonProps;
  /** Theme color for the component */
  theme?: string;
}

/**
 * ContentSection component to display a content section with header, cards, and a button
 * @param {ContentSectionProps} props - The props for the component
 */
export const ContentSection: React.FC<ContentSectionProps> = React.memo(({ 
  headerProps,
  contentCards,
  buttonProps,
  theme = 'indigo',
  className = '',
  ...rest
}) => {
  return (
    <section className={`text-gray-600 body-font dark:text-gray-300 ${className}`} {...rest}>
      <div className="container px-5 py-24 mx-auto">
        <Header {...headerProps} theme={theme} />
        <div className="flex flex-wrap">
          {contentCards.map((card, index) => (
            <ContentCard key={index} {...card} theme={theme} />
          ))}
        </div>
        <Button {...buttonProps} theme={theme} />
      </div>
    </section>
  );
});

ContentSection.displayName = 'ContentSection';