import React from 'react';

export const Footer = (props) => {
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{props.active}</strong> items left
      </span>

      <ul className="filters">
        <li>
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
        </li>
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