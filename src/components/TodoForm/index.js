import React from "react";
import ListItems from "../ListItems";
import firebase from "../../Firebase/firebase_config";
import { connect } from "react-redux";
import {
  addTodo,
  deleteTodo,
  inputvalue,
  Firestore_data,
} from "../../redux/action/action_todo";
class TodoForm extends React.Component {
  constructor(props) {
    super(props);

    this.inputValue = this.inputValue.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  componentDidMount() {
    const db = firebase.firestore();

    let temp = [];
    db.collection("todo")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          temp.push(doc.data().name);
        });
      });
    this.props.Firestore_data(temp);
  }

  inputValue(e) {
    this.props.inputvalue(e.target.value);
  }

  adTodo(value) {
    const db = firebase.firestore();
    db.collection("todo").add({
      ID: this.props.id + 1,
      name: value,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    //console.log("item", this.props.value);
    this.adTodo(this.props.value);
    this.props.addTodo(this.props.value);
  }

  deleteItem(itemTobeDeleted) {
    console.log("call", itemTobeDeleted);
    const filteredItem = this.props.todos.filter(function (item) {
      return item.todo !== itemTobeDeleted;
    });
    // this.setState({
    //   items: filteredItem,
    // });
    console.log("dhkhsdkhksdk", filteredItem);
    this.props.deleteTodo(filteredItem);
  }

  render() {
    const {
      value,
      id,
      isloading,
      todos,
      onSubmit,
      deleteItem,
      inputValue,
      Firestore_data,
    } = this.props;
    const isLoggedIn = this.props.isloading;
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

          <button className="todo-button">Add Item</button>
        </form>
        {isLoggedIn ? (
          <div>Loading...</div>
        ) : (
          <ListItems delete={this.deleteItem} />
        )}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addTodo: (value) => dispatch(addTodo(value)),
    inputvalue: (value) => dispatch(inputvalue(value)),
    deleteTodo: (key) => dispatch(deleteTodo(key)),
    Firestore_data: (todos) => dispatch(Firestore_data(todos)),
  };
}

const mapStateToProps = (state) => {
  //console.log("CONSOLE", state);
  const { value, id, todos, isloading } = state.todo;
  return {
    value,
    id,
    todos,
    isloading,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
