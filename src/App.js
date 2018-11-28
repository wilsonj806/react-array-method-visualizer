import React, { Component } from 'react';
import Form from './Form';
import Card from './Cards';
import './index.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      array: [],

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

  renderCard = (i) => {
    return (
      <Card
        index={i}
        className={this.state.classNameArray[i]}
        arrayData={this.state.array}
      />
    );
  }

  render() {
    return (
      <main>
        <Form
          handleSubmit={this.handleSubmit}
        />
        {this.renderCard(0)}
        {this.renderCard(1)}
        {this.renderCard(2)}

      </main>
    );
  }
}

export default App;
