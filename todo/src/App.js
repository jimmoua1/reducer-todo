import React from "react";
import Todo from './components/Todo';
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <Todo />
      </div>
    );
  }
}

export default App;