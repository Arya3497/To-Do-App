import React from "react";
import ListItems from "../ListItems";
import { connect } from "react-redux";
import {
  addTodo,
  deleteTodo,
  inputvalue,
} from "../../redux/action/action_todo";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);

    this.inputValue = this.inputValue.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  inputValue(e) {
    this.props.inputvalue(e.target.value);
  }

  onSubmit(e) {
    e.preventDefault();
    //console.log("item", this.props.value);
    this.props.addTodo(this.props.value);
  }

  deleteItem(itemTobeDeleted) {
    //console.log("call");
    const filteredItem = this.props.todos.filter((item) => {
      return item.todo !== itemTobeDeleted.todo;
    });
    //console.log("item", this.props.todos);
    this.props.deleteTodo(filteredItem);
  }

  render() {
    //console.log("Props", this.props);
    //console.log(this.state.items);
    const { value, id, todos, onSubmit, deleteItem, inputValue } = this.props;

    return (
      <div>
        <form className="todo-form" onSubmit={this.onSubmit}>
          <h1> What's the Plan for today</h1>
          <input
            type="text"
            placeholder="Add a todo"
            className="todo-input"
            value={this.props.value}
            onChange={this.inputValue}
          />

          <button className="todo-button">Add Todo</button>
        </form>

        <ListItems delete={this.deleteItem} />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addTodo: (value) => dispatch(addTodo(value)),
    inputvalue: (value) => dispatch(inputvalue(value)),
    deleteTodo: (key) => dispatch(deleteTodo(key)),
  };
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

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
