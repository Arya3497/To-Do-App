import React, { Component } from "react";
export default class ListItems extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.items.map((item, index) => {
            return (
              <div key={index} className="todo-row">
                <li key={index}> {item}</li>
                <button
                  className="todo-button1"
                  onClick={() => this.props.delete(item)}
                >
                  Delete
                </button>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}
