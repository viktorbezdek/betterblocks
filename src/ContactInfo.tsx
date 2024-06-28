import React from 'react';

/**
 * Props for the ContactInfo component
 * @interface ContactInfoProps
 * @extends React.HTMLAttributes<HTMLDivElement>
 */
export interface ContactInfoProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The address of the business */
  address: string;
  /** The email of the business */
  email: string;
  /** The phone number of the business */
  phone: string;
  /** Theme color for the component */
  theme?: string;
}

/**
 * ContactInfo component to display contact information
 * @param {ContactInfoProps} props - The props for the component
 */
export const ContactInfo: React.FC<ContactInfoProps> = ({
  address,
  email,
  phone,
  theme = 'indigo',
  className = '',
  ...rest
}) => {
  return (
    <div className={`bg-white dark:bg-gray-800 relative flex flex-wrap py-6 rounded shadow-md ${className}`} {...rest}>
      <div className="lg:w-1/2 px-6">
        <h2 className="title-font font-semibold text-gray-900 dark:text-white tracking-widest text-xs">ADDRESS</h2>
        <p className="mt-1 text-gray-600 dark:text-gray-400">{address}</p>
      </div>
      <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
        <h2 className="title-font font-semibold text-gray-900 dark:text-white tracking-widest text-xs">EMAIL</h2>
        <a href={`mailto:${email}`} className={`text-${theme}-500 leading-relaxed`}>{email}</a>
        <h2 className="title-font font-semibold text-gray-900 dark:text-white tracking-widest text-xs mt-4">PHONE</h2>
        <p className="leading-relaxed text-gray-600 dark:text-gray-400">{phone}</p>
      </div>
    </div>
  );
};