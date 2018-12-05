import React, { Component } from 'react';
import Button from '../atoms/Buttons';

// FIXME: rethink when to make the array update the instanced array
class Card extends Component {
  constructor(props){
    super(props);
    this.initialState = {
      arrayInstance: [],
      isclicked: false,
      isInstanced: false,
    }
    this.state = this.initialState;
  }

  componentDidMount() {
    // render array if the property exists and the Card just got rendered
    if (this.props.arrayData) {
      this.setState({arrayInstance:[...this.props.arrayData]});
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // reset if button is clicked
    if (this.state.isclicked !== false) {
      this.setState({isclicked: false});
      return;
    }
    if (prevState.arrayInstance !== this.props.arrayData) {
      this.setState({
        arrayInstance: this.props.arrayData,
      });
    }
  }

  handleBtn = () => {
    this.setState({isInstanced: true});
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


    result = this.processArray(keyVal);
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
        <h2 className="card__heading">{this.props.renderHeading(keyVal)}</h2>
        <div className="card__content">
          <p className="card__text">
            {this.renderArray()}
          </p>
          {result}
          <div className="card--btns">
            {primBtn}
          </div>
        </div>
      </div>
    );
  }
}

export default Card;