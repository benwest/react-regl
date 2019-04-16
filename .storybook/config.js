import { addParameters, configure } from '@storybook/react';

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addParameters({
  options: {
    name: "react-regl",
    showSearchBox: false,
    addonPanelInRight: true,
  }
});

configure(loadStories, module);
