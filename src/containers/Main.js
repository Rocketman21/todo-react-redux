import React, { PureComponent } from 'react';
import { Route, withRouter, Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import getVisibleItems from '../selectors/itemSelector';
import { setVisibilityByStatus, setVisibilityByPriority } from '../actions/listActions.js';

class Main extends PureComponent {
  withCurrentStatus(path) {
    const current = this.props.location.pathname;
    const splitedPath = current.split('/');

    splitedPath[2] = path;

    return splitedPath.join('/');
  }

  filterStatus(items) {
    switch (this.getCurrentStatus()) {
      case 'all':
        return items;
      case 'active':
        return items.filter((item) => !item.isCompleted);
      case 'completed':
        return items.filter((item) => item.isCompleted);
      default:
    }
  }

  getCurrentStatus() { return this.props.location.pathname.split('/')[1]; }

  render() {
    return (
      <div className="main">
        {<Redirect from="/" to="/all" />}

        {this.props.children}
        
        <ul className="todo-list">
          <Route exact path="/all" render={() => {
            this.props.setVisibilityByStatus('all');
            this.props.setVisibilityByPriority('all');
            return this.props.items;
          }}/>
          <Route exact path="/active" render={() => {
            this.props.setVisibilityByStatus('active');
            this.props.setVisibilityByPriority('all');
            return this.props.items;
          }}/>
          <Route exact path="/completed" render={() => {
            this.props.setVisibilityByStatus('completed');
            this.props.setVisibilityByPriority('all');
            return this.props.items;
          }}/>

          <Route path={this.withCurrentStatus('regular')} render={() => {
            this.props.setVisibilityByStatus(this.getCurrentStatus());
            this.props.setVisibilityByPriority('regular');
            return this.props.items;
          }}/>
          <Route path={this.withCurrentStatus('important')} render={() => {
            this.props.setVisibilityByStatus(this.getCurrentStatus());
            this.props.setVisibilityByPriority('important');
            return this.props.items;
          }}/>
          <Route path={this.withCurrentStatus('ultra')} render={() => {
            this.props.setVisibilityByStatus(this.getCurrentStatus());
            this.props.setVisibilityByPriority('ultra');
            return this.props.items;
          }}/>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  items: getVisibleItems(state)
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  setVisibilityByStatus,
  setVisibilityByPriority
}, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));