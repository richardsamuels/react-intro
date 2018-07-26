// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  Deck,
  Heading,
  Slide,
  Text,
  Notes,
  Image
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';
import '../node_modules/prismjs/themes/prism.css';

import history from './history';
import react1 from './react1';
import testing from './testing';

// Require CSS
import 'normalize.css';

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quartenary: '#CECECE'
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica'
  }
);

export default class Presentation extends React.PureComponent {
  render() {
    return (
      <Deck
        transition={[]}
        transitionDuration={0}
        theme={theme}
      >
        <Slide transition={['zoom']} bgColor="secondary">
          <Heading size={1} fit lineHeight={1} textColor="primary">
              getting over it
          </Heading>
          <Text margin="10px 0 0" textColor="primary" size={6} italic>
            with Richard Samuels
          </Text>
          <Text margin="50px 0 0" textColor="tertiary" size={1} fit bold>
            an introduction to React
          </Text>
        </Slide>
        {history}

        {/* Actually start talking about React */}
        {react1}
        {testing}
      </Deck>
    );
  }
}
