import React, { useState } from "react";
import ToDoBase from "./ToDoBase";
import ToDo from "./ToDo";
import './ToDo.css';

function ToDoList() {
    const [toDos, setToDos] = useState([]); // handle to do items, update state

    const addToDo = (toDo) => {
        // if (toDo.text) console.log("Adding todo: " + toDo.text)
        // else console.log("Empty todo...")
        if (!toDo.text || /^\s*$/.test(toDo.text)) {
            return;
        }

        const freshToDos = [toDo, ...toDos];
        setToDos(freshToDos);

        console.log("The current to do's:")
        Object.keys(freshToDos).map(text => console.log(freshToDos[text])) 
    }

    const doneToDo = (id) => {
        const updatedTodos = toDos.map((toDo) => {
          if (toDo.id === id) {
            toDo.isComplete = !toDo.isComplete;
          }
          return toDo;
        });
        setToDos(updatedTodos);
    };

    const deleteToDo = (id) => {
        const deletedArr = [...toDos].filter((toDo) => toDo.id !== id);
        setToDos(deletedArr);
    };

    const updateToDo = (toDoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
          return;
        }
    
        setToDos((prev) =>
            prev.map((item) => (item.id === toDoId ? newValue : item))
        );
    };

    return (
        <>
            <h1>What's on your to do list?</h1>
            <ToDoBase onClick={addToDo}/>
            <ToDo toDos={toDos}
                doneToDo={doneToDo}
                deleteToDo={deleteToDo}
                updateToDo={updateToDo} />
        </>
    )
}

export default ToDoList;