import React, { Component } from 'react';
import Form from './Form';
import Cards from './Cards';
import './index.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      array: [],
    };
  }
  handleSubmit = (entry) => {
    if (entry === '') return;
    this.setState({array: [...this.state.array, entry]});
  }
  render() {
    return (
      <main>
        <Form
          handleSubmit={this.handleSubmit}
        />
        <Cards
          arrayData={this.state.array}
        />
      </main>
    );
  }
}

export default App;
