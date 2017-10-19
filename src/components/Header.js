import React from 'react';

export const Header = (props) => {
  const onInputKeyDown = (event) => {
    const text = event.target.value.trim();

    if (event.keyCode !== 13 || !text.length) return;

    props.addItem(text);
    event.target.value = '';
  }

  return (
    <div>
      <header className="todo-header">
        <h1>TODO-REACT-REDUX</h1>
      </header>
      <div className="input-wrapper todo-shadow">
        <input 
          className="todo-input" 
          placeholder="What needs to be done?" 
          onKeyDown={(event) => onInputKeyDown(event)} 
        />
        <div className="selector-regular"></div>
      </div>
    </div>
  );
}