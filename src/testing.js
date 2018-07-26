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

export default [
  <Slide transition={['fade']} bgColor="secondary" textColor="primary">
    <Heading margin="30px 0 0" textColor="primary" size={1} italic>
        and now ...
    </Heading>
  </Slide>,
  <Slide transition={['fade']} bgColor="secondary" textColor="primary">
    <Image src="DumpsterFire2.jpg" />
  </Slide>,
  <Slide transition={['fade']} bgColor="secondary" textColor="primary">
    <Notes>
      <ol>
        <li>Testing UI-less javascript is a joy!</li>
        <li>Who needs dependency injection when you can literally overwrite any part of the language</li>
      </ol>
    </Notes>
    <Heading margin="30px 0 0" textColor="primary" size={1}>
        testing everything but the ui is fine
    </Heading>
  </Slide>,
  <Slide transition={['fade']} bgColor="secondary" textColor="primary">
    <Image src="pyramid.png" width="150%" />
  </Slide>,
  <Slide transition={['fade']} bgColor="secondary" textColor="primary">
    <Heading margin="30px 0 0" textColor="primary" size={1}>
      unit testing
    </Heading>
    <Appear>
      <Text margin="30px 0 0" textColor="primary">Airbnb{"'"}s Enzyme</Text>
    </Appear>
  </Slide>,
  <CodeSlide
    bgColor="secondary"
    transition={[]}
    lang="jsx"
    code={sample.enzyme1}
    ranges={[
      { loc: [2, 16] },
      { loc: [18, 20], note: 'Enzyme.shallow can be used to skip rendering children' },
      { loc: [21, 22], title: '', note: 'You can also use .find(<ListFetchButton />)'},
      { loc: [22, 23] },
      { loc: [26, 28] },
      { loc: [29, 30] },
      { loc: [31, 33] },
      { loc: [34, 36] }
      // ...
    ]}
  />,
  <Slide transition={['fade']} bgColor="secondary" textColor="primary">
    <Notes>
      <ol>
        <li>The title of this talk is 'getting over it' for a reason</li>
      </ol>
    </Notes>
    <Heading margin="30px 0 0" textColor="primary" size={1}>
      this looks awesome{'*'}
    </Heading>
    <Appear>
      <Text italic margin="30px 0 0" textColor="primary">{'*'} except for the leak of internal components</Text>
    </Appear>
  </Slide>,

  // pain begins
  <Slide transition={['fade']} bgColor="secondary" textColor="primary">
    <Image src="second-day.jpeg" width="200%" />
  </Slide>,
  <CodeSlide
    bgColor="secondary"
    transition={[]}
    lang="jsx"
    code={sample.enzyme2}
    ranges={[
      { loc: [2, 16] },
      { loc: [19, 20], note: 'onclic should be onClick (note case)' },
      { loc: [23, 24] },
      { loc: [31, 32] }
      // ...
    ]}
  />,

  <Slide transition={['fade']} bgColor="secondary" textColor="primary">
    <Heading margin="30px 0 0" textColor="primary" size={1} italic>
      maybe i should test button clicks?
    </Heading>
  </Slide>,
  <Slide transition={['fade']} bgColor="secondary" textColor="primary">
    <Image src="DumpsterFire2.jpg" />
  </Slide>,
  <CodeSlide
    bgColor="secondary"
    transition={[]}
    lang="html"
    code={sample.enzyme3}
    ranges={[
      { loc: [2, 3] },
      { loc: [3, 5] },
      { loc: [6, 9] },
      { loc: [10, 12] },
      { loc: [13, 14] },
    ]}
  />,
  <Slide transition={['fade']} bgColor="secondary" textColor="primary">
    <Heading margin="30px 0 0" textColor="primary" size={1}>
      :(
    </Heading>
  </Slide>,
  <Slide transition={['fade']} bgColor="secondary" textColor="primary">
    <Notes>
      <ol>
        <li>Testing is still very immature</li>
        <li>jsdom is a simulated browser that works most of the time</li>
        <li>jsdom is super fast, but doesn't support everything a real browser supports</li>
      </ol>
    </Notes>
    <Heading margin="30px 0 0" textColor="primary" size={1}>
      ui testing is kinda new
    </Heading>
    <Appear>
      <Text margin="30px 0 0" textColor="primary" textSize={'1.2em'}>
         Most unit tests are run in 'jsdom'
      </Text>
    </Appear>
    <Appear>
      <Text margin="30px 0 0" textColor="primary" textSize={'1.2em'}>
        ...but it doesn{"'"}t support everything
      </Text>
    </Appear>
  </Slide>,
  <Slide transition={['fade']} bgColor="secondary" textColor="primary">
    <Notes>
      <ol>
        <li>how to avoid this?</li>
        <li>e2e kinda required</li>
      </ol>
    </Notes>
    <Image src="unit-testing.gif" width="100%" />
  </Slide>,
  <Slide transition={['fade']} bgColor="secondary" textColor="primary">
    <Notes>
      <ol>
        <li>e2e tests take an order of magnitude more to run</li>
        <li>writing them cleanly and in a maintable way is a wee bit a tricky</li>
        <li>they break very easily</li>
        <li>5x-10x more time to write</li>
        <li>e2e testing is about the complex stuff that can't be unit tested
          <ul>
            <li>Test browser events like clicks, drag and drop operations</li>
            <li>Performance</li>
            <li>Cross-browser and cross-operating system differences</li>
            <li>Unit tests should far out-number e2e; lobster sits at a 1:10 ratio right now</li>
          </ul>
        </li>
      </ol>
    </Notes>
    <Heading margin="30px 0 0" textColor="primary" size={1}>
      how to e2e test?
    </Heading>
    <Appear>
      <Text margin="30px 0 0" textColor="primary" textSize={'1.2em'}>
        try not to
      </Text>
    </Appear>
    <Appear>
      <Text margin="30px 0 0" textColor="primary" textSize={'1.2em'}>
        if you must, Selenium is King
      </Text>
    </Appear>
    <Appear>
      <Text margin="10px 0 0" textColor="primary" textSize={'0.8em'} italic>
        (in Evergreen, Chrome is on rhel70; Firefox {'&'} Chrome soon to be on ubuntu1804-test)
      </Text>
    </Appear>
    <Appear>
      <Text margin="30px 0 0" textColor="primary" textSize={'1.2em'} italic>
        See <Link href="https://github.com/evergreen-ci/lobster/blob/faf4a03d4ea8b708c8999f97a37d7137f4240610/src/index.spec.js">Lobster's</Link> e2e tests, they{"'"}re okay
      </Text>
    </Appear>
  </Slide>,
  <Slide transition={['fade']} bgColor="secondary" textColor="primary">
    <Notes>
      <ol>
        <li>lobster has none</li>
        <li>I don't feel qualified to talk about them</li>
        <li>A somewhat derisive, reductive explanation is that you render your components as
        strings, and compare strings</li>
      </ol>
    </Notes>
    <Heading margin="30px 0 0" textColor="primary" size={1}>
      snapshot testing
    </Heading>
  </Slide>,
];
