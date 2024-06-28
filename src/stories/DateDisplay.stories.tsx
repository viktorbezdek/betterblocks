import React from 'react';
import { Meta, Story } from '@storybook/react';
import { DateDisplay, DateDisplayProps } from '../components/DateDisplay';

export default {
  title: 'Components/DateDisplay',
  component: DateDisplay,
} as Meta;

const Template: Story<DateDisplayProps> = (args) => <DateDisplay {...args} />;

export const Default = Template.bind({});
Default.args = {
  month: 'Jan',
  day: 1,
};

export const CustomClass = Template.bind({});
CustomClass.args = {
  month: 'Feb',
  day: 14,
  className: 'bg-blue-100',
};
