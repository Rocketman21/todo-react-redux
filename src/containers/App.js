import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../assets/App.css';

import { Header } from '../components/Header.js';
import { Main } from '../components/Main.js';
import { Footer } from '../components/Footer.js';

import * as listActions from '../actions/listActions.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <section className="todoapp">
          <Header addItem={this.props.addItem}/>
          <Main 
            items={this.props.items}
            display={this.props.display}

            removeItem={this.props.removeItem}
            makeItemActive={this.props.makeItemActive}
            makeItemCompleted={this.props.makeItemCompleted}
            putItemInEditing={this.props.putItemInEditing}
            removeItemFromEditing={this.props.removeItemFromEditing}
            setItemText={this.props.setItemText}
          />
          {
            this.props.items.length 
              ? <Footer
                  display={this.props.display}
                  active={this.props.active}
                  completed={this.props.completed}

                  removeCompletedItems={this.props.removeCompletedItems}
                  setDisplayMode={this.props.setDisplayMode}
                /> 
              : null
          }
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.items,
    display: state.display,
    active: state.active,
    completed: state.completed
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (text) => {
      dispatch(listActions.addItem(text));
    },
    removeItem: (id) => {
      dispatch(listActions.removeItem(id));
    },
    makeItemActive: (id) => {
      dispatch(listActions.makeItemActive(id));
    },
    makeItemCompleted: (id) => {
      dispatch(listActions.makeItemCompleted(id));
    },
    putItemInEditing: (id) => {
      dispatch(listActions.putItemInEditing(id));
    },
    removeItemFromEditing: (id) => {
      dispatch(listActions.removeItemFromEditing(id));
    },
    setItemText: (id, text) => {
      dispatch(listActions.setItemText(id, text));
    },
    removeCompletedItems: () => {
      dispatch(listActions.removeCompletedItems());
    },
    setDisplayMode: (mode) => {
      dispatch(listActions.setDisplayMode(mode));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
