import React, { useState } from "react";
import ToDoBase from "./ToDoBase";
import ToDo from "./ToDo";
import './ToDo.css';

function ToDoList() {
    const [toDos, setToDos] = useState([]); // handle to do items, update state

    const addToDo = (toDo) => {
        try {
            if (!toDo.text || /^\s*$/.test(toDo.text)) {
                return;
            }

            const freshToDos = [toDo, ...toDos];
            setToDos(freshToDos);
        }
        catch (error) {
            console.log("Error creating ToDo: " + error)
        }
    }

    const doneToDo = (id) => {
        try{
            const updatedTodos = toDos.map((toDo) => {
                if (toDo.id === id) {
                    toDo.isComplete = !toDo.isComplete;
                }
                return toDo;
            });
            setToDos(updatedTodos);
        }
        catch (error) {
            console.log("Error completing ToDo: " + error)
        }
    };

    const deleteToDo = (id) => {
        try {
            const deletedArr = [...toDos].filter((toDo) => toDo.id !== id);
            setToDos(deletedArr);
        }
        catch (error) {
            console.log("Error deleting ToDo: " + error)
        }
    };

    const updateToDo = (toDoId, newValue) => {
        try {
            if (!newValue.text || /^\s*$/.test(newValue.text)) {
                return;
            }
          
            setToDos((prev) =>
                prev.map((item) => (item.id === toDoId ? newValue : item))
            );
        }
        catch (error) {
            console.log("Error updating ToDo: " + error)
        }
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