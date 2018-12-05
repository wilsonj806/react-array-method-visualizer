import React, { Component } from 'react';
import Button from './atoms/Buttons';
import Card from './molecules/Cards';
import Form from './organism/Forms';
import Container from './organism/Container';
import './index.css';

// FIXME: consolidate indexing standard, right now its both 0,1,2,3 and 1,2,3,4
// TODO: determine where to import showArray.js(i.e figure out which component is determining the contents of the cards)
// TODO: consolidate heading rendering and the like into one place
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
        find: false,
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

  renderCard = (i) => {
    const state = this.state;
    return (
      <Card
        key={i}
        keyVal={i}
        cardType={this.handleCardId(i)}
        arrayData={state.array}
        onResetClick={() => this.resetArray()}
        showMapReact={this.props.arrMethods.showMapReact}
      />
    );
  }

  render() {
    // TODO: eventually make a method for populating ctr--btn by extending Container.js
    // TODO: reduce the buttons in the div.ctr--btn with Array.prototype.map()
    return (
      <main>
        <Form
          handleSubmit={this.handleSubmit}
          resetArrays={this.resetArrays}
        >
          <div className="ctr--btn">
              <Button
                key={1}
                onClick={() => this.handleCardAdd(1)}
              >
                Array.map( )
              </Button>

              <Button
                key={2}
                onClick={() => this.handleCardAdd(2)}
              >
                Array.filter( )
              </Button>
              <Button
                key={3}
                onClick={() => this.handleCardAdd(3)}
              >
                Array.forEach( )
              </Button>
            </div>
        </Form>
        <Container
          numArr={this.numArr}
          className="ctr--cards"
          renderCard={this.renderCard}
          renderState={this.state.toRender}
        />
      </main>
    );
  }
}

export default App;
