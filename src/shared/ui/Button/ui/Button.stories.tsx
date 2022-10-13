// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Button } from './Button';

export default {
  title: 'shared/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Text',
};

export const Clear = Template.bind({});
Clear.args = {
  children: 'Text',
  theme: 'clear',
};

export const ClearDisabled = Template.bind({});
ClearDisabled.args = {
  children: 'Text',
  theme: 'clear',
  disabled: true,
};

export const ClearInverted = Template.bind({});
ClearInverted.args = {
  children: 'Text',
  theme: 'clearInverted',
};

export const ClearInvertedDisabled = Template.bind({});
ClearInvertedDisabled.args = {
  children: 'Text',
  theme: 'clearInverted',
  disabled: true,
};

export const Outline = Template.bind({});
Outline.args = {
  children: 'Text',
  theme: 'outline',
};

export const OutlineDisabled = Template.bind({});
OutlineDisabled.args = {
  children: 'Text',
  theme: 'outline',
  disabled: true,
};

export const OutlineSizeL = Template.bind({});
OutlineSizeL.args = {
  children: 'Text',
  theme: 'outline',
  size: 'L',
};

export const OutlineSizeXL = Template.bind({});
OutlineSizeXL.args = {
  children: 'Text',
  theme: 'outline',
  size: 'XL',
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
  children: 'Text',
  theme: 'outline',
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OutlineDarkDisabled = Template.bind({});
OutlineDarkDisabled.args = {
  children: 'Text',
  theme: 'outline',
  disabled: true,
};
OutlineDarkDisabled.decorators = [ThemeDecorator(Theme.DARK)];

export const Background = Template.bind({});
Background.args = {
  children: 'Text',
  theme: 'background',
};

export const BackgroundDisabled = Template.bind({});
BackgroundDisabled.args = {
  children: 'Text',
  theme: 'background',
  disabled: true,
};

export const BackgroundInverted = Template.bind({});
BackgroundInverted.args = {
  children: 'Text',
  theme: 'backgroundInverted',
};

export const SquareSizeM = Template.bind({});
SquareSizeM.args = {
  children: '>',
  theme: 'backgroundInverted',
  square: true,
  size: 'M',
};

export const SquareSizeMDisabled = Template.bind({});
SquareSizeMDisabled.args = {
  children: '>',
  theme: 'backgroundInverted',
  square: true,
  size: 'M',
  disabled: true,
};

export const SquareSizeL = Template.bind({});
SquareSizeL.args = {
  children: '>',
  theme: 'backgroundInverted',
  square: true,
  size: 'L',
};

export const SquareSizeXL = Template.bind({});
SquareSizeXL.args = {
  children: '>',
  theme: 'backgroundInverted',
  square: true,
  size: 'XL',
};
