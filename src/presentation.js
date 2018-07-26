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
  Image,
  Link
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

const reactSlide = `<div>o hai</div>`
const reactSlideSFC = `function ohai() {
    return (<div>o hai</div>);
}`
const reactSlideBigComponent = `class ohai extends React.Component {
  render() {
    return (<div>o hai</div>);
  }
}`
const reactSlideBigComponentBabel= `class ohai extends React.Component {
  render() {
    // return (<div>o hai</div>);
    return React.createElement('div', 'o hai');
  }
}`

const whocares = `class ohai extends React.Component {
  render() {
    return (<div>o hai</div>);
  }
}

class App extends React.Component {
  render() {
    return (<ohai></ohai>);
  }
}`

const whocares2 = `class ohai extends React.Component {
  render() {
    return (<div>o hai</div>);
  }
}

class App extends React.Component {
  render() {
    // return (<ohai></ohai>);
    return React.createElement(
      React.createElement(ohai)
      // ^ expands to return (<div>o hai</div>)
    ));
  }
}`

const reactedJS= `class ListItem extends React.Component {
  render() {
    return (<div>{this.props.data}</div>);
  }
}

class ListFetchButton extends React.Component {
  render() {
    return (<input id="fetch_button" type="button" onClick={this.props.onClick}>Next</input>);
  }
}

class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      data: []
    }
  }

  onClick = () => {
    $.get('http://my.domain/api/data', {page: this.state.page}, function(resp) {
      this.setState({ data: resp });
    });
  }

  render() {
    return (
      <div>
        {
          this.state.data.map(function(item, index) {
            return (<ListItem key={index} data={item} />);
          });
        }
        <ListFetchButton onClick={this.onClick} />
      </div>
    );
  }
}`

const react = () => (
        <Slide bgColor="secondary">
          <Notes>
            <h4>Slide notes</h4>
            <ol>
              <li>It works, but enjoy your spaghetti</li>
              <li>unmaintainble, unscalable, untestable</li>
            </ol>
          </Notes>
          <Heading size={1} textColor="primary">
            react
          </Heading>
        </Slide>
);

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
              <li>I think jquery is the single most important library in front-end development history</li>
              <li>jQuery was a precursor to polyfills/modernizers/sane-ifiers</li>
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
            { loc: [3, 6], title: "insert", note: "lots of complicated formatting logic omitted" },
            { loc: [0, 9], title: "it works", note: "suddenly designers were coding more" },
            { loc: [4, 5], title: "haha no", note: "unclosed div. good luck" },
            // ...
          ]} />
        <Slide bgColor="secondary">
          <Notes>
            <h4>Slide notes</h4>
            <ol>
              <li>But it's unmaintainble, unscalable, untestable</li>
              <li>The tools required to test this code only became mature in the 2010s</li>
            </ol>
          </Notes>
          <Heading size={1} textColor="primary">
            it works!
          </Heading>
        </Slide>

        {/* Actually start talking about React */}

        {react()}
        <Slide bgColor="secondary">
          <Notes>
            <h4>Slide notes</h4>
            <ol>
              <li>React features non-standard, but FOSS syntactic sugar. Optional today, but required in the future</li>
              <li>JS builds transform this into standards-compliant JS</li>
              <li>Just use Facebook's <Link href="https://github.com/facebook/create-react-app">create-react-app</Link></li>
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
        </Slide>
        {react()}

        <Slide bgColor="secondary">
          <Notes>
            <h4>Slide notes</h4>
            <ol>
              <li>The core of React is the component</li>
              <li>components are objects</li>
            </ol>
          </Notes>
          <Heading size={1} textColor="primary">
        components
          </Heading>
        </Slide>

        {/* components */}
        <CodeSlide
          bgColor="secondary"
          transition={[]}
          lang="html"
          code={reactSlide}
          ranges={[
            { loc: [0, 1], title: "almost a component" },
            // ...
          ]} />
        <CodeSlide
          bgColor="secondary"
          transition={[]}
          lang="jsx"
          code={reactSlideSFC}
          ranges={[
            { loc: [0, 3], title: "actually a component" },
            // ...
          ]} />
        <CodeSlide
          bgColor="secondary"
          transition={[]}
          lang="jsx"
          code={reactSlideBigComponent}
          ranges={[
            { loc: [0, 5], title: "a little more explicit" },
            // ...
          ]} />
        <CodeSlide
          bgColor="secondary"
          transition={[]}
          lang="jsx"
          code={reactSlideBigComponentBabel}
          ranges={[
            { loc: [0, 6], title: "even more explicit" },
            { loc: [2, 3], title: "magic", note: 'this magic is also lintable to ensure validity' },
            { loc: [3, 4], title: "function calls" },
            { loc: [1, 5], title: "what you see" },
            { loc: [0, 6], title: "who cares?" },
            // ...
          ]} />
        <CodeSlide
          bgColor="secondary"
          transition={[]}
          lang="jsx"
          code={whocares}
          ranges={[
            { loc: [0, 5], title: "who cares?" },
            { loc: [6, 7], title: "root", note: 'App is often the name of the root component' },
            { loc: [7, 8], title: "render" },
            { loc: [8, 9], title: "that's not html" },
            { loc: [0, 1], title: "that's our component!" },
            { loc: [8, 9], title: "but we're using it like html" },
            // ...
          ]} />
        <CodeSlide
          bgColor="secondary"
          transition={[]}
          lang="jsx"
          code={whocares2}
          ranges={[
            { loc: [8, 12], title: "demagicified" },
            // ...
          ]} />
        <CodeSlide
          bgColor="secondary"
          transition={[]}
          lang="jsx"
          code={whocares}
          ranges={[
            { loc: [6, 11], title: "composability" },
            // ...
          ]} />
        <Slide bgColor="secondary">
          <Notes>
            <h4>Slide notes</h4>
            <ol>
              <li>This is what's so awesome abour React!</li>
              <li>jQuery requires annoying things like classes, ids, names, and XPath</li>
            </ol>
          </Notes>
          <Heading size={1} textColor="primary">
        components
          </Heading>
          <Text margin="30px 0 0" textColor="primary" textSize={'1.2em'} italic>
              are composable objects that resolve to html
          </Text>
        </Slide>
        <Slide bgColor="secondary">
          <Heading size={1} textColor="primary">
            interactivity
          </Heading>
          <Appear>
            <Text margin="30px 0 0" textColor="primary" textSize={'1.2em'} italic>
              any questions before we move foward?
            </Text>
          </Appear>
        </Slide>
        <CodeSlide
          bgColor="secondary"
          transition={[]}
          lang="js"
          code={yeoldejs}
          ranges={[
            { loc: [0, 9], title: ":(" },
            { loc: [4, 5], title: "list item" },
            { loc: [3, 4], title: "the list" },
            { loc: [6, 7], title: "next page button" },
            { loc: [1, 2], title: "rest request" },
          ]} />
        <CodeSlide
          bgColor="secondary"
          transition={[]}
          lang="js"
          code={reactedJS}
          ranges={[
            { loc: [0, 30], title: "reactified" },
            { loc: [0, 5], title: "list item" },
            { loc: [27, 39], title: "the list" },
            { loc: [6, 12], title: "next page button" },
            { loc: [21, 27], title: "rest request" },
            { loc: [2, 3], title: "props" },
            { loc: [8, 9], title: "props" },
            { loc: [35, 36], title: "props defined" },
            { loc: [14, 15], title: "props defined", note: "this call defines 'this.props'" },
            { loc: [15, 19], title: "eww state" },
            { loc: [8, 9], title: "interpolation", note:"you can put arbitrary js here, but probably shouldn't" },
            { loc: [30, 35], title: "interpolation" },
            { loc: [23, 24], title: "updates?", note: "you can update this.state directly as well, but this is the preferred syntax" },
          ]} />

        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
            <Notes>
                <ol>
                    <li>You don't tell it to update, it teach it how it how to tell if it should update</li>
                </ol>
            </Notes>
            <Heading margin="30px 0 0" textColor="primary" size={1}>
        react is declarative
            </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
            <Notes>
                <ol>
                    <li>A full reference to the react lifecycle can be found <a href="https://reactjs.org/docs/react-component.html#reference">here</a></li>
                    <li>Image <a href="https://hackernoon.com/reactjs-component-lifecycle-methods-a-deep-dive-38275d9d13c0">Attribution</a></li>
                </ol>
            </Notes>
            <Image src="lifecycle.png" />
        </Slide>

        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
            <Heading margin="30px 0 0" textColor="primary" size={1} italic>
        and now ...
            </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
            <Notes>
                testing!
            </Notes>
            <Image src="DumpsterFire2.jpg" />
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
            <Heading margin="30px 0 0" textColor="primary" size={1}>
        testing everything but the ui is fine
            </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
            <Image src="pyramid.png" />
        </Slide>
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
