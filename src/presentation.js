// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  Deck,
  Heading,
  Slide,
  Text
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';
import '../node_modules/prismjs/themes/prism-dark.css';

import history from './history';
import react1 from './react1';
import testing from './testing';

import 'normalize.css';
import './style.css';

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quartenary: '#CECECE'
  },
  {
    primary: 'Helvetica',
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
            an introduction to React + front-end testing
          </Text>
        </Slide>
        {history}
        {react1}
        {testing}

        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading margin="30px 0 0" textColor="primary" size={1}>
              if we had more time
          </Heading>
          <Text margin="30px 0 0" textColor="primary" textSize={'1.2em'} italic>
            <a href="https://reactjs.org/docs/typechecking-with-proptypes.html">PropertyTypes</a> - runtime checking of types while in development mode
          </Text>
          <Text margin="30px 0 0" textColor="primary" textSize={'1.2em'} italic>
            <a href="https://reactjs.org/docs/refs-and-the-dom.html">Refs</a> - how to access DOM elements, like the values of text fields
          </Text>
          <Text margin="30px 0 0" textColor="primary" textSize={'1.2em'} italic>
            <a href="https://reactjs.org/blog/2015/09/02/new-react-developer-tools.html#installation">Debugging and introspection</a> - the React extension
          </Text>
        </Slide>
      </Deck>
    );
  }
}
