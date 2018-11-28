import React, { Component } from 'react';

class Card extends Component {
  constructor(props){
    super(props);
    this.initialState = {
      arrayInstance: [],
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
  render() {
    return (
      <div className={this.props.className} index={this.props.index}>
        <h2 className="card__heading">{this.renderHeading(this.props.index)}</h2>
        <p className="card__text">
          [ {this.state.arrayInstance} ]
        </p>
        <button type="button" className="btn">Begin Computation</button>
      </div>
    );
  }
}

export default Card;