import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import avatar from 'shared/assets/tests/avatar.png';
import ProfilePage from './ProfilePage';

export default {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({
  profile: {
    data: {
      first: 'Денис',
      lastname: 'Денис',
      username: 'test',
      country: Country.Armenia,
      currency: Currency.EUR,
      city: 'Phuket',
      avatar,
    },
  },
})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
  profile: {
    data: {
      first: 'Денис',
      lastname: 'Денис',
      username: 'test',
      country: Country.Armenia,
      currency: Currency.EUR,
      city: 'Phuket',
      avatar,
    },
  },
})];
