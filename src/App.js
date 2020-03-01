import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter />
      </div>
    );
  }
}

class Counter extends Component {
  state = {
    count: 0
  };


  increment = () => {
    this.setState(({ count }) => ({
      count: count + 1
    }));
  }
  decrease = () => {
    this.setState(({ count }) => ({
      count: count - 1
    }));
  }

  render() {
    return (
    <div>

      <div className="num">
      <button>{this.state.count}</button>
      </div>

      <div className="up">
      <button onClick={this.increment}>increase</button>
      </div>

      <div className="down">
      <button onClick={this.decrease}>decrease</button>
      </div> 

    </div>
    );
  }
}
export default App;