import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    count: 0,
  };

  // This style of function declaration on a class is called a "property initializer"
  // This is needed because this function is used as an event handler,
  // which means that it will be called without the context needed, without the
  // appropriate "this".
  // See more: https://gist.github.com/lourd/8f450b609aab68d1de9b35228e784f30
  onUpClick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.onUpClick}>Up</button>
      </div>
    );
  }
}

export default App;
