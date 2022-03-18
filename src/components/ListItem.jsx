import React from "react";

export default function ListItem(props) {
  
  const index = props.index ? props.index : null;
  const item = props.item ? props.item : null;
  const cssClassName = props.className ? props.className : null;
  const styleObj = props.style ? props.style : null;
  const itemClickedAction = props.onClick ? props.onClick : null;

  return (
    <li
      onClick={itemClickedAction}
      key={index}
      className={cssClassName}
      style={styleObj}
    >
      {item}
    </li>
  );
}
