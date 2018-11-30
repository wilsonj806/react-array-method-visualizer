import React, { Component } from 'react';
import Form from './Form';
import Card from './Cards';
import './index.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      array: [],
      resetNow: false,
      isClicked: false,
      classNameArray: [
        "card card--init",
        "card card--forEach",
        "card card--map",
        "card card--filter",
        "card card--some",
      ],
    };
  }

  handleSubmit = (entry) => {
    if (entry === '') return;
    this.setState({array: [...this.state.array, entry]});
  }

  resetArrays = () => {
    console.log(this);
    this.setState({array: []});
  }

  renderCard = (i) => {
    const state = this.state;
    return (
      <Card
        keyVal={i}
        className={state.classNameArray[i]}
        arrayData={state.array}
        resetState={state.resetNow}
        onResetClick={() => this.resetArray()}
        isClicked={state.isClicked}
      />
    );
  }

  render() {
    return (
      <main>
        <Form
          handleSubmit={this.handleSubmit}
          resetArrays={this.resetArrays}
        />
        {this.renderCard(0)}
        {this.renderCard(1)}
        {this.renderCard(2)}

      </main>
    );
  }
}

export default App;
