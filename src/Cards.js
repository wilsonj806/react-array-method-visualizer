import React, { Component } from 'react';
class Card extends Component {
  constructor(props){
    super(props);
    this.initialState = {
      arrayInstance: [],
      isclicked: false,
      isRendering: false,
    }
    this.state = this.initialState;
  }

  componentDidUpdate(prevProps, prevState) {
    // reset if button is clicked
    if (this.state.isclicked !== false) {
      this.setState({isclicked: false});
      return;
    }
  }
  // move this to App.js
  renderHeading = i => {
    switch (i) {
      case 0:
        return (
          'Initial State'
        );
      case 1:
        return (
          'Array.prototype.map( )'
        );
      case 2:
        return (
          'Array.prototype.filter( )'
        );
      case 3:
        return (
          'Array.prototype.forEach( )'
        );
      case 4:
        return (
          'Array.prototype.some( )'
        );
      default:
      break;
    }
  }

  handleBtn = () => {
    if (this.state.arrayInstance.length === 0) {
      this.setState({
        arrayInstance: this.props.arrayData,
        isclicked: !this.state.isclicked,
        isRendering: !this.state.isRendering,
      });
    }

  }
  renderArray = () => {
    if ((this.props.arrayData.length < 1) && (this.props.keyVal === 0)){
      return `Please submit values`;
    }
    if ((this.props.keyVal === 0) || (this.props.arrayData.length > 0)) {
      return `[ ${this.props.arrayData} ]`;
    }
  }

  processArray = () => {
    if (this.props.keyVal === 0) return;
    let strArr = `[ ${this.state.arrayInstance.toString()} ]`
    return (
      <p
      className="card__text"
      >
        {strArr}
      </p>
    )
  }

  resetInstanceArray = () => {
    this.setState({arrayInstance: []});
  }

  render() {
    const keyVal = this.props.keyVal;
    let result;
    let primBtn;

    if ((this.state.isclicked === true) || (this.state.isRendering === true)) {
      result = this.processArray(this.props.keyVal);
    }
    if (this.props.keyVal !== 0) {
      primBtn =
        <>
          <button
            type="button"
            className="btn btn--std"
            onClick={() => this.handleBtn()}
          >
            Begin Computation
          </button>
          <button
          type="button"
          className="btn btn--reset"
          onClick={() => this.resetInstanceArray()}
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
          <div className="ctr--btn">
            {primBtn}
          </div>
        </div>
      </div>
    );
  }
}

export default Card;