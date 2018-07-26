export const yeoldejs = `function fetchData(page) {
  $.get('http://my.domain/api/data', {page: page}, function(resp) {
      $("#fetch_button").remove();
      for (var i = 0; i < resp.length; ++i) {
          $("#id").append("<div>" + resp[i] + "</div");
      }
      $("#id").append('<input id="fetch_button" type="button" onClick="fetchData(' + (page + 1) + ')">Next</input>');
  });
}`;

export const reactSlide = '<div>o hai</div>';
export const reactSlideSFC = `function ohai() {
    return (<div>o hai</div>);
}`;

export const reactSlideBigComponent = `class ohai extends React.Component {
  render() {
    return (<div>o hai</div>);
  }
}`;

export const reactSlideBigComponentBabel = `class ohai extends React.Component {
  render() {
    // return (<div>o hai</div>);
    return React.createElement('div', 'o hai');
  }
}`;

export const whocares = `class ohai extends React.Component {
  render() {
    return (<div>o hai</div>);
  }
}

class App extends React.Component {
  render() {
    return (<ohai></ohai>);
  }
}`;

export const whocares2 = `class ohai extends React.Component {
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
}`;

export const reactedJS = `class ListItem extends React.Component {
  render() {
    return (<div>{this.props.data}</div>);
  }
}

class ListFetchButton extends React.Component {
  render() {
    return (<input id="fetch_button" type="button" onClick={this.props.onClick}>Next</input>);
  }
}

export class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      data: []
    }
  }

  onClick = () => {
    $.get('http://my.domain/api/data', {page: this.state.page}, function(resp) {
      this.setState({ data: this.state.data.concat(resp) });
    });
  }

  render() {
    return (
      <div>
        <div>
          {
            this.state.data.map(function(item, index) {
              return (<ListItem key={index} data={item} />);
            });
          }
        </div>
        <ListFetchButton onClick={this.onClick} />
      </div>
    );
  }
}`;

export const enzyme1 = `import { List } from './list';

//class List extends React.Component {
//  return (
//    <div>
//      <div>
//        {
//          this.state.data.map(function(item, index) {
//            return (<ListItem key={index} data={item} />);
//          });
//        }
//      </div>
//      <ListFetchButton onClick={this.onClick} />
//    </div>
//  );
//};

test('list-empty', function() {
  const wrapper = Enzyme.mount(
    <List />);

  const button = wrapper.find('ListFetchButton');
  expect(button.length).toBe(1);
});

test('list-with-data', function() {
  const wrapper = Enzyme.mount(
    <List />);

  wrapper.instance().state.data = ['data1', 'data2', 'data3'];

  const button = wrapper.find('ListFetchButton');
  expect(button.length).toBe(1);

  const items = wrapper.find('ListItem');
  expect(items.length).toBe(3);
});`

export const enzyme2 = `import { List } from './list';

//class List extends React.Component {
//  return (
//    <div>
//      <div>
//        {
//          this.state.data.map(function(item, index) {
//            return (<ListItem key={index} data={item} />);
//          });
//        }
//      </div>
//      <ListFetchButton onClick={this.onClick} />
//    </div>
//  );
//};
//
// class ListFetchButton extends React.Component {
//   render() {
//     return (<input id="fetch_button" type="button" onclic={this.props.onClick}>Next</input>);
//   }
// }

test('list-empty', function() {
  const wrapper = Enzyme.mount(
    <List />);

  const button = wrapper.find('ListFetchButton');
  expect(button.length).toBe(1);
});

test('list-with-data', function() {
  const wrapper = Enzyme.mount(
    <List />);

  wrapper.instance().state = ['data1', 'data2', 'data3'];

  const button = wrapper.find('ListFetchButton');
  expect(button.length).toBe(1);

  const items = wrapper.find('ListItem');
  expect(items.length).toBe(3);
});`

export const enzyme3 = `import { ListFetchButton } from './list';

test('list-button-click', function(done) {
  const wrapper = Enzyme.mount(
    <List />);

  wrapper.instance().onClick = () => {
    done();
  }

  const button = wrapper.find('input');
  expect(button.length).toBe(1);

  button[0].simulate('click', new MouseEvent(...));
});`
