import React, { Component } from 'react';
import Header from './components/layout/Header'
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

  //Toggle Complete

  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo =>{
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo
    }) })
  
  }

  delItem = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] })
  }

  render(){
    return (
      <div className="App">
        <Header />
        <Todos todos={this.state.todos} markComplete={this.markComplete} delItem={this.delItem}/>
      </div>
    );
}
}

export default App;
