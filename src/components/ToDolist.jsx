import React from "react";
import ListItem from "./ListItem";
export default function ToDolist(props) {
  
  const styleObj = props.style ? props.style : null;
  
  return (
    <ul className="todolist-wrapper">
      {props.items.map((item, index) => (
        <ListItem
          item={item}
          key={index}
          onClick={props.onItemClick}
          style={styleObj}
        />
      ))}
    </ul>
  );
}
