import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import '../assets/App.css';

import { Header } from '../components/Header';
import Main from './Main';
import Sidebar from '../components/Sidebar';

import {
  addItem,
  removeCompletedItems,
  setInputPriority,
  makeItemActive, 
  makeItemCompleted
} from '../actions/listActions.js';

class App extends PureComponent {
  render() {
    return (
      <div className="App">
        <div className="todo-app">
          <Header 
            inputPriority={this.props.inputPriority}

            addItem={this.props.addItem} 
            setInputPriority={this.props.setInputPriority}
          />
          <Main items={this.props.items} display={this.props.display}>
            {
              this.props.items.length 
                ? <Sidebar
                    items={this.props.items}
                    display={this.props.display}
                    active={this.props.active}
                    completed={this.props.completed}
                    removeCompletedItems={this.props.removeCompletedItems}
                    makeItemActive={this.props.makeItemActive}
                    makeItemCompleted={this.props.makeItemCompleted}
                  /> 
                : null
            }
          </Main>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  items: state.items,
  inputPriority: state.inputPriority,
  active: state.active,
  completed: state.completed
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  addItem,
  removeCompletedItems,
  setInputPriority,
  makeItemActive,
  makeItemCompleted
}, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
