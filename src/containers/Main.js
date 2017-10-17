import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { makeItemActive, makeItemCompleted } from '../actions/listActions.js';

import TodoItem from '../containers/TodoItem';

class Main extends PureComponent {
  onItemToggleAll(event) {
    for (let item of this.props.items) {
      if (event.target.checked) {
        this.props.makeItemCompleted(item.id);
      } else {
        this.props.makeItemActive(item.id);
      }
    }
  }

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

const mapStateToProps = (state) => ({
  items: state.items,
  display: state.display,
  active: state.active,
  completed: state.completed
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  makeItemActive,
  makeItemCompleted,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);