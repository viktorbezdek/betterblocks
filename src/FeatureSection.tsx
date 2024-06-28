import React from 'react';
import { FeatureCard, FeatureCardProps } from './FeatureCard';

/**
 * Props for the FeatureSection component
 * @interface FeatureSectionProps
 * @extends React.HTMLAttributes<HTMLElement>
 */
export interface FeatureSectionProps extends React.HTMLAttributes<HTMLElement> {
  /** The title of the feature section */
  title: string;
  /** Array of feature cards */
  features: FeatureCardProps[];
  /** Theme color for the component */
  theme?: string;
}

/**
 * FeatureSection component to display a section with a title and feature cards
 * @param {FeatureSectionProps} props - The props for the component
 */
export const FeatureSection: React.FC<FeatureSectionProps> = React.memo(({ 
  title,
  features,
  theme = 'indigo',
  className = '',
  ...rest
}) => {
  return (
    <section className={`text-gray-600 body-font dark:text-gray-300 ${className}`} {...rest}>
      <div className="container px-5 py-24 mx-auto">
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 dark:text-white mb-20">
          {title}
        </h1>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} theme={theme} />
          ))}
        </div>
      </div>
    </section>
  );
});

FeatureSection.displayName = 'FeatureSection';