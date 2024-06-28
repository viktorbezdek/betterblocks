import React from 'react';

/**
 * Props for the ImageBanner component
 * @interface ImageBannerProps
 * @extends React.ImgHTMLAttributes<HTMLImageElement>
 */
export interface ImageBannerProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  /** The alt text for the image */
  alt: string;
  /** The source URL for the image */
  src: string;
}

/**
 * ImageBanner component to display a full-width image
 * @param {ImageBannerProps} props - The props for the component
 */
export const ImageBanner: React.FC<ImageBannerProps> = ({
  alt,
  src,
  className = '',
  ...rest
}) => {
  return (
    <div className="rounded-lg h-64 overflow-hidden">
      <img
        alt={alt}
        src={src}
        className={`object-cover object-center h-full w-full ${className}`}
        {...rest}
      />
    </div>
  );
};