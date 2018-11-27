import React, { Component } from 'react'

import axios from 'axios';
import { Container,Button } from 'reactstrap'

import NavBar from '../Components/NavBar'
import Table from '../Components/Table';
import CreateTable from '../Components/CreateTable';

import { API_ROOT } from '../statics'


export default class Book extends Component {
  state = {
    data: [],
    searchString: ''
  }

  componentDidMount() {
    axios
      .get(`${API_ROOT}/tables`)
      .then(res => {
        // console.log(res.data)
        this.setState({
          data: res.data.tableFound
        })
        console.log(res.data.tableFound)
      })
      .catch(err => console.log(err))

      // constructor(props){
      //   super(props);
      //   firebase.auth().onAuthStateChanged(user => {
      //     this.setState({ user: user });
      //   });
      // }

      
    //  axios
    //  .get(`http://localhost:5050/api/tables/${this.props.match.params.id}`)
    //  .then(res => {
    //    // console.log(res.data)
    //    this.setState({
    //      idArray: res.data.tableFound
    //    })
    //    console.log(res.data.tableFound)
    //  })
    //  .catch(err => console.log(err))

  }

  _handleTableStatusChange = (tableId, status) => {
    const { data } = this.state;
    let newData = data.map(table => {
      if(table._id === tableId) {
        if(status == "Unavailable") {
          return { ...table, status, owner: this.props.username }
        } else {
          return { ...table, status, owner: "" }
        }
      } else return table;
    });
    this.setState({ data: newData })
  }

  _onSearchChanged = text => this.setState({ searchString: text });

  render() {
    console.log(this.props)
    const displayTable = this.state.data
      .filter(table => table.status.includes(this.state.searchString) || table.owner.includes(this.state.searchString))
      .map(dataSent => <Table key={dataSent._id} dataRecived={dataSent} username={this.props.username} handleTableStatusChange={this._handleTableStatusChange} />)
    const createTableButton = this.props.username === "admin" ? <CreateTable /> : ""
    return (
      <div className='backround'>
        <NavBar onSearchChanged={this._onSearchChanged} />
        <div className="menufood">
          <Container>
            <div className="card-columns">
              {displayTable}
              
            </div>
            {createTableButton}
          </Container>
        </div>
      </div>
    );
  }
}