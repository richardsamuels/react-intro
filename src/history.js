import React from 'react';

import {
  Appear,
  Heading,
  Slide,
  Text,
  Notes,
  Image
} from 'spectacle';

import CodeSlide from 'spectacle-code-slide';

const yeoldejs = `function fetchData(page) {
  $.get('http://my.domain/api/data', {page: page}, function(resp) {
      $("#fetch_button").remove();
      for (var i = 0; i < resp.length; ++i) {
          $("#id").append("<div>" + resp[i] + "</div");
      }
      $("#id").append('<input id="fetch_button" type="button" onClick="fetchData(' + (page + 1) + ')">Next</input>');
  });
}`;

export default [
  <Slide transition={['fade']} bgColor="tertiary">
    <Notes>
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
  </Slide>,
  <Slide transition={['fade']} bgColor="tertiary">
    <Notes>
      <ol>
        <li>Javascript was once a bad word</li>
        <li>Mozilla hadn{"'"}t been updated in 2 years by 2008; Mozilla Foundation had committed to Firebird/Firefox</li>
      </ol>
    </Notes>
    <Heading size={1} textColor="secondary">
            web dev up until 2008
    </Heading>
    <Appear>
      <Text margin="30px 0 0" textColor="primary" textSize={'1.2em'}>
              IE, Firefox 3.x, Mozilla, Chrome{"'"}s first public release
      </Text>
    </Appear>
    <Appear>
      <Text margin="10px 0 0" textColor="primary" textSize={'0.8em'} italic>
              People were starting to care about Safari (iPhone released in 2007)
      </Text>
    </Appear>
    <Appear>
      <Text margin="30px 0 0" textColor="primary" textSize={'1.2em'}>
              Node.js literally didn{"'"}t exist yet (May 2009)
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
  </Slide>,
  <Slide transition={['fade']} bgColor="tertiary">
    <Notes>
      <ol>
        <li>Microsoft proprietary stuff</li>
        <li>ActiveX loaded + executed arbitrary code from websites</li>
        <li>Conditional HTML execution</li>
        <li>Microsoft didn{"'"}t care about the security of your system</li>
        <li>Microsoft didn{"'"}t care about the HTML standard</li>
        <li>Microsoft didn{"'"}t care about the CSS standard</li>
        <li>Microsoft didn{"'"}t care about the Javascript standard</li>
      </ol>
    </Notes>
    <Heading size={1} textColor="secondary">
            internet explorer 6 + micros*ft
    </Heading>
    <Appear>
      <Text margin="30px 0 0" textColor="primary" textSize={'1.2em'}>
              Microsoft didn{"'"}t care about the security of your system
      </Text>
    </Appear>
    <Appear>
      <Text margin="30px 0 0" textColor="primary" textSize={'1.2em'}>
              Microsoft didn{"'"}t care about the HTML standard
      </Text>
    </Appear>
    <Appear>
      <Text margin="30px 0 0" textColor="primary" textSize={'1.2em'}>
              Microsoft didn{"'"}t care about the CSS standard
      </Text>
    </Appear>
    <Appear>
      <Text margin="30px 0 0" textColor="primary" textSize={'1.2em'}>
              Microsoft didn{"'"}t care about the Javascript standard
      </Text>
    </Appear>
    <Appear>
      <Text margin="30px 0 0" textColor="primary" textSize={'1.2em'}>
              Microsoft didn{"'"}t care about compatibility
      </Text>
    </Appear>
  </Slide>,
  <Slide transition={['fade']} bgColor="tertiary">
    <Notes>
      <ol>
        <li>Macromedia was originally indepedent and later acquired by Adobe</li>
        <li>Proprietary (hundreds a developer seat) and big files (megabytes)</li>
        <li>Windows + Mac OS X</li>
        <li>Slow but it was the only way to achieve games, and complex animation in the browser</li>
        <li>Flash was like a window into a different world; keyboards shortcuts and scrolling
        didn{"'"}t work very well, and you knew it was{"'"}t the browser</li>
      </ol>
    </Notes>
    <Heading size={1} textColor="secondary">
      <Image src="macromedia-shockwave-enabled-1.svg" width={'31%'} />
      <Image src="macromedia-flash-enabled-1.svg" width={'31%'} />
    </Heading>
  </Slide>,
  <Slide transition={['fade']} bgColor="tertiary">
    <Notes>
      <ol>
        <li>Release of jQuery</li>
      </ol>
    </Notes>
    <Heading size={1} textColor="secondary">
        2006
    </Heading>
  </Slide>,
  <Slide transition={['fade']} bgColor="tertiary">
    <Notes>
      <ol>
        <li>The role jQuery played in changing front-end dev cannot be understated.</li>
        <li>I think jquery is the single most important library in front-end development history</li>
        <li>jQuery was sort-of a precursor to polyfills/modernizers/sane-ifiers</li>
        <li>jQuery made it possible to have confidence that the code you wrote would work in Internet Explorer, Mozilla Internet Suite, Fire{'{'}bird, fox{'}'}, Opera</li>
        <li>jQuery was free</li>
      </ol>
    </Notes>
    <Heading size={1} textColor="secondary">
      <Image src="jQuery-Logo_On_Dark.png" />
    </Heading>
  </Slide>,
  <CodeSlide
    bgColor="secondary"
    transition={[]}
    lang="js"
    code={yeoldejs}
    ranges={[
      { loc: [0, 9], title: 'ye olde days' },
      { loc: [1, 2], title: 'fetching data' },
      { loc: [3, 4], title: 'iterate' },
      { loc: [3, 6], title: 'insert', note: 'lots of complicated formatting logic omitted' },
      { loc: [0, 9], title: 'it works', note: 'suddenly designers were coding more' },
      { loc: [4, 5], title: 'haha no', note: 'unclosed div. good luck' }
      // ...
    ]}
  />,
  <Slide bgColor="secondary">
    <Notes>
      <ol>
        <li>But it{"'"}s unmaintainble, unscalable, untestable</li>
        <li>The tools required to test this code only became mature in the 2010s</li>
        <li>This in a way formed inspiration for a long list of frameworks like Meteor, Ember, AngularJS</li>
      </ol>
    </Notes>
    <Heading size={1} textColor="primary">
            it works!
    </Heading>
  </Slide>
];
