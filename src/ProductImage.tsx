import React from 'react';

/**
 * Props for the ProductImage component
 * @interface ProductImageProps
 * @extends React.ImgHTMLAttributes<HTMLImageElement>
 */
export interface ProductImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  /** The alt text for the image */
  alt: string;
}

/**
 * ProductImage component to display the product image
 * @param {ProductImageProps} props - The props for the component
 */
export const ProductImage: React.FC<ProductImageProps> = ({
  alt,
  className = '',
  ...rest
}) => {
  return (
    <img
      alt={alt}
      className={`lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded ${className}`}
      {...rest}
    />
  );
};