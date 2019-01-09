import React, { Component } from 'react';
import './App.css';
import cards from "./cards.json";
import Banner from "./components/Banner";
import Clickable from "./components/Clickable";

class App extends Component {
  state = {
    score: 0,
    topScore: 0,
    cards: cards,
    clicked: []
  }

  //Randomizes the state array of cards
  randomize = () => {
    var array = this.state.cards;
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
    this.setState({cards: array})
  }

  //hadles an click on the 
  handleClick = (name) => {
    //if clicked already -> reset score/clicked value for all cards
    if (this.state.clicked.indexOf(name) >= 0){
      console.log("this was already clicked");
      this.setState({score: 0, clicked: []});
    }else {
      var newScore = this.state.score + 1;
      var newArr = this.state.clicked;
      newArr.push(name);
      if (newScore > this.state.topScore) {
        this.setState({score: newScore, topScore: newScore, clicked: newArr});
      } else {
        this.setState({score: newScore, clicked: newArr});
      }
    }

    // console.log("Randomizing...")
    this.randomize();

  }

  render() {
    return (
      <div className="App">
        <Banner score={this.state.score} topScore={this.state.topScore} />

        <div className="container">
        {this.state.cards.map(card => {
        return <Clickable key={card.id} name={card.name} image={card.image} test={this.handleClick} />
        })}
        </div>

      </div>
    );
  }
}

export default App;
