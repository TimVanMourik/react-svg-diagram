import {addParameters, configure} from '@storybook/react';
import {create} from '@storybook/theming';

addParameters({
  options: {
    theme: create({
      base: 'light',
      brandTitle: 'React SVG Diagram',
      brandUrl: 'https://github.com/TimVanMourik/react-svg-diagram',
    }),
    panelPosition: 'right',
    isToolshown: false,
  },
});

configure(() => require('./stories'), module);
