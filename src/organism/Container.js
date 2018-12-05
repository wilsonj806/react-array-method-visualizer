import React, { Component } from 'react';

// TODO: if templating handlers is in a different file like App.render.js, update Container.js

class Container extends Component {
  constructor(props) {
    super(props);
    this.intialState = {
      index: 0,
    }
    this.state = this.initialState;
  }

  renderFromState = () => {
    const props = this.props;
    if (!props.toRender) {
      throw new Error('this.props.toRender is undefined');
    }
    // convert the passed state var to an array of boolean values
    const boolArr = Object.values(props.toRender);
    const jsxArr = boolArr.map((val, i) => {
      if (val === true) {
        let jsx = (props.renderCard(i + 1));
        return jsx;
      }
      return undefined;
    });
    return jsxArr;
  }

  render() {
    const props = this.props;
    const renderList = [];
    // Default card, always needs to be there
    if (props.className === "ctr--cards") {
      renderList.push(props.renderCard(0));
    }
    const newList = this.renderFromState();
    renderList.push(newList);

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
