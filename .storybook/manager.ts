import { addons } from '@storybook/manager-api';
import { aetheriaTheme } from './aetheriaTheme';

addons.setConfig({
  theme: aetheriaTheme,
  sidebar: {
    showRoots: true,
    collapsedRoots: [],
  },
});
