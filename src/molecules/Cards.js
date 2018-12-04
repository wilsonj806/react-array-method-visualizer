import React, { Component } from 'react';
import Button from '../atoms/Buttons';
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
  // TODO: move this to App.js or make it its own function to import
  renderHeading = i => {
    switch (i) {
      case 0:
        return (
          'Initial State'
        );
      case 1:
        return (
          'Array.map( )'
        );
      case 2:
        return (
          'Array.filter( )'
        );
      case 3:
        return (
          'Array.forEach( )'
        );
      case 4:
        return (
          'Array.some( )'
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
      console.dir(this.props.showMapReact);
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
    const props = this.props;
    const keyVal = props.keyVal;
    let result;
    let primBtn;

    if ((this.state.isclicked === true) || (this.state.isRendering === true)) {
      result = this.processArray(keyVal);
    }
    if (keyVal !== 0) {
      primBtn =
        <>
          <Button
            onClick={() => this.handleBtn()}
          >
            Begin Computation
          </Button>

          <Button
            btnType="btn--reset"
            onClick={() => this.resetInstanceArray()}
          >
            Reset
          </Button>
        </>
    }
    return (
      <div className={`card ${props.cardType}`}
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