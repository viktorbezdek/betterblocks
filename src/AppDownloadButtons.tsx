import React from 'react';
import { AppStoreButton, AppStoreButtonProps } from './AppStoreButton';
import { GooglePlayButton, GooglePlayButtonProps } from './GooglePlayButton';

/**
 * Props for the AppDownloadButtons component
 * @interface AppDownloadButtonsProps
 * @extends React.HTMLAttributes<HTMLDivElement>
 */
export interface AppDownloadButtonsProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Props for the Google Play button */
  googlePlayProps: GooglePlayButtonProps;
  /** Props for the App Store button */
  appStoreProps: AppStoreButtonProps;
}

/**
 * AppDownloadButtons component to display buttons for app downloads
 * @param {AppDownloadButtonsProps} props - The props for the component
 */
export const AppDownloadButtons: React.FC<AppDownloadButtonsProps> = ({
  googlePlayProps,
  appStoreProps,
  className = '',
  ...rest
}) => {
  return (
    <div className={`flex md:ml-auto md:mr-0 mx-auto items-center flex-shrink-0 space-x-4 ${className}`} {...rest}>
      <GooglePlayButton {...googlePlayProps} />
      <AppStoreButton {...appStoreProps} />
    </div>
  );
};