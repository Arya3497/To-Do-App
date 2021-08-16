import React from "react";
import ListItems from "../ListItems";
import firebase from "../Firebase/firebase_config";
import { connect } from "react-redux";
import { addTodo } from "../../redux/action/addTodo";
import { deleteTodo } from "../../redux/action/deleteTodo";
class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      items: [],
      id: 0,
      isloading: true,
    };

    this.inputValue = this.inputValue.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.deleteItem = this.deleteItem.bind(this);

    // this.
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
        this.setState({
          items: temp,
          isloading: false,
        });
      });
  }
  inputValue(e) {
    this.setState({ value: e.target.value });
  }
  adTodo(value) {
    const db = firebase.firestore();
    db.collection("todo").add({
      name: value,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    this.adTodo(this.state.value);
    this.props.addTodo(this.state.value);
    const a = [...this.state.items];
    a.push(this.state.value);

    this.setState({
      value: "",

      id: this.state.id + 1,
      items: a,
    });

    console.log(this.state.items);
  }

  deleteItem(itemTobeDeleted) {
    console.log("call");
    const filteredItem = this.state.items.filter(function (item) {
      return item !== itemTobeDeleted;
    });
    // this.setState({
    //   items: filteredItem,
    // });
    this.props.deleteTodo(filteredItem);
  }

  render() {
    //console.log(this.deleteItem);
    //console.log(this.state.items);
    const isLoggedIn = this.state.isloading;
    return (
      <div>
        <form className="todo-form" onSubmit={this.onSubmit}>
          <h1> What's the Plan for today</h1>

          <input
            type="text"
            placeholder="Add a todo"
            className="todo-input"
            value={this.state.value}
            onChange={this.inputValue}
          />

          <button className="todo-button">Add Item</button>
        </form>
        {isLoggedIn ? (
          <div>Loading...</div>
        ) : (
          <ListItems items={this.state.items} delete={this.deleteItem} />
        )}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addTodo: (value) => dispatch(addTodo(value)),
  deleteTodo: (key) => dispatch(deleteTodo(key)),
});
export default connect(null, mapDispatchToProps)(TodoForm);
