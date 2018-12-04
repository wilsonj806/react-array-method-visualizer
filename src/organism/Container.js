import React, { Component } from 'react';

class Container extends Component {
  constructor(props) {
    super(props);
    this.intialState = {
      index: 0,
    }
    this.state = this.initialState;
  }

  renderFromState = (targetArr) => {
    const props = this.props;
    const renderState = props.renderState;
    if (renderState.map === true) {
      targetArr.push(props.renderCard(props.numArr[0]));
    }
    if (renderState.filter === true) {
      targetArr.push(props.renderCard(props.numArr[1]));
    }
    if (renderState.forEach === true) {
      targetArr.push(props.renderCard(props.numArr[2]));
    }
  }

  render() {
    const props = this.props;
    let renderList = [];
    // Default card, always needs to be there
    if (props.className === "ctr--cards") {
      renderList.push(props.renderCard(0));
    }

    this.renderFromState(renderList);

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
