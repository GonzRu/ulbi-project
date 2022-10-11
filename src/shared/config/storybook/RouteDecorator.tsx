// eslint-disable-next-line import/no-extraneous-dependencies
import { Story } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

export const RouteDecorator = (StoryComponent: Story) => (
  <BrowserRouter>
    <StoryComponent />
  </BrowserRouter>
);
