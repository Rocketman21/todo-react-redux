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

  getRelativePath(to) {
    const current = this.props.location.pathname;
    const splitedPath = current.split('/');
    splitedPath.push(to);

    return splitedPath.splice(splitedPath.length - 2, 2).join('/');
  }

  render () {
    return (
      <div className="todo-sidebar">
        <h6>status</h6>
        <p>{this.props.active} items left</p>
        <ul className="todo-menu">
          <li>
            <NavLink exact to="/" activeClassName="active">All</NavLink>
          </li>
          <li>
            <NavLink to="/active" activeClassName="active">Active</NavLink>
          </li>
          <li>
            <NavLink to="/completed" activeClassName="active">Completed</NavLink>
          </li>
        </ul>

        <h6>priorities</h6>
        <ul className="todo-menu">
          <li>
            <NavLink to={this.getRelativePath('regular')} activeClassName="active">
              <div className="priority regular"></div>
              regular
            </NavLink>
          </li>
          <li>
            <NavLink to={this.getRelativePath('important')} activeClassName="active">
              <div className="priority important"></div>
              important
            </NavLink>
          </li>
          <li>
            <NavLink to={this.getRelativePath('ultra')} activeClassName="active">
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