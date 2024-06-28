import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ActionArea, ActionAreaProps } from '../components/ActionArea';

export default {
  title: 'Components/ActionArea',
  component: ActionArea,
} as Meta;

const Template: Story<ActionAreaProps> = (args) => <ActionArea {...args} />;

export const Default = Template.bind({});
Default.args = {
  description: 'This is a description',
  buttonText: 'Click Me',
  learnMoreText: 'Learn More',
  learnMoreUrl: '#',
  theme: 'indigo',
};

export const WithCustomTheme = Template.bind({});
WithCustomTheme.args = {
  description: 'This is a description with a custom theme',
  buttonText: 'Click Me',
  learnMoreText: 'Learn More',
  learnMoreUrl: '#',
  theme: 'red',
};
