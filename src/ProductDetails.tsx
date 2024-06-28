import React from 'react';
import { ProductImage, ProductImageProps } from './ProductImage';
import { ProductTabs, ProductTabsProps } from './ProductTabs';
import { ProductInfo, ProductInfoProps } from './ProductInfo';
import { ActionButtons, ActionButtonsProps } from './ActionButtons';

/**
 * Props for the ProductDetails component
 * @interface ProductDetailsProps
 * @extends React.HTMLAttributes<HTMLElement>
 */
export interface ProductDetailsProps extends React.HTMLAttributes<HTMLElement> {
  /** The brand name of the product */
  brand: string;
  /** The name of the product */
  name: string;
  /** Props for the product image */
  imageProps: ProductImageProps;
  /** Props for the product tabs */
  tabsProps: ProductTabsProps;
  /** Props for the product info */
  infoProps: ProductInfoProps;
  /** Props for the action buttons */
  actionProps: ActionButtonsProps;
  /** Theme color for the component */
  theme?: string;
}

/**
 * ProductDetails component to display detailed information about a product
 * @param {ProductDetailsProps} props - The props for the component
 */
export const ProductDetails: React.FC<ProductDetailsProps> = React.memo(({ 
  brand,
  name,
  imageProps,
  tabsProps,
  infoProps,
  actionProps,
  theme = 'indigo',
  className = '',
  ...rest
}) => {
  return (
    <section className={`text-gray-600 body-font overflow-hidden dark:text-gray-300 ${className}`} {...rest}>
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest dark:text-gray-400">
              {brand}
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-4 dark:text-white">
              {name}
            </h1>
            <ProductTabs {...tabsProps} theme={theme} />
            <ProductInfo {...infoProps} />
            <ActionButtons {...actionProps} theme={theme} />
          </div>
          <ProductImage {...imageProps} />
        </div>
      </div>
    </section>
  );
});

ProductDetails.displayName = 'ProductDetails';