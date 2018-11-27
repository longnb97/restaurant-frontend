import React, { Component } from 'react';
import './App.css'
import { Route, Switch, BrowserRouter } from 'react-router-dom'

import axios from 'axios'
import axiosCheck from './networks/axiosCheck'

import Login from './Container/Login'
import Book from './Container/Book'
import SignUp from './Container/SignUp'
// import Detail from './Container/Detail'
import FoodMenu from './Container/FoodMenu';
import Contact from './Container/Contact';




class App extends Component {
  state = {};

  componentDidMount() {
    axios
      .get("http://localhost:5050/api/tables")
      .then(res => {
        // console.log(res)
        this.setState({
          tables: res.data
        })
        console.log(this.state)
      })
      .catch(err => console.error(err));

    axiosCheck.then(res => {
      if (res.data.user) {
        this.setState({
          username: res.data.user.username
        })
      }
    })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/menu" render={(props) => {
              return <FoodMenu
                username={this.state.username}
                {...props}
              />
            }} />
            <Route exact path='/' render={(props) => {
              return <Book
                // id={":id"}
                username={this.state.username}
                {...props}
                tables={this.state}
              />
            }} />
            {/* <Route exact path='/detail/:id' render={(props) => {
              return <Detail
                {...props}
                tables={this.state}
              />
            }} /> */}
            <Route path='/login' render={(props) => {
              return <Login

                {...props}
              />
            }} />
            <Route path='/signup' render={(props) => {
              return <SignUp
                {...props}

              />
            }} />
            <Route path='/contact' render={(props) => {
              return <Contact
                {...props}
              />
            }} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
