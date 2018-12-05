import React, { Component } from 'react';
import Button from './atoms/Buttons';
import Card from './molecules/Cards';
import Form from './organism/Forms';
import Container from './organism/Container';
import './index.css';

// FIXME: consolidate indexing standard, right now its both 0,1,2,3 and 1,2,3,4
// TODO: determine where to import showArray.js(i.e figure out which component is determining the contents of the cards)
// TODO: move templating handlers to a different file like App.render.js
class App extends Component {
  constructor(props) {
    super(props);
    this.initialState = {
      toRender: {
        map: false,
        filter: false,
        forEach: false,
        some: false,
        sort: false,
        findIndex: false,
        reduce: false,
      },
      array: [],
      resetNow: false,
    };
    this.state = this.initialState;
  }
  numArr = [1,2,3,4,5,6,7,8];

  // Event handling methods

  handleSubmit = (entry) => {
    if (entry === '') return;
    this.setState({array: [...this.state.array, entry]});
  }

  resetArrays = () => {
    this.setState({
      array: [],
      toRender: {...this.initialState.toRender}
    });
  }

  // State management

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
      case 4:
        this.setState({
          toRender: {
            ...this.state.toRender,
            some: !this.state.toRender.some,
          },
        });
        break;
      default:
        break;
    }
  }

  // Rendering methods

  handleCardId = (numArr) => {
    switch(numArr) {
      case 0:
        return 'card--init';
      case 1:
        return 'card--map';
      case 2:
        return 'card--filter';
      case 3:
        return 'card--forEach';
      case 4:
        return 'card--some';
      case 5:
        return 'card--find';
      case 6:
        return 'card--findIndex';
      default:
        break;
    }
  }

  renderHeading = i => {
    switch (i) {
      case 0:
        return (
          'Initial State'
        );
      case 1:
        return (
          'Array.map( )'
        );
      case 2:
        return (
          'Array.filter( )'
        );
      case 3:
        return (
          'Array.forEach( )'
        );
      case 4:
        return (
          'Array.some( )'
        );
      default:
      break;
    }
  }

  renderCard = (i) => {
    const state = this.state;
    return (
      <Card
        key={i}
        keyVal={i}
        cardType={this.handleCardId(i)}
        arrayData={state.array}
        onResetClick={() => this.resetArray()}
        renderHeading={this.renderHeading}
        showMapReact={this.props.arrMethods.showMapReact}
      />
    );
  }

  render() {
    let btnList;
    btnList = this.numArr.map((val) => {
      return (
        <Button
          key={val}
          onClick={() => this.handleCardAdd(val)}
        >
          {this.renderHeading(val)}
        </Button>
      )
    })
    // TODO: eventually make a method for populating ctr--btn by extending Container.js
    return (
      <main>
        <Form
          handleSubmit={this.handleSubmit}
          resetArrays={this.resetArrays}
        >
          <div className="ctr--btn">
            {btnList}
          </div>
        </Form>
        <Container
          numArr={this.numArr}
          className="ctr--cards"
          toRender={this.state.toRender}
          renderCard={this.renderCard}
          renderState={this.state.toRender}
        />
      </main>
    );
  }
}

export default App;
