import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { 
  removeItem,
  makeItemActive,
  makeItemCompleted,
  putItemInEditing,
  removeItemFromEditing,
  setItemText
} from '../actions/listActions.js';

class TodoItem extends PureComponent {
  onItemToggle(event, id) {
    if (event.target.checked) {
      this.props.makeItemCompleted(id);
    } else {
      this.props.makeItemActive(id);
    }
  };

  getItemLiClassName(item) {
    let result = '';

    if (item.isCompleted) result += 'completed';
    if (item.isInEditing) result += 'editing';

    return result;
  }

  render() {
    return (
      <li className={this.getItemLiClassName(this.props.item)} 
        onDoubleClick={(event) => this.props.item.isCompleted ? null : this.props.putItemInEditing(this.props.item.id)}>

        <div className="view">

          <input 
            className="toggle" 
            type="checkbox" 
            checked={this.props.item.isCompleted}
            onChange={(event) => this.onItemToggle(event, this.props.item.id)}
          />

          <label>{this.props.item.text}</label>

          <button 
            className="destroy" 
            onClick={(event) => this.props.removeItem(this.props.item.id)}
          ></button>

        </div>

        {
          this.props.item.isInEditing
            ? (<input 
              className="edit" 
              value={this.props.item.text}
              autoFocus
              /* Следующая строка фиксит установку курсора в конец строки при фокусе */
              onFocus={(event) => event.target.setSelectionRange(event.target.value.length, event.target.value.length)}
              onChange={(event) => this.props.setItemText(this.props.item.id, event.target.value)}
              onBlur={(event) => this.props.removeItemFromEditing(this.props.item.id)}
              onKeyDown={(event) => event.keyCode === 13 ? this.props.removeItemFromEditing(this.props.item.id) : null} 
            />)
            : null
        }
      </li>
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
  removeItem,
  makeItemActive,
  makeItemCompleted,
  putItemInEditing,
  removeItemFromEditing,
  setItemText
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoItem);