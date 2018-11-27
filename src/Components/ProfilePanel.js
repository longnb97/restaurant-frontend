import React, { Component} from 'react';

import { Button } from 'reactstrap'
 
import {Link} from 'react-router-dom'

import { logout } from '../networks/axiosLogOut'


export default class ProfilePanel extends Component {

    // state = {}
    // componentDidMount() {
    //     axiosCheck.then(res => {
    //         if (res.data.user) {
    //             this.setState({
    //                 username: res.data.user.username
    //             })
    //         }
    //     })
    //         .catch(err => console.log(err))
    // }
    _handleLogOut = () =>{
        logout().then(res=>{
            console.log(res.data)
        })
        .catch(err => console.log(err))
    }
    render() {
        const display = this.props.username ? (
            <div>
                <span className="navbar-text text-warning mx-auto">Xin chào, {this.props.username}&nbsp;&nbsp;&nbsp;</span>
                <Button onClick={this._handleLogOut} href='/'> Đăng xuất </Button>
            </div>
        ) : (
                <div>
                    <form className="form-inline my-2 my-lg-0">
                        <Link to='/signup'><Button color='danger'>Đăng kí</Button></Link>
                        <Link to='/login'><Button color='success' >Đăng nhập</Button></Link>
                    </form>
                </div >
            );

        return <div className="col-3 profile-panel text-right">
            {display}
        </div>
    }
}



