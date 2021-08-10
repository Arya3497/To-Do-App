import React from "react";
import TodoForm from "./TodoForm";
import React, { Component } from "react";

export default class Title extends Component {
  render() {
    return (
      <div>
        <h1>Title: To-do</h1>
        <TodoForm />
      </div>
    );
  }
}
