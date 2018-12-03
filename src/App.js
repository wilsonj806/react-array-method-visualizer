import React, { Component } from 'react';
import Form from './Form';
import Card from './Cards';
import Container from './Container';
import './index.css';

class App extends Component {
  constructor(props){
    super(props);
    this.initialState = {
      toRender: {
        map: false,
        filter: false,
        forEach: false,
        some: false,
        sort: false,
        find: false,
      },
      array: [],
      resetNow: false,
      isClicked: false,
      classNameArray: [
        "card card--init",
        "card card--map",
        "card card--filter",
        "card card--forEach",
        "card card--some",
      ],
    };
    this.state = this.initialState;
  }

  handleSubmit = (entry) => {
    if (entry === '') return;
    this.setState({array: [...this.state.array, entry]});
  }

  handleCardAdd = (keyVal) => {
    switch(keyVal) {
      case 1:
        this.setState({
          toRender: {
            ...this.state.toRender,
            map: !this.state.toRender.map,
          },
        });
        break;
      case 2:
        this.setState({
          toRender: {
            ...this.state.toRender,
            filter: !this.state.toRender.filter,
          },
        });
        break;
      default:
        break;
    }
  }

  resetArrays = () => {
    console.log(this);
    this.setState({
      array: [],
      toRender: {...this.initialState.toRender}
    });
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
      />
    );
  }

  render() {
    return (
      <main>
        <Form
          handleSubmit={this.handleSubmit}
          handleCardAddFn={this.handleCardAdd}
          resetArrays={this.resetArrays}
          renderCardFn={this.renderCard}
        />
        <Container
        className="ctr--cards"
        renderCardFn={this.renderCard}
        renderState={this.state.toRender}
        />
      </main>
    );
  }
}

export default App;
