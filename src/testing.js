import React from 'react';

import {
  Appear,
  Heading,
  ListItem,
  List,
  Slide,
  Text,
  Notes,
  Image,
  Link
} from 'spectacle';

export default [
  <Slide transition={['fade']} bgColor="secondary" textColor="primary">
    <Heading margin="30px 0 0" textColor="primary" size={1} italic>
        and now ...
    </Heading>
  </Slide>,
  <Slide transition={['fade']} bgColor="secondary" textColor="primary">
    <Notes>
                testing!
    </Notes>
    <Image src="DumpsterFire2.jpg" />
  </Slide>,
  <Slide transition={['fade']} bgColor="secondary" textColor="primary">
    <Heading margin="30px 0 0" textColor="primary" size={1}>
        testing everything but the ui is fine
    </Heading>
  </Slide>,
  <Slide transition={['fade']} bgColor="secondary" textColor="primary">
    <Image src="pyramid.png" />
  </Slide>,
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
];
