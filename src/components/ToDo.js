import React, { useState } from "react";
import ToDoBase from "./ToDoBase";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";

function ToDo ({toDos, doneToDo, deleteToDo, updateToDo}) {
    const [edit, setEdit] = useState({
        id: null,
        value: "",
    });

    const onClickUpdate = value => {
        updateToDo(edit.id, value)
        setEdit({
            id: null,
            value: ""
        })
    }

    if (edit.id) {
        return <ToDoBase edit={edit} onClick={onClickUpdate} />;
    }

    return toDos.map((toDo, index) => (
        <div
            className={toDo.isComplete ? "todo-item done" : "todo-item"}
            key={index} > 
            <div key={toDo.id} onClick={() => doneToDo(toDo.id)}>
                {toDo.text}
            </div>
            <div className="icons">
                <TiEdit
                    onClick={() => setEdit({ id: toDo.id, value: toDo.text })}
                    className="edit-icon" />
                <RiCloseCircleLine
                    onClick={() => deleteToDo(toDo.id)}
                    className="delete-icon" />
            </div>
        </div>
    ));
}

export default ToDo;