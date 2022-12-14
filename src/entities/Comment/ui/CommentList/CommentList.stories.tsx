// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CommenList } from './CommenList';

export default {
  title: 'shared/CommentList',
  component: CommenList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof CommenList>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof CommenList> = (args) => <CommenList {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
