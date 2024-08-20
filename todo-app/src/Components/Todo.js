import React, { useState } from "react";
const Todo = () => {
  const [inputData, setInputData] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [editTodoValue, setEditTodoValue] = useState("");
  const [editTodoIndex, setEditTodoIndex] = useState(-1);

  //   Add list
  const addTodo = () => {
    if (inputData != "") {
      setTodoList([...todoList, inputData]);
      setInputData("");
    } else {
      alert("Please Enter any Todo..");
    }
  };

  // Del list
  const delTodo = (id) => {
    // console.log(id);
    const updatedTodoList = todoList.filter((ele, ind) => {
      return ind != id;
    });

    setTodoList(updatedTodoList);
  };

  // Edit Todo List
  const editTodoList = (id) => {
    setEditTodoValue(todoList[id]);
    setEditTodoIndex(id);
  };

  // Update
  const updateTodoList = () => {
    if(editTodoValue != ""){
    const editUpdate = todoList.map((ele, index) => {
      if (index === editTodoIndex) {
        return editTodoValue;
      }
      return ele;
    });
    setTodoList(editUpdate);
    setEditTodoIndex(-1);}
    else{
      alert("Please Enter any Todo..");
    }
  };

  return (
    <>
      <h1>Todo App</h1>

      <div>
        <input
          type="text"
          className="textField"
          placeholder="Enter Todo Notes Here..."
          onChange={(e) => setInputData(e.target.value)}
          value={inputData}
        ></input>
        <button className="addButton btn" onClick={addTodo}>
          Add
        </button>
      </div>
      <div className="todoList">
        {todoList.map((list, ind) => {
          return (
            <div key={ind}>
              {/* For Update  */}
              {editTodoIndex === ind ? (
                <>
                  <input
                    type="text"
                    className="textField"
                    onChange={(e) => setEditTodoValue(e.target.value)}
                    value={editTodoValue}
                  ></input>
                  <button className="updateButton btn" onClick={updateTodoList}>
                    Update
                  </button>
                  
                </>
              ) : (
                <>
                 <span>
                {ind + 1}. {list}
              </span>
              <div>
                <button className="delButton btn" onClick={() => delTodo(ind)}>
                  Delete
                </button>
                <button
                  className="delButton btn"
                  onClick={() => editTodoList(ind)}
                >
                  Edit
                </button>
              </div></>
              )}
              
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Todo;
