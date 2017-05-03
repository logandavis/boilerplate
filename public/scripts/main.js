'use strict';

var HelloWorld = React.createClass({
  getInitialState: function() {
    return {
      h1Text: '',
      pText: ''
    };
  },

  componentDidMount: function() {
    $.ajax({
      url: '/api/',
      dataType: 'json',
      cache: false,
      type: 'GET',
      success: function(data) {
        // data from res.json in routes/index.js is {text: "Hello World"}
        this.setState({
          h1Text: data.h1Text,
          pText: data.pText,
        });
      }.bind(this),
      failure: function(xhr, status, err) {
        console.error('GET /api', status, err.toString());
      }.bind(this)
    });
  },

  render: function() {
    return (
      <div>
        <h1> {this.state.h1Text} </h1>
        <Paragraph pText={this.state.pText}/>
      </div>
    );
  }
});

var Paragraph = React.createClass({
  render: function() {
    return (
      <div>
        <p>{this.props.pText}</p>
      </div>
    );
  }
});

ReactDOM.render(
  <HelloWorld />,
  document.getElementById('content')
);
