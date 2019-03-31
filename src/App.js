import React, { Component } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';

class App extends Component {

    constructor() {
      super();
      this.todoitems = [
        {title : 'công việc 1',isComplete : true},
        {title : 'công việc 2'},
        {title : 'công việc 3'},
      ];
    }

  render() {
    return (
     <div className="App">
          {
            this.todoitems.map((item,index) => <TodoItem key = {index} items={item}/>)
          }
     </div>
    );
  }
}

export default App;
