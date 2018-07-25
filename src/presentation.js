// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Notes,
  Image
} from 'spectacle';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/styles/hljs';
import CodeSlide from 'spectacle-code-slide';

// Import theme
import createTheme from 'spectacle/lib/themes/default';
import '../node_modules/prismjs/themes/prism.css';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quartenary: '#CECECE',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

const yeoldejs = `function fetchData(page) {
  $.get('http://my.domain/api/data', {page: page}, function(resp) {
      $("#fetch_button").remove();
      for (var i = 0; i < resp.length; ++i) {
          $("#id").append("<div>" + resp[i] + "</div");
      }
      $("#id").append('<input id="fetch_button" type="button" onClick="fetchData(' + (page + 1) + ')">Next</input>');
  });
}`

export default class Presentation extends React.Component {
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
        <Slide transition={['fade']} bgColor="tertiary">
          <Notes>
            <h4>Slide notes</h4>
            <ol>
              <li>I started ~12</li>
              <li>I was really obsessed with how login forms worked</li>
              <li>I wrote atrotious code, even by PHP 4 standards</li>
              <li>era of the LAMP stack</li>
            </ol>
          </Notes>
          <Heading size={1} textColor="secondary">
            about me + history
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Notes>
            <h4>Slide notes</h4>
            <ol>
              <li>Javascript was once a bad word</li>
              <li>Mozilla hadn't been updated in 2 years by 2008; Mozilla Foundation had committed to Firebird/Firefox</li>
            </ol>
          </Notes>
          <Heading size={1} textColor="secondary">
            web dev circa 2008
          </Heading>
          <Appear>
            <Text margin="30px 0 0" textColor="primary" textSize={'1.2em'}>
              IE, Firefox 3.x, Mozilla, Chrome's first public release
            </Text>
          </Appear>
          <Appear>
            <Text margin="30px 0 0" textColor="primary" textSize={'1.2em'}>
              People cared about Opera
            </Text>
          </Appear>
          <Appear>
            <Text margin="10px 0 0" textColor="primary" textSize={'0.8em'} italic>
              People were starting to care about Safari (iPhone released in 2007)
            </Text>
          </Appear>
          <Appear>
            <Text margin="30px 0 0" textColor="primary" textSize={'1.2em'}>
              Node.js literally didn't exist yet (May 2009)
            </Text>
          </Appear>
          <Appear>
            <Text margin="10px 0 0" textColor="primary" textSize={'0.8em'} italic>
              (psst: V8 was released in September 2008)
            </Text>
          </Appear>
          <Appear>
            <Text margin="30px 0 0" textColor="primary" textSize={'1.2em'}>
              You could turn Javascript off and use the web
            </Text>
          </Appear>
          <Appear>
            <Text margin="30px 0 0" textColor="primary" textSize={'1.2em'}>
              Internet Explorer 6 received its last update
            </Text>
          </Appear>
          {/*
            <Heading size={6} textColor="primary" caps>
                Typography
          </Heading>
          <Heading size={2} textColor="secondary">
            Heading 2
          </Heading>
          <Heading size={3} textColor="secondary">
            Heading 3
          </Heading>
          <Heading size={4} textColor="secondary">
            Heading 4
          </Heading>
          <Heading size={5} textColor="secondary">
            Heading 5
          </Heading>
          <Text size={6} textColor="secondary">
            Standard text
          </Text>
          */}
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Notes>
            <h4>Slide notes</h4>
            <ol>
              <li>Microsoft proprietary stuff</li>
              <li>ActiveX loaded + executed arbitrary code from websites</li>
              <li>Conditional HTML execution</li>
              <li>Microsoft didn't care about the security of your system</li>
              <li>Microsoft didn't care about the HTML standard</li>
              <li>Microsoft didn't care about the CSS standard</li>
              <li>Microsoft didn't care about the Javascript standard</li>
            </ol>
          </Notes>
          <Heading size={1} textColor="secondary">
            internet explorer 6 + micros*ft
          </Heading>
          <Appear>
            <Text margin="30px 0 0" textColor="primary" textSize={'1.2em'}>
              Microsoft didn't care about the security of your system
            </Text>
          </Appear>
          <Appear>
            <Text margin="30px 0 0" textColor="primary" textSize={'1.2em'}>
              Microsoft didn't care about the HTML standard
            </Text>
          </Appear>
          <Appear>
            <Text margin="30px 0 0" textColor="primary" textSize={'1.2em'}>
              Microsoft didn't care about the CSS standard
            </Text>
          </Appear>
          <Appear>
            <Text margin="30px 0 0" textColor="primary" textSize={'1.2em'}>
              Microsoft didn't care about the Javascript standard
            </Text>
          </Appear>
          <Appear>
            <Text margin="30px 0 0" textColor="primary" textSize={'1.2em'}>
              Microsoft didn't care about compatibility
            </Text>
          </Appear>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Notes>
            <h4>Slide notes</h4>
            <ol>
              <li>Macromedia was originally indepedent and later acquired by Adobe</li>
              <li>Proprietary (hundreds a developer seat) and big files (megabytes)</li>
              <li>Windows + Mac OS X</li>
            </ol>
          </Notes>
          <Heading size={1} textColor="secondary">
            <Image src="macromedia-shockwave-enabled-1.svg" width={'31%'} />
            <Image src="macromedia-flash-enabled-1.svg" width={'31%'} />
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Notes>
            <h4>Slide notes</h4>
            <ol>
              <li>Release of jQuery</li>
            </ol>
          </Notes>
          <Heading size={1} textColor="secondary">
        2006
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Notes>
            <h4>Slide notes</h4>
            <ol>
              <li>The role jQuery played in changing front-end dev cannot be understated.</li>
              <li>jQuery was one of the first polyfills/modernizers/sane-ifiers</li>
              <li>jQuery made it possible to have confidence that the code you wrote would work in Internet Explorer, Mozilla Internet Suite, Netscape</li>
              <li>jQuery was free. Macromedia (now Adobe) Flash</li>
            </ol>
          </Notes>
          <Heading size={1} textColor="secondary">
            <Image src="jQuery-Logo_On_Dark.png"></Image>
          </Heading>
        </Slide>
        <CodeSlide
          bgColor="secondary"
          transition={[]}
          lang="js"
          code={yeoldejs}
          ranges={[
            { loc: [0, 9], title: "ye olde days" },
            { loc: [1, 2], title: "fetching data" },
            { loc: [3, 4], title: "iterate" },
            { loc: [3, 6], title: "insert" },
            { loc: [0, 9], title: "it works" },
            { loc: [4, 5], title: "haha no", note: "unclosed div. good luck" },
            // ...
          ]} />
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Some Pretentious Bullshit</Quote>
            <Cite>Stupid McFuckerton</Cite>
          </BlockQuote>
        </Slide>
        <Slide bgColor="secondary">
          <Heading size={1} textColor="primary">
            it works!
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="#8c8b8a" textColor="primary">
            <Notes>
                <ol>
                    <li>SLIDE IS DELIBERATELY BLANK</li>
                    <li>And now...</li>
                </ol>
            </Notes>
        </Slide>
        <Slide transition={['fade']} bgColor="#8c8b8a" textColor="primary">
            <Notes>
                testing!
            </Notes>
            <Image src="DumpsterFire2.jpg" />
        </Slide>
        <Slide transition={['fade']} bgColor="#8c8b8a" textColor="primary">
            <Notes>
                testing!
            </Notes>
        </Slide>
        <Slide transition={['fade']} bgColor="#8c8b8a" textColor="primary">
            <Notes>
                testing!
            </Notes>
        </Slide>
      </Deck>
    );
  }
}
