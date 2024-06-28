import React from 'react';
import { Meta, Story } from '@storybook/react';
import { BlogPost, BlogPostProps } from '../components/BlogPost';

export default {
  title: 'Components/BlogPost',
  component: BlogPost,
} as Meta;

const Template: Story<BlogPostProps> = (args) => <BlogPost {...args} />;

export const Default = Template.bind({});
Default.args = {
  category: 'Technology',
  title: 'Understanding React Hooks',
  content: 'React hooks are functions that let you use state and other React features in functional components...',
  learnMoreLink: '#',
  views: 1.2,
  comments: 34,
  author: {
    name: 'John Doe',
    role: 'Author',
    avatarUrl: 'https://via.placeholder.com/150',
  },
  theme: 'indigo',
};
