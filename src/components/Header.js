import React from 'react';

export const Header = (props) => {
  const onInputKeyDown = (event) => {
    const text = event.target.value.trim();

    if (event.keyCode !== 13 || !text.length) return;

    props.addItem(text);
    event.target.value = '';
  }

  const swithInputPriority = () => {
    let result = '';

    switch(props.inputPriority) {
      case 'regular':
        result = 'important';
        break;
      case 'important':
        result = 'ultra';
        break;
      case 'ultra':
        result = 'regular';
        break;
      default:
    }

    props.setInputPriority(result);
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
        <div 
          className={'selector-' + props.inputPriority}
          onClick={swithInputPriority}
        ></div>
      </div>
    </div>
  );
}