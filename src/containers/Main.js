import React, { PureComponent } from 'react';
import { Route, withRouter, Redirect } from 'react-router-dom';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import TodoItem from '../containers/TodoItem';

class Main extends PureComponent {
  constructor(props) {
    super();
    this.props = props;

    this.itemsToRender = [];
  }

  withCurrentStatus(path) {
    const current = this.props.location.pathname;
    const splitedPath = current.split('/');

    splitedPath[2] = path;
    return splitedPath.join('/');
  }

  filterStatus(items) {
    switch (this.props.location.pathname.split('/')[1]) {
      case 'all':
        return items;
      case 'active':
        return items.filter((item) => !item.isCompleted);
      case 'completed':
        return items.filter((item) => item.isCompleted);
      default:
    }
  }

  render() {
    this.itemsToRender = this.props.items;

    return (
      <div className="main">
        <Redirect from="/" to="/all" />

        {this.props.children}
        
        <ul className="todo-list">
          <Route exact path="/all" render={((props) => 
            this.props.items.map((item, key) => <TodoItem item={item} key={key}/>)
          )}/>
          <Route exact path="/active" render={(props) => (
            this.filterStatus(this.props.items).map((item, key) => <TodoItem item={item} key={key}/>)
          )}/>
          <Route exact path="/completed" render={(props) => (
            this.filterStatus(this.props.items).map((item, key) => <TodoItem item={item} key={key}/>)
          )}/>

          <Route path={this.withCurrentStatus('regular')} render={(props) => (
            this.filterStatus(this.props.items)
            .filter((item) => item.priority === 'regular')
            .map((item, key) => <TodoItem item={item} key={key}/>)
          )}/>
          <Route path={this.withCurrentStatus('important')} render={(props) => (
            this.filterStatus(this.props.items)
            .filter((item) => item.priority === 'important')
            .map((item, key) => <TodoItem item={item} key={key}/>)
          )}/>
          <Route path={this.withCurrentStatus('ultra')} render={(props) => (
            this.filterStatus(this.props.items)
            .filter((item) => item.priority === 'ultra')
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