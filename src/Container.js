import React, { Component } from 'react';

class Container extends Component {
  constructor(props) {
    super(props);
    this.intialState = {
      index: 0,
    }
    this.state = this.initialState;
  }

  render() {
    let renderList = [];
    renderList.push(this.props.renderCardFn(0));
    if (this.props.renderState.map === true) {
      renderList.push(this.props.renderCardFn(1));
    }
    if (this.props.renderState.filter === true) {
      renderList.push(this.props.renderCardFn(2));
    }
    return (
      <div
      className="ctr--cards"
      >
        {renderList}
      </div>
    )
  }
}

export default Container;
