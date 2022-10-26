// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import LoginForm from './LoginForm';

export default {
  title: 'features/LoginForm',
  component: LoginForm,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof LoginForm>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator({
  login: { username: '123', password: 'abc', isLoading: false },
})];

export const Error = Template.bind({});
Error.args = {};
Error.decorators = [StoreDecorator({
  login: {
    username: '123', password: 'abc', error: 'some error', isLoading: false,
  },
})];

export const Loading = Template.bind({});
Loading.args = {};
Loading.decorators = [StoreDecorator({
  login: { username: '123', password: 'abc', isLoading: true },
})];
