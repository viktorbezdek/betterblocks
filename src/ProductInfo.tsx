import React from 'react';

/**
 * Props for the ProductInfo component
 * @interface ProductInfoProps
 * @extends React.HTMLAttributes<HTMLDivElement>
 */
export interface ProductInfoProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The description of the product */
  description: string;
  /** Object containing product details */
  details: {
    /** The color of the product */
    color: string;
    /** The size of the product */
    size: string;
    /** The quantity of the product */
    quantity: number;
  };
}

/**
 * ProductInfo component to display product information and details
 * @param {ProductInfoProps} props - The props for the component
 */
export const ProductInfo: React.FC<ProductInfoProps> = ({
  description,
  details,
  className = '',
  ...rest
}) => {
  return (
    <div className={className} {...rest}>
      <p className="leading-relaxed mb-4 dark:text-gray-400">{description}</p>
      <div className="flex border-t border-gray-200 py-2 dark:border-gray-700">
        <span className="text-gray-500 dark:text-gray-400">Color</span>
        <span className="ml-auto text-gray-900 dark:text-gray-200">{details.color}</span>
      </div>
      <div className="flex border-t border-gray-200 py-2 dark:border-gray-700">
        <span className="text-gray-500 dark:text-gray-400">Size</span>
        <span className="ml-auto text-gray-900 dark:text-gray-200">{details.size}</span>
      </div>
      <div className="flex border-t border-b mb-6 border-gray-200 py-2 dark:border-gray-700">
        <span className="text-gray-500 dark:text-gray-400">Quantity</span>
        <span className="ml-auto text-gray-900 dark:text-gray-200">{details.quantity}</span>
      </div>
    </div>
  );
};