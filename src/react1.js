import React from 'react';

import {
  Appear,
  Heading,
  Slide,
  Text,
  Notes,
  Image,
  Link
} from 'spectacle';

import CodeSlide from 'spectacle-code-slide';
import * as sample from './codesamples';

const react = (children) => {
  return (
    <Slide bgColor="secondary">
      <Notes>
        {children}
      </Notes>
      <Heading size={1} textColor="primary">
        react
      </Heading>
    </Slide>
  );
}

export default [
  react(),
  <Slide bgColor="secondary">
    <Notes>
      <ol>
        <li>React features non-standard, but FOSS syntactic sugar.</li>
        <li>JS builds transform this into standards-compliant JS</li>
        <li>Just use Facebook{"'"}s <Link href="https://github.com/facebook/create-react-app">create-react-app</Link></li>
      </ol>
    </Notes>
    <Heading size={1} textColor="primary">
      <Text italic textColor="primary">side-note</Text> build systems
    </Heading>
    <Appear>
      <Text margin="30px 0 0" textColor="primary" textSize={'1.2em'}>
         All build systems suck. Java builds {'<'} Javascript builds {'<<<<<<'} c/c++ builds
      </Text>
    </Appear>
    <Appear>
      <Text margin="30px 0 0" textColor="primary" textSize={'1.2em'}>
         I recommend <a href="https://github.com/facebook/create-react-app">create-react-app</a>
      </Text>
    </Appear>
  </Slide>,
  react([]),

  <Slide bgColor="secondary">
    <Notes>
      <ol>
        <li>The core of React is the component</li>
        <li>components are objects</li>
      </ol>
    </Notes>
    <Heading size={1} textColor="primary">
        components
    </Heading>
  </Slide>,

  <CodeSlide
    bgColor="secondary"
    transition={[]}
    lang="html"
    code={sample.reactSlide}
    ranges={[
      { loc: [0, 1], title: 'almost a component' }
      // ...
    ]}
  />,
  //<CodeSlide
  //  bgColor="secondary"
  //  transition={[]}
  //  lang="jsx"
  //  code={sample.reactSlideSFC}
  //  ranges={[
  //    { loc: [0, 3], title: 'actually a component', notes: 'These are called Stateless-functional-components' }
  //    // ...
  //  ]}
  ///>,
  <CodeSlide
    bgColor="secondary"
    transition={[]}
    lang="jsx"
    code={sample.reactSlideBigComponent}
    ranges={[
      { loc: [0, 5], title: 'a component' },
      { loc: [2, 3], title: 'wat?' }
      // ...
    ]}
  />,
  <CodeSlide
    bgColor="secondary"
    transition={[]}
    lang="jsx"
    code={sample.reactSlideBigComponentBabel}
    ranges={[
      { loc: [0, 6], title: 'even more explicit' },
      { loc: [2, 3], title: 'magic', note: 'this magic is also lintable to ensure validity' },
      { loc: [3, 4], title: 'function calls' },
      { loc: [1, 5], title: 'what you see' },
      { loc: [0, 6], title: 'who cares?' }
      // ...
    ]}
  />,
  <CodeSlide
    bgColor="secondary"
    transition={[]}
    lang="jsx"
    code={sample.whocares}
    ranges={[
      { loc: [0, 5], title: 'who cares?' },
      { loc: [6, 7], title: 'root', note: 'App is often the name of the root component' },
      { loc: [7, 8], title: 'render' },
      { loc: [8, 9], title: "that's not html" },
      { loc: [0, 1], title: "that's our component!" },
      { loc: [8, 9], title: "but we're using it like html" }
      // ...
    ]}
  />,
  <CodeSlide
    bgColor="secondary"
    transition={[]}
    lang="jsx"
    code={sample.whocares2}
    ranges={[
      { loc: [8, 12], title: 'demagicified' }
      // ...
    ]}
  />,
  <CodeSlide
    bgColor="secondary"
    transition={[]}
    lang="jsx"
    code={sample.whocares}
    ranges={[
      { loc: [6, 11], title: 'composability' }
      // ...
    ]}
  />,
  <Slide bgColor="secondary">
    <Notes>
      <ol>
        <li>This is what{"'"}s so awesome about React!</li>
        <li>jQuery requires annoying things like classes, ids, names, and XPath</li>
      </ol>
    </Notes>
    <Heading size={1} textColor="primary">
        components
    </Heading>
    <Text margin="30px 0 0" textColor="primary" textSize={'1.2em'} italic>
              are composable objects that resolve to html
    </Text>
  </Slide>,
  <Slide bgColor="secondary">
    <Heading size={1} textColor="primary">
            interactivity
    </Heading>
    <Appear>
      <Text margin="30px 0 0" textColor="primary" textSize={'1.2em'} italic>
              any questions before we move foward?
      </Text>
    </Appear>
  </Slide>,
  <CodeSlide
    bgColor="secondary"
    transition={[]}
    lang="js"
    code={sample.yeoldejs}
    ranges={[
      { loc: [0, 9], title: ':(' },
      { loc: [4, 5], title: 'list item' },
      { loc: [3, 4], title: 'the list' },
      { loc: [6, 7], title: 'next page button' },
      { loc: [1, 2], title: 'rest request' }
    ]}
  />,
  <CodeSlide
    bgColor="secondary"
    transition={[]}
    lang="js"
    code={sample.reactedJS}
    ranges={[
      { loc: [0, 30], title: 'reactified' },
      { loc: [0, 5], title: 'list item' },
      { loc: [27, 39], title: 'the list' },
      { loc: [6, 12], title: 'next page button' },
      { loc: [21, 27], title: 'rest request' },
      { loc: [2, 3], title: 'props' },
      { loc: [8, 9], title: 'props' },
      { loc: [37, 38], title: 'props defined' },
      { loc: [14, 15], title: 'props defined', note: "this call defines 'this.props'" },
      { loc: [15, 19], title: 'eww state' },
      { loc: [8, 9], title: 'interpolation', note: "you can put arbitrary js here, but probably shouldn't" },
      { loc: [31, 36], title: 'interpolation' },
      { loc: [23, 24], title: 'updates?', note: 'you can update this.state directly as well, but this is the preferred syntax' }
    ]}
  />,

  <Slide transition={['fade']} bgColor="secondary" textColor="primary">
    <Notes>
      <ol>
        <li>You don{"'"}t tell it to update, it teach it how it how to tell if it should update</li>
      </ol>
    </Notes>
    <Heading textColor="primary" size={1}>
        react is declarative
    </Heading>
  </Slide>,
  <Slide transition={['fade']} bgColor="secondary" textColor="primary">
    <Notes>
      <ol>
        <li>A full reference to the react lifecycle can be found <a href="https://reactjs.org/docs/react-component.html#reference">here</a></li>
        <li>Image <a href="https://hackernoon.com/reactjs-component-lifecycle-methods-a-deep-dive-38275d9d13c0">Attribution</a></li>
      </ol>
    </Notes>
    <Image src="lifecycle.png" />
  </Slide>,
  <Slide transition={['fade']} bgColor="secondary" textColor="primary">
    <Heading textColor="primary" size={2}>shouldComponentUpdate</Heading>
    <Appear>
      <Text margin="30px 0 0" textColor="primary" size={'1.2em'}>
        if true, update. If false, don{"'"}t
      </Text>
    </Appear>
    <Appear>
      <Text margin="30px 0 0" textColor="primary" size={'1.2em'}>
        React.Component -> React.PureComponent
      </Text>
    </Appear>
  </Slide>,
  <Slide transition={['fade']} bgColor="secondary" textColor="primary">
    <Heading textColor="primary" size={2}>performance</Heading>
    <Text margin="30px 0 0" textColor="primary" size={'1.2em'}>
      please try to care
    </Text>
    <Appear>
      <Text margin="50px 0 0" textColor="primary" size={'5em'} bold>
        reflow
      </Text>
    </Appear>
  </Slide>,
  react((
    <ol>
      <li>So much more to the component lifecycle than this</li>
      <li>Find out more <a href="https://reactjs.org/docs/react-component.html">here</a></li>
    </ol>
  ))
];
