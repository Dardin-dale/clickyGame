import React, { Component } from 'react';
import './App.css';
import friends from "./cards.json";

class App extends Component {
  state = {
    score: 0,
    topScore: 0,
    friends: friends
  }

  randomize = () => {
    var array = this.state.friends;
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
    this.setState({friends: array})
  }

  

  render() {
    return (
      <div className="App">
        
      </div>
    );
  }
}

export default App;
