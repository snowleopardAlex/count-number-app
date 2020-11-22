import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }
  
  // whenever we use setState we need to bind it because it will not work
  this.handleClick = this.handleClick.bind(this)
}

  handleClick() {
    this.setState(prevState => {
      return {
        count: prevState.count + 2
      }
    })
  }  

  render() {
    return (
      <div className="App">
        <h1>method setState</h1>
        <p>Whenever we use setState we need to bind it</p>
        <h2>{this.state.count}</h2>
        <button onClick={this.handleClick}>Change</button>
      </div>
    );
  }
}

export default App;
