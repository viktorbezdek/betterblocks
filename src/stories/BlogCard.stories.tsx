import React from 'react';
import { Meta, Story } from '@storybook/react';
import { BlogCard, BlogCardProps } from '../components/BlogCard';

export default {
  title: 'Components/BlogCard',
  component: BlogCard,
} as Meta;

const Template: Story<BlogCardProps> = (args) => <BlogCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  imageUrl: 'https://via.placeholder.com/300',
  category: 'Technology',
  title: 'Understanding React Hooks',
  content: 'React hooks are functions that let you use state and other React features in functional components...',
  learnMoreLink: '#',
  views: 1.2,
  comments: 34,
  theme: 'indigo',
};
