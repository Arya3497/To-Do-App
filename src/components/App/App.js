import "./App.css";
import TodoForm from "../TodoForm";
import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      value: "",
    };
  }
  render() {
    return (
      <div className="todo-app">
        <TodoForm />
      </div>
    );
  }
}
