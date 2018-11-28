import React, { Component } from 'react';

class Form extends Component {
  constructor(props){
    super(props);
    this.initialState = {
      number: '',
    }
    this.state = this.initialState;
  }

  handleChange = event => {
    const {value} = event.target;
    const parsedVal = parseInt(value, 10);
    if (isNaN(parsedVal) || (value === '')) return;

    this.setState({
      "number": parsedVal
    });
  }

  submitForm = () => {
    this.props.handleSubmit(this.state.number);
    this.setState(this.initialState);
  }

  render() {
    const { number } = this.state;
    return (
      <form id="form">
      <input
        type="text"
        name="entry"
        value={number}
        onChange={this.handleChange}
      />
      <input className="btn--submit"
        form="form"
        type="button"
        value="Submit"
        onClick={this.submitForm}
      />
      </form>
    );
  }
}

export default Form;