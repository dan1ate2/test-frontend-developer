import React, { useState } from "react";

function ToDoBase(props) {
    const toDoInput = React.createRef();
    const addButton = React.createRef();
    const [toDoValue, setInputVal] = useState(props.edit ? props.edit.value : '');
    
    const onClickHandler = () => {
        props.onClick ({
            id: Math.floor(Math.random() * 50000),
            text: toDoInput.current.value
        });
        setInputVal("");
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            onClickHandler()
        }
    }

    return (
        <div className='todo-base'>
            <input 
                ref={toDoInput} 
                type="text"
                value={toDoValue} 
                onChange={(e) => setInputVal(e.target.value)} 
                onKeyDown={handleKeyPress}
                className={props.edit ? "todo-input edit" : "todo-input"} />
            <button 
                ref={addButton} 
                type="button"
                onClick={onClickHandler}
                className={props.edit ? "todo-button edit" : "todo-button"} >
                {props.edit ? "Edit" : "Add"}
            </button>
        </div>
    )
}

export default ToDoBase;