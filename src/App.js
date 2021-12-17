
///////////todo list ATTEMPT 2/////////////////
import { useState } from "react";
import './App.css';
const App = () => {
  const [todoList, setTodoList] = useState([]);
  const [userInput, setUserInput] = useState("");


  const updateInput = (e) => { //onChange of inputbox, 
    setUserInput(e.target.value); //make userInput = input of box
  };

  const addHandler = (e) => { //onClick of add button
    const newArr = [...todoList]; //Adds every task in {todoList} to newArr.
    newArr.push(userInput); //add userInput of textbox to newArr (adds new task to list)
    setTodoList(newArr); //sets todoList to newArray (updates frontEnd todoList with new list.)
    setUserInput("") //remove input displayed below inputBox. (seems as though nothing has changed, but the text displayed is now the content of the array, not the userInput.)
  };

  const removeHandler = (index) => { //remove task from list
    const newArr = [...todoList]; //add every task in toDo list to newArr (makes an identical copy)
    newArr.splice(index, 1); //remove task from array
    setTodoList(newArr); //updates frontend array with new version
  };

  return (
    <div>
      <div id="inputs">
        <input 
          type="text" 
          onChange={updateInput}
        />
        <button 
          id="addButton"
          onClick={addHandler}>
            add
        </button>
        <p>Click on the below buttons to remove tasks or change status</p>
      </div>
      {todoList.map((item, index) => {
        return <Card 
          index={index} 
          removeHandler={removeHandler} 
          key={index} 
          item={item} 
        />;
      })}
    </div>
  );
};

const Card = (props) => {
  const [style, setStyle] = useState("inProgressButton button")
  const [status, setStatus] = useState("In Progress")

  const changeStyle = () => {
    console.log("you just clicked");
    if (status=="Complete") {
      setStatus("In Progress");
      setStyle("inProgressButton button")
    } else {
      setStatus("Complete");
      setStyle("completeButton button")
    }
  };
  
  return (
      <div className="item">
        <h2 className="task">{props.item}</h2>
        <div className="test">
          <div 
            className={style}
            onClick={() => changeStyle("Complete")}>
            <p>
              {status}
            </p>
          </div>
          <div 
            className="remButton button"
            onClick={() => props.removeHandler(props.index)}>
            <p>
              remove
            </p>
          </div>
        </div>
    </div>
  );
  };

export default App;
