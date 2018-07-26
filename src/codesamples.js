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
}`;
