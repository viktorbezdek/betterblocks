import React from 'react';
import { ContactForm, ContactFormProps } from './ContactForm';
import { Map, MapProps } from './Map';

/**
 * Props for the ContactSection component
 * @interface ContactSectionProps
 * @extends React.HTMLAttributes<HTMLElement>
 */
export interface ContactSectionProps extends React.HTMLAttributes<HTMLElement> {
  /** Props for the contact form */
  formProps: ContactFormProps;
  /** Props for the map */
  mapProps: MapProps;
  /** Theme color for the component */
  theme?: string;
}

/**
 * ContactSection component to display a contact form with a map
 * @param {ContactSectionProps} props - The props for the component
 */
export const ContactSection: React.FC<ContactSectionProps> = React.memo(({ 
  formProps,
  mapProps,
  theme = 'indigo',
  className = '',
  ...rest
}) => {
  return (
    <section className={`text-gray-600 body-font relative dark:text-gray-300 ${className}`} {...rest}>
      <Map {...mapProps} />
      <div className="container px-5 py-24 mx-auto flex">
        <ContactForm {...formProps} theme={theme} />
      </div>
    </section>
  );
});

ContactSection.displayName = 'ContactSection';