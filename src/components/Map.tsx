import React from 'react';

/**
 * Props for the Map component
 * @interface MapProps
 * @extends React.IframeHTMLAttributes<HTMLIFrameElement>
 */
export interface MapProps extends React.IframeHTMLAttributes<HTMLIFrameElement> {
  /** The URL for the map */
  src: string;
}

/**
 * Map component to display a Google Map
 * @param {MapProps} props - The props for the component
 */
export const Map: React.FC<MapProps> = ({ src, className = '', ...rest }) => {
  return (
    <div className="absolute inset-0 bg-gray-300">
      <iframe
        width="100%"
        height="100%"
        style={{ filter: "grayscale(1) contrast(1.2) opacity(.4)" }}
        title="map"
        src={src}
        className={className}
        {...rest}
      />
    </div>
  );
};