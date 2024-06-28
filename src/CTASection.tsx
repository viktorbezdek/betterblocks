import React from 'react';
import { Button, ButtonProps } from './Button';

/**
 * Props for the CTASection component
 * @interface CTASectionProps
 * @extends React.HTMLAttributes<HTMLElement>
 */
export interface CTASectionProps extends React.HTMLAttributes<HTMLElement> {
  /** The title text for the CTA */
  title: string;
  /** Props for the button */
  buttonProps: ButtonProps;
  /** Theme color for the component */
  theme?: string;
}

/**
 * CTASection component to display a call-to-action section with a title and button
 * @param {CTASectionProps} props - The props for the component
 */
export const CTASection: React.FC<CTASectionProps> = React.memo(({ 
  title,
  buttonProps,
  theme = 'indigo',
  className = '',
  ...rest
}) => {
  return (
    <section className={`text-gray-600 body-font dark:text-gray-300 ${className}`} {...rest}>
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
          <h1 className="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900 dark:text-white">
            {title}
          </h1>
          <Button {...buttonProps} theme={theme} />
        </div>
      </div>
    </section>
  );
});

CTASection.displayName = 'CTASection';