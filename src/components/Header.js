import React from 'react';

export const Header = (props) => {
  const onInputKeyDown = (event) => {
    const text = event.target.value.trim();

    if (event.keyCode !== 13 || !text.length) return;

    props.addItem(text);
    event.target.value = '';
  }

  return (
    <header className="header">
      <h1>todos</h1>
      <input 
        className="new-todo" 
        placeholder="What needs to be done?" 
        onKeyDown={(event) => onInputKeyDown(event)} 
      />
    </header>
  );
}