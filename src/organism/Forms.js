import React, { Component } from 'react';

// FIXME: can't fully delete input in the text field
// FIXME: pressing Enter shouldn't refresh

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
    if (isNaN(parsedVal) || (value === '') || (value.length > 4)) return;

    this.setState({
      number: parsedVal
    });
  }

  submitForm = () => {
    this.props.handleSubmit(this.state.number);
    this.setState(this.initialState);
  }


  render() {
    const { number } = this.state;
    return (
      <>
        <div className="ctr--form">
          <form id="form" className="form">
            <h2 className="heading">Initialize Array</h2>
            <input
              type="text"
              name="entry"
              value={number}
              onChange={this.handleChange}
            />
            <input className="btn btn--std"
              form="form"
              type="button"
              value="Submit"
              onClick={this.submitForm}
            />
            <button className="btn btn--reset"
              type="button"
              onClick={this.props.resetArrays}
            >
              Reset
            </button>
          </form>
          {this.props.children}
        </div>
      </>
    );
  }
}

export default Form;