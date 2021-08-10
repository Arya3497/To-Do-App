import React from "react";
/*import React, { Component } from "react";

export default class ListItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      items: [],
      id: 0,
    };
  }
  render() {
    const { items } = this.props;
    return (
      <div>
        <ul>
          {items.map((item, index) => {
            return (
              <div className="todo-row">
                <li key={index}> {item}</li>
                <button className="todo-button1" onClick={delete item}>
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
*/
const ListItems = (props) => (
  <div>
    <ul>
      {props.items.map((item, index) => {
        return (
          <div className="todo-row">
            <li key={index}> {item}</li>
            <button className="todo-button1" onClick={props.delete(item)}>
              Delete
            </button>
          </div>
        );
      })}
    </ul>
  </div>
);

export default ListItems;
