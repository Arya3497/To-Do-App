import React, { Component } from "react";
import TodoForm from "../TodoForm";
import { connect } from "react-redux";
class ListItems extends Component {
  render() {
    //console.log(this.props.todos);
    const { todos } = this.props;
    return (
      <div>
        <ul>
          {this.props.todos.map((item, index) => {
            //console.log("abc", item);
            return (
              <div key={index} className="todo-row">
                <li key={index}> {item.todo}</li>
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
const mapStateToProps = (state) => {
  //console.log("CONSOLE", state);
  const { value, id, todos } = state.todo;
  return {
    value,
    id,
    todos,
  };
};
export default connect(mapStateToProps)(ListItems);
