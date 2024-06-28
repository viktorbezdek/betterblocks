import React from 'react';
import { Meta, Story } from '@storybook/react';
import { BlogSection, BlogSectionProps } from '../components/BlogSection';

export default {
  title: 'Components/BlogSection',
  component: BlogSection,
} as Meta;

const Template: Story<BlogSectionProps> = (args) => <BlogSection {...args} />;

export const Default = Template.bind({});
Default.args = {
  posts: [
    {
      imageUrl: 'https://via.placeholder.com/300',
      category: 'Technology',
      title: 'Understanding React Hooks',
      content: 'React hooks are functions that let you use state and other React features in functional components...',
      learnMoreLink: '#',
      views: 1.2,
      comments: 34,
      theme: 'indigo',
    },
    {
      imageUrl: 'https://via.placeholder.com/300',
      category: 'Health',
      title: 'The Benefits of a Balanced Diet',
      content: 'A balanced diet is crucial for maintaining good health and well-being...',
      learnMoreLink: '#',
      views: 2.3,
      comments: 12,
      theme: 'green',
    },
  ],
  theme: 'indigo',
};
