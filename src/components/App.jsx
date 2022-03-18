import React, { useState } from "react";
import InputArea from "./InputArea";
import ToDolist from "./ToDolist";
import Header from "./Header";
import WavyContainer from "./WavyContainer";

export default function App() {
  
  const [text, setText] = useState("");
  const [items, setItems] = useState([]);
  
  function handleTextChange(e) {
    setText(e.target.value);
  }

  function handleAdd() {
    if (text !== "") {
      items.push(text);
      setText("");
    }
  }

  function deleteItem(e) {
    const { textContent } = e.target;
    const deletedItemIndex = items.indexOf(textContent);
    setItems(
      items.filter((item,index)=>(index!==deletedItemIndex?item:"")));  }

  return (
    <div>
      <WavyContainer />
      <div className="container">

        <Header text="React.JS To do App" />
        <InputArea
          txtInputName="actionText"
          placeholder="Type your action here"
          onChange={handleTextChange}
          textValue={text}
          onClick={(e) => {
            const { value } = e.target;
            if (value === "Add") {
              handleAdd();
            }
          }}
          className="row justify-content-center m-1"
        />
        <ToDolist items={items} onItemClick={deleteItem} />
      </div>
    </div>
  );
}
