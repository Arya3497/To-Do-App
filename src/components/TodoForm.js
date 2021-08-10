import React from "react";
import ListItems from "./ListItems";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      items: [],
      id: 0,
    };

    this.inputValue = this.inputValue.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    //this.deleteItem = this.deleteItem.bind(this);

    // this.
  }

  inputValue(e) {
    this.setState({ value: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    this.setState({
      value: "",
      id: 0,
      items: [...this.state.items, this.state.value],
    });
  }

  // deleteItem(itemTobeDeleted) {
  //   const todosArray = [...this.state.items];
  //   todosArray.splice(itemTobeDeleted, 1);
  //   this.setState({ item: todosArray });
  // }

  // deleteItem(item) {
  //   const delitem = [...this.state.toDoItems];
  //   let index = delitem.map((element) => element.name).indexOf(item);
  //   delitem.splice(index, 1);
  //   this.setState({ toDoItems: delitem });
  // }
  // deleteItem(itemTobeDeleted, event) {
  //   const filteredItem = this.state.items.filter((item) => {
  //     return item !== itemTobeDeleted;
  //   });
  //   this.setState({
  //     items: filteredItem,
  //   });
  //   //   // this.setState({
  //   //   items: this.state.items.filter((item) => item !== itemTobeDeleted),
  //   // });
  // }
  //
  deleteItem = (itemTobeDeleted) => (event) => {
    // console.log("itemTobeDeleted:", itemTobeDeleted);
    const filteredItem = this.state.items.filter((item) => {
      return item !== itemTobeDeleted;
    });
    this.setState({
      items: filteredItem,
    });
  };

  render() {
    console.log(this.deleteItem);
    console.log(this.state.items);
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

        <ListItems
          items={this.state.items}
          delete={(item) => this.deleteItem(item)}
        />
      </div>
    );
  }
}

export default TodoForm;
