import React, { Component } from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

 export class App extends Component {

  render() {

    return (
      <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
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