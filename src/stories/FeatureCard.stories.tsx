import React from 'react';
import { Meta, Story } from '@storybook/react';
import { FeatureCard, FeatureCardProps } from '../components/FeatureCard';

export default {
  title: 'Components/FeatureCard',
  component: FeatureCard,
} as Meta;

const Template: Story<FeatureCardProps> = (args) => <FeatureCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  iconPath: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z',
  title: 'Feature Title',
  description: 'This is a description of the feature.',
};

export const CustomTheme = Template.bind({});
CustomTheme.args = {
  iconPath: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z',
  title: 'Custom Theme Feature',
  description: 'This is a description of the feature with a custom theme.',
  theme: 'red',
};
