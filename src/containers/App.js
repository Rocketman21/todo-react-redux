import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import '../assets/App.css';

import { Header } from '../components/Header.js';
import { Main } from '../components/Main.js';
import { Footer } from '../components/Footer.js';

import {
  addItem,
  removeCompletedItems,
  setDisplayMode
} from '../actions/listActions.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <section className="todoapp">
          <Header addItem={this.props.addItem}/>
          <Main 
            items={this.props.items}
            display={this.props.display}
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

const mapStateToProps = (state) => ({
  items: state.items,
  display: state.display,
  active: state.active,
  completed: state.completed
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  addItem,
  removeCompletedItems,
  setDisplayMode
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
