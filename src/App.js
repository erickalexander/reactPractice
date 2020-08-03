import React, { Component } from 'react';
import Todos from './components/Todos';
import './App.css';

class App extends Component {
  state = {
    todos:[
      {
        id: 1,
        title: 'Take out trash',
        completed: false
      },
      {
        id: 2,
        title: 'Go to concert',
        completed: false
      },
      {
        id: 3,
        title: 'Attend meeting',
        completed: true
      },
      {
        id: 4,
        title: 'Go grocery shopping',
        completed: false
      }
    ]
  }

  render(){
    console.log(this.state.todos);
    return (
      <div className="App">
        <Todos todos={this.state.todos} />
      </div>
    );
}
}

export default App;
