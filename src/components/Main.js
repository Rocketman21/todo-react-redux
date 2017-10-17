import React, { PureComponent } from 'react';
import TodoItem from '../containers/TodoItem';

export class Main extends PureComponent {
  itemsToRender() {
    switch (this.props.display) {
      case 'active':
        return this.props.items.filter((item) => !item.isCompleted);
      case 'completed':
        return this.props.items.filter((item) => item.isCompleted);
      default:
        return this.props.items;
    }
  }

  render() {
    return (
      <section className="main">
        {
          this.props.items.length
            ? (<input 
                className="toggle-all" 
                type="checkbox" 
                onChange={(event) => this.onItemToggleAll(event)}
              />)
            : null
        }
        <ul className="todo-list">
          { this.itemsToRender().map((item, key) => <TodoItem item={item} key={key}/>) }
        </ul>
      </section>
    );
  }
}