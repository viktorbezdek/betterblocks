import React from 'react';

/**
 * Props for the ProductCard component
 * @interface ProductCardProps
 * @extends React.HTMLAttributes<HTMLDivElement>
 */
export interface ProductCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The image URL for the product */
  imageUrl: string;
  /** The category of the product */
  category: string;
  /** The name of the product */
  name: string;
  /** The price of the product */
  price: number;
  /** The URL for the product details page */
  detailsUrl?: string;
}

/**
 * ProductCard component to display a single product
 * @param {ProductCardProps} props - The props for the component
 */
export const ProductCard: React.FC<ProductCardProps> = ({
  imageUrl,
  category,
  name,
  price,
  detailsUrl = '#',
  className = '',
  ...rest
}) => {
  return (
    <div className={`lg:w-1/4 md:w-1/2 p-4 w-full ${className}`} {...rest}>
      <a href={detailsUrl} className="block relative h-48 rounded overflow-hidden">
        <img
          alt={name}
          className="object-cover object-center w-full h-full block"
          src={imageUrl}
        />
      </a>
      <div className="mt-4">
        <h3 className="text-gray-500 dark:text-gray-400 text-xs tracking-widest title-font mb-1">
          {category}
        </h3>
        <h2 className="text-gray-900 dark:text-white title-font text-lg font-medium">
          {name}
        </h2>
        <p className="mt-1 dark:text-gray-300">${price.toFixed(2)}</p>
      </div>
    </div>
  );
};