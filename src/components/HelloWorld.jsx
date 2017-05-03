import React from 'react';
import $ from 'jquery';
import Paragraph from './Paragraph';

class HelloWorld extends React.Component {
  constructor() {
    super();
    this.state = {h1Text: '', pText: ''};
  }

  componentDidMount() {
    $.ajax({
      url: '/api/',
      dataType: 'json',
      cache: false,
      type: 'GET',
      success: (data) => {
        // data from res.json in routes/index.js is {text: "Hello World"}
        this.setState({
          h1Text: data.h1Text,
          pText: data.pText
        });
      },
      failure: (xhr, status, err) => {
        console.error('GET /api', status, err.toString());
      }
    });
  }

  render() {
    return (
      <div>
        <h1> {this.state.h1Text} </h1>
        <Paragraph pText={this.state.pText}/>
      </div>
    );
  }
}

export default HelloWorld;
