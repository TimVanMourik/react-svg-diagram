import React from 'react';

import {storiesOf} from '@storybook/react';
import {withKnobs} from '@storybook/addon-knobs';

import Welcome from './Welcome';

storiesOf('React SVG Pipeline', module)
  .addDecorator(withKnobs)
  .add('README', () => <Welcome/>)


