import React, { Component } from 'react';
import Header from './components/layout/Header'
import Todos from './components/Todos';
import AddTodo from './components/AddTodo'
import { v4 as uuid } from 'uuid'
import './App.css';


class App extends Component {
  state = {
    todos:[
      {
        id: uuid(),
        title: 'Take out trash',
        completed: false
      },
      {
        id: uuid(),
        title: 'Go to concert',
        completed: false
      },
      {
        id: uuid(),
        title: 'Attend meeting',
        completed: true
      },
      {
        id: uuid(),
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

  addTodo = (title) => {
    const newTodo = {
      id: uuid(),
      title: title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo]})
  }

  render(){
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo addTodo={this.addTodo}/>
          <Todos todos={this.state.todos} markComplete={this.markComplete} delItem={this.delItem}/>
        </div>

      </div>
    );
}
}

export default App;
