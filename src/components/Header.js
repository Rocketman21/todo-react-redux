import React, { PureComponent } from 'react';

export class Header extends PureComponent {
  onInputKeyDown(event) {
    const text = event.target.value.trim();

    if (event.keyCode !== 13 || !text.length) return;

    this.props.addItem(text);
    event.target.value = '';
  }

  swithInputPriority() {
    let result = '';

    switch(this.props.inputPriority) {
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

    this.props.setInputPriority(result);
  }

  render() {
    return (
      <div>
        <header className="todo-header">
          <h1>TODO-REACT-REDUX</h1>
        </header>
        <div className="input-wrapper todo-shadow">
          <input 
            className="todo-input" 
            placeholder="What needs to be done?" 
            onKeyDown={(event) => this.onInputKeyDown(event)} 
          />
          <div 
            className={'selector-' + this.props.inputPriority}
            onClick={() => this.swithInputPriority()}
          ></div>
        </div>
      </div>
    );
  }
}