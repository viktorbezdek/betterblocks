import React from 'react';
import { Meta, Story } from '@storybook/react';
import { AuthorInfo, AuthorInfoProps } from '../components/AuthorInfo';

export default {
  title: 'Components/AuthorInfo',
  component: AuthorInfo,
} as Meta;

const Template: Story<AuthorInfoProps> = (args) => <AuthorInfo {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'John Doe',
  role: 'Author',
  avatarUrl: 'https://via.placeholder.com/150',
};

export const WithCustomAvatar = Template.bind({});
WithCustomAvatar.args = {
  name: 'Jane Smith',
  role: 'Editor',
  avatarUrl: 'https://via.placeholder.com/150/0000FF/808080',
};
