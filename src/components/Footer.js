import React from 'react';
import { NavLink } from 'react-router-dom';

export const Footer = (props) => {
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{props.active}</strong> items left
      </span>

      <ul className="filters">
        <li>
          <NavLink exact to="/" activeClassName="selected">All</NavLink>
        </li>
        <li>
          <NavLink to="/active" activeClassName="selected">Active</NavLink>
        </li>
        <li>
          <NavLink to="/completed" activeClassName="selected">Completed</NavLink>
        </li>
        {/* <li>
          <a href="#/" className={props.display === 'all' ? "selected" : ""} 
            onClick={() => props.setDisplayMode('all')}>All</a>
        </li>
        <li>
          <a href="#/active" className={props.display === 'active' ? "selected" : ""} 
            onClick={() => props.setDisplayMode('active')}>Active</a>
        </li>
        <li>
          <a href="#/completed" className={props.display === 'completed' ? "selected" : ""}  
            onClick={() => props.setDisplayMode('completed')}>Completed</a>
        </li> */}
      </ul>

      {
        props.completed
          ? (<button 
              className="clear-completed"
              onClick={props.removeCompletedItems}
            >Clear completed</button>)
          : null
      }
    </footer>
  );
}