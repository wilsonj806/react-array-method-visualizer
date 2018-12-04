import React, { Component } from 'react';

class Button extends Component {

  render() {
    if (this.props.children === undefined) return null;
    // Accounting for, if the user doesn't specify a button type
    let defaultType;
    if (this.props.btnType === undefined) {
      defaultType = 'btn--std'
    }
    return (
      <button
        className={`btn ${this.props.btnType} ${defaultType}`}
        onClick={this.props.onClick}
      >
      {this.props.children}
      </button>
    )
  }
}

export default Button;