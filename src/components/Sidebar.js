import React, { PureComponent } from 'react';
import { NavLink, withRouter } from 'react-router-dom';

class Sidebar extends PureComponent {
  onItemToggleAll(event) {
    for (let item of this.props.items) {
      if (event.target.checked) {
        this.props.makeItemCompleted(item.id);
      } else {
        this.props.makeItemActive(item.id);
      }
    }
  }

  getStatusPath(to) {
    const current = this.props.location.pathname;
    const splitedPath = current.split('/');

    splitedPath[1] = to;
    return splitedPath.join('/');
  }

  getPriorityPath(to) {
    const current = this.props.location.pathname;
    const splitedPath = current.split('/');

    if (splitedPath[2] === to) {
      splitedPath.splice(2, 1);
    } else {
      splitedPath[2] = to;
    }

    return splitedPath.join('/');
  }

  render () {
    return (
      <div className="todo-sidebar">
        <h6>status</h6>
        <p>{this.props.active ? this.props.active + ' items left' : 'List completed!'}</p>
        <ul className="todo-menu">
          <li>
            <NavLink to={this.getStatusPath('all')} activeClassName="active">all</NavLink>
          </li>
          <li>
            <NavLink to={this.getStatusPath('active')} activeClassName="active">active</NavLink>
          </li>
          <li>
            <NavLink to={this.getStatusPath('completed')} activeClassName="active">completed</NavLink>
          </li>
        </ul>

        <h6>priorities</h6>
        <ul className="todo-menu">
          <li>
            <NavLink to={this.getPriorityPath('regular')} activeClassName="active">
              <div className="priority regular"></div>
              regular
            </NavLink>
          </li>
          <li>
            <NavLink to={this.getPriorityPath('important')} activeClassName="active">
              <div className="priority important"></div>
              important
            </NavLink>
          </li>
          <li>
            <NavLink to={this.getPriorityPath('ultra')} activeClassName="active">
              <div className="priority ultra"></div>
              ultra
            </NavLink>
          </li>
        </ul>

        <h6>items</h6>
        <ul className="todo-menu">
          <li>
            <input id="check" type="checkbox" onChange={(event) => this.onItemToggleAll(event)} />
            <label htmlFor="check"><a>toggle all</a></label>
          </li>
          {
            this.props.completed
              ? (<li onClick={this.props.removeCompletedItems}><a>clear completed</a></li>)
              : null
          }
        </ul>
      </div>
    );
  }
}

export default withRouter(Sidebar);