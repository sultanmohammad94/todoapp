import React from "react";

export default function InputArea(props) {
  
  const buttonClickedAction = props.onClick;
  const textInputValue = props.textValue;
  const textChangedAction = props.onChange;
  const textInputPlaceholder = props.placeholder;
  const textInputName = props.txtInputName;
  const styleObj = props.style ? props.style : null;
  const cssClassName = props.className ? props.className : null;
  
  return (
    <div className={cssClassName}>
      <div className="input-container">
        <input
          type="text"
          name={textInputName}
          placeholder={textInputPlaceholder}
          onChange={textChangedAction}
          value={textInputValue ? textInputValue : ""}
          style={styleObj}
          className="p-2 form-control m-1"
        />
        <input
          className="p-2 btn btn-outline-primary m-1"
          type="button"
          value="Add"
          style={{backgroundColor:"#5000CA", color:"#ffff", border:"2px solid #464646"}}
          onClick={buttonClickedAction}
        />
      </div>
    </div>

  );
}
