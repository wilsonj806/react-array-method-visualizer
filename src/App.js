import React, { Component } from 'react';
import Form from './organism/Forms';
import Card from './organism/Cards';
import Container from './organism/Container';
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
      case 3:
        this.setState({
          toRender: {
            ...this.state.toRender,
            forEach: !this.state.toRender.forEach,
          },
        });
        break;
      default:
        break;
    }
  }

  resetArrays = () => {
    this.setState({
      array: [],
      toRender: {...this.initialState.toRender}
    });
  }

  renderCard = (i) => {
    const state = this.state;
    return (
      <Card
        key={i}
        keyVal={i}
        className={state.classNameArray[i]}
        arrayData={state.array}
        resetState={state.resetNow}
        onResetClick={() => this.resetArray()}
      />
    );
  }

  render() {
    // TODO: move the buttons in div.ctr--btn or turn it into a component
    return (
      <main>
        <Form
          handleSubmit={this.handleSubmit}
          resetArrays={this.resetArrays}
          renderCardFn={this.renderCard}
        >
        <div className="ctr--btn">
            <button
            key={1}
            className="btn btn--std"
            onClick={()=>this.handleCardAdd(1)}
            >
              Array.prototype.map( )
            </button>
            <button
            key={2}
            className="btn btn--std"
            onClick={()=>this.handleCardAdd(2)}
            >
              Array.prototype.filter( )
            </button>
            <button
            key={3}
            className="btn btn--std"
            onClick={()=>this.handleCardAdd(3)}
            >
              Array.prototype.forEach( )
            </button>

          </div>
        </Form>
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
