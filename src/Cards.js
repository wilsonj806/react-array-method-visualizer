import React, { Component } from 'react';

class Cards extends Component {
  render() {
    return (
      <div>[ {this.props.arrayData} ]</div>
    );
  }
}

export default Cards;