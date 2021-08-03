import { Parameters } from '@storybook/react';
import { EXCLUDED_CONTROLS } from './constants';

export const parameters: Parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    exclude: EXCLUDED_CONTROLS,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: ['Introduction'],
    },
  },
};
