import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import '../assets/App.css';

import { Header } from '../components/Header.js';
import { Main } from '../components/Main.js';
import { Footer } from '../components/Footer.js';

import * as listActions from '../actions/listActions.js';

class App extends Component {
  render() {
    const { 
      addItem,
      removeItem,
      makeItemActive,
      makeItemCompleted,
      putItemInEditing,
      removeItemFromEditing,
      setItemText,
      removeCompletedItems,
      setDisplayMode
    } = bindActionCreators(listActions, this.props.dispatch);

    return (
      <div className="App">
        <section className="todoapp">
          <Header addItem={addItem}/>
          <Main 
            items={this.props.items}
            display={this.props.display}

            removeItem={removeItem}
            makeItemActive={makeItemActive}
            makeItemCompleted={makeItemCompleted}
            putItemInEditing={putItemInEditing}
            removeItemFromEditing={removeItemFromEditing}
            setItemText={setItemText}
          />
          {
            this.props.items.length 
              ? <Footer
                  display={this.props.display}
                  active={this.props.active}
                  completed={this.props.completed}

                  removeCompletedItems={removeCompletedItems}
                  setDisplayMode={setDisplayMode}
                /> 
              : null
          }
        </section>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    items: state.items,
    display: state.display,
    active: state.active,
    completed: state.completed
  })
)(App);
