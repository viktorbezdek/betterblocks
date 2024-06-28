import React from 'react';
import { ProductCard, ProductCardProps } from './ProductCard';

/**
 * Props for the ProductGrid component
 * @interface ProductGridProps
 * @extends React.HTMLAttributes<HTMLElement>
 */
export interface ProductGridProps extends React.HTMLAttributes<HTMLElement> {
  /** Array of product data */
  products: ProductCardProps[];
}

/**
 * ProductGrid component to display a grid of product cards
 * @param {ProductGridProps} props - The props for the component
 */
export const ProductGrid: React.FC<ProductGridProps> = React.memo(({ 
  products,
  className = '',
  ...rest
}) => {
  return (
    <section className={`text-gray-600 body-font dark:text-gray-300 ${className}`} {...rest}>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
});

ProductGrid.displayName = 'ProductGrid';