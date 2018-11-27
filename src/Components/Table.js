import React, { Component } from 'react'
import { Button, } from 'reactstrap'
import axios from "axios";
import { API_ROOT } from '../statics/index'

import { Link } from 'react-router-dom'

import { getTableByNumber } from '../networks/axiosGetTableByNumber'

import { getAllTable } from '../networks/axiosGetAllTable'

const table = {
    width: '15rem',
}

export default class Table extends Component {
    state = {
        data: [],
    }
    // _showButtonName = (e) => {

    //     console.log()

    // }

    //function Dat ban
    _handleTableStatusU = (e) => {
        const tableNumber = e.target.name
        const thisOwner = this.props.username
        console.log(thisOwner)
        const table = this.props.dataRecived;

        this.props.handleTableStatusChange(table._id, "Unavailable");
        getTableByNumber(tableNumber)
            .then(res => {
                console.log(res.data.tableFound.status)
                if (res.data.tableFound.status !== "Unavailable" || res.data.tableFound.owner === "") {
                    axios.defaults.withCredentials = true;
                    axios.put(`${API_ROOT}/tables/tablenumber/${tableNumber}`, {
                        status: "Unavailable",
                        owner: thisOwner
                    })
                        .then(res => {
                            console.log(res)
                            alert("Đặt bàn thành công")
                        })
                        .catch(err => console.log(err))
                }
                // else if (res.data.tableFound.status == "Unavailable" && res.data.tableFound.owner === thisOwner)
                //     alert("Bạn đã đặt bàn này")
                // else alert("Bàn đã được đặt, không thể đặt bàn")
            })
            .catch(err => console.log(err))



    }


    // _handleDisabledButton = (e) => {
    //     getTableByNumber(tableNumer)
    //         .then(res => {
    // //             console.log(res)
    //             if (res.data.tableFound.owner !== thisOwner) {
    //                 this.setState({
    //                     btnStatus: true//Disable button
    //                 })

    //             } else {
    //                 this.setState({
    //                     btnStatus: false//Enable button
    //                 })
    //             }
    //         })
    //         .catch(err => console.log(err))
    // }


    //Function huy dat ban
    _handleTableStatusA = (e) => {
        const tableNumber = e.target.name
        const thisOwner = this.props.username
        const table = this.props.dataRecived;

        this.props.handleTableStatusChange(table._id, "Available");
        getTableByNumber(tableNumber)
            .then(res => {
                // console.log(res.data.tableFound.owner)
                if (thisOwner === res.data.tableFound.owner) {
                    axios.defaults.withCredentials = true;
                    axios.put(`${API_ROOT}/tables/tablenumber/${tableNumber}`, {
                        status: "Available",
                        owner: " "
                    })
                        .then(res => {
                            // console.log(res)
                            alert('Hủy bàn thành công')
                        })
                    // .catch(err => console.log(err))
                }
                // else alert('Bạn không thể hủy bàn mà bạn không đặt')
            })
        // .catch(err => console.log(err))


    }

    //

    componentDidMount() {
        const tableNumber = this.props.dataRecived.tableNumber
        // console.log(tableNumber)
        const thisOwner = this.props.username
        getTableByNumber(tableNumber)
            .then(res => {
                console.log(res.data)

                if (res.data.tableFound.owner !== thisOwner) {
                    this.setState({
                        btnStatus: true//Disable button
                    })

                } else {
                    this.setState({
                        btnStatus: false//Enable button
                    })
                }
            })
            .catch(err => console.log(err))
    }

    render() {
        const display = this.props.username ? (
            <div class="card text-white bg-dark mb-3" >

                <h4 className="card-text">Bàn {this.props.dataRecived.tableNumber}</h4>

                {/* <img className="card-img-top" src={this.props.dataRecived.url} alt="" /> */}
                <div className="card-body">
                    <ul className="list-group list-group-flush">
                        <p className="card-text">Số ghế : {this.props.dataRecived.chairNumber}</p>
                        <p className="card-text">Trạng thái : {this.props.dataRecived.status}</p>
                    </ul>
                    <div className="offset-2 text-center row">
                        <Button disabled={this.props.dataRecived.status == "Unavailable"} color='success' name={this.props.dataRecived.tableNumber} onClick={this._handleTableStatusU} >Đặt bàn</Button>
                        <Button disabled={!(this.props.dataRecived.owner == this.props.username)} color='danger' name={this.props.dataRecived.tableNumber} onClick={this._handleTableStatusA} >Hủy bàn</Button>
                        {/* <Button  name={this.props.dataRecived.tableNumber}></Button> */}
                    </div>
                </div>
                <div class="card-footer text-muted">
                    ...
                </div>

            </div >
        ) : (
                < div class="card text-white bg-dark mb-3">
                    <h4 className="card-text">Bàn {this.props.dataRecived.tableNumber}</h4>
                    <div className="card-body">
                        <ul className="list-group list-group-flush">
                            <p className="card-text">Số ghế : {this.props.dataRecived.chairNumber}</p>
                            <p className="card-text">Trạng thái : {this.props.dataRecived.status}</p>
                        </ul>
                        {/* <Input name="â" type='text ' onChange={this._handleTableStatus} placeholder='sdsds' /> */}
                    </div>
                    <div className="offset-4 text-center row">
                        <Link to='/login'><Button color='success'  >Đặt bàn</Button></Link>
                        {/* <Button color='danger' name={this.props.dataRecived.tableNumber} onClick={this._handleTableStatusA} >Hủy bàn</Button> */}
                    </div>
                    <div class="card-footer text-muted">
                    ...
                </div>
                </div >
            )
        return (
            <div>
                {display}
            </div>
        );
    }
}
