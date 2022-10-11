// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from 'widgets/Modal/ui/Modal';

export default {
  title: 'widget/Modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Light = Template.bind({});
Light.args = {
  isOpen: true,
  children: 'kljdfksld sdf ksdjfskldfj dskfjlkdjfskld fsdjflskdjf lsdflksdj fklsjdf lskjdf lsk dfjs dlfjldjlfskj dfjs dkfljs ',
};

export const Dark = Template.bind({});
Dark.args = {
  isOpen: true,
  children: 'kljdfksld sdf ksdjfskldfj dskfjlkdjfskld fsdjflskdjf lsdflksdj fklsjdf lskjdf lsk dfjs dlfjldjlfskj dfjs dkfljs ',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
