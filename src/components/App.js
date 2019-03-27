import React, { Component } from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import store from '../store'

 export class App extends Component {

  render() {

    return (
      <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
        <button
        onClick = {
          // const { counter } = this.state;
          () => {
            this.setState({ counter: !this.state.counter  });
            const tab = store.getState();
            console.log(tab);
          }
        }
        >click me</button>
      </div>
    );
  }

  componentWillUnmount(){
    console.log("component will unmount.....");
  }

  componentWillMount(){
    console.log("component will mount.....");
  }

  componentDidMount(){
    console.log("component did mount.....");
  }
}

// export default App
//