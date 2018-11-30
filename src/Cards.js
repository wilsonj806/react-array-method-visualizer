import React, { Component } from 'react';

class Card extends Component {
  constructor(props){
    super(props);
    this.initialState = {
      arrayInstance: [],
      isClicked: false,
    }
    this.state = this.initialState;
  }

  renderHeading = i => {
    switch (i) {
      case 0:
        return (
          'Initial State'
        );
      case 1:
        return (
          'Array.prototype.forEach()'
        );
      case 2:
        return (
          'Array.prototype.map()'
        );
      case 3:
        return (
          'Array.prototype.filter()'
        );
      case 4:
        return (
          'Array.prototype.some()'
        );
      default:
      break;
    }
  }

  handleBtn = () => {
    if (this.state.arrayInstance.length === 0) {
      this.setState({
        arrayInstance: this.props.arrayData,
        isClicked: !this.state.isClicked,
      });
    }

  }
  resetClickState = (e) => {
    console.log(e);
    this.setState({isClicked: false});
  }
  renderArray = () => {
    if ((this.props.arrayData.length < 1) && (this.props.keyVal === 0)){
      return `Please submit values`;
    }
    if (this.props.keyVal === 0) {
      return `[${this.props.arrayData}]`;
    }
    if (this.props.arrayData.length > 0) {
      return `[${this.props.arrayData}]`;
    }
  }

  processArray = () => {
    if (this.props.keyVal === 0) return;
    const strArr = this.state.arrayInstance.toString();
    return (
      <p
      className="card__text"
      onLoad={(e) => this.resetClickState(e)}
      >
        [{strArr}]
      </p>
    )
  }

  render() {
    const keyVal = this.props.keyVal;
    let result;
    let primBtn;

    if (this.state.isClicked === true) {
      result = this.processArray(this.props.keyVal);
    }
    if (this.props.keyVal !== 0) {
      primBtn =
        <>
          <button
            type="button"
            className="btn btn--std"
            onClick={(e) => this.handleBtn(e)}
          >
            Begin Computation
          </button>
          <button
          type="button"
          className="btn btn--reset"
          onClick={() => this.props.onResetClick()}
          >
            Reset
          </button>
        </>
    }
    return (
      <div className={this.props.className}
        key={keyVal}
      >
        <h2 className="card__heading">{this.renderHeading(keyVal)}</h2>
        <div className="card__content">
          <p className="card__text">
            {this.renderArray()}
          </p>
          {result}
          {primBtn}
        </div>
      </div>
    );
  }
}

export default Card;