import React, { PureComponent } from 'react';
import { Route, withRouter } from 'react-router-dom';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import TodoItem from '../containers/TodoItem';

class Main extends PureComponent {
  render() {
    return (
      <div className="main">

        {this.props.children}
        
        <ul className="todo-list">
          <Route exact path="/" render={(props) => (
            this.props.items.map((item, key) => <TodoItem item={item} key={key}/>)
          )}/>
          <Route path="/active" render={(props) => (
            this.props.items
            .filter((item) => !item.isCompleted)
            .map((item, key) => <TodoItem item={item} key={key}/>)
          )}/>
          <Route path="/completed" render={(props) => (
            this.props.items
            .filter((item) => item.isCompleted)
            .map((item, key) => <TodoItem item={item} key={key}/>)
          )}/>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  items: state.items,
  display: state.display,
  active: state.active,
  completed: state.completed
});

// const mapDispatchToProps = (dispatch) => bindActionCreators({
//   makeItemActive,
//   makeItemCompleted,
// }, dispatch);

export default withRouter(connect(mapStateToProps)(Main));