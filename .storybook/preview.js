// .storybook/preview.js

import { setup } from '@storybook/vue3';
import vuetify from '../src/plugins/vuetify';
import { withVuetifyTheme } from './withVuetifyTheme.decorator';

setup((app) => {
  app.use(vuetify);
});

/* snipped for brevity */

export const decorators = [withVuetifyTheme];

// .storybook/preview.js

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    toolbar: {
      icon: 'paintbrush',
      // Array of plain string values or MenuItem shape
      items: [
        { value: 'light', title: 'Light', left: '🌞' },
        { value: 'dark', title: 'Dark', left: '🌛' },
      ],
      // Change title based on selected value
      dynamicTitle: true,
    },
  },
};
