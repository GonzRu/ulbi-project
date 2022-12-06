// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import avatar from 'shared/assets/tests/avatar.png';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { ProfileCard } from './ProfileCard';

export default {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  data: {
    first: 'Денис',
    lastname: 'Денис',
    username: 'test',
    country: Country.Armenia,
    currency: Currency.EUR,
    city: 'Phuket',
    avatar,
  },
};

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
};

export const Error = Template.bind({});
Error.args = {
  error: 'error',
};
