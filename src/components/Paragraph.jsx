import React, { PropTypes } from 'react';

class Paragraph extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.pText}</p>
      </div>
    );
  }
}

Paragraph.propTypes = {
  pText: PropTypes.string.isRequired
};

export default Paragraph;
