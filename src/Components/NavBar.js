import React, { Component } from 'react'

import { Link } from 'react-router-dom'
import axiosCheck from '../networks/axiosCheck'

import ProfilePanel from './ProfilePanel';
import SearchField from './SearchField';

export default class NavBar extends Component {

    state = {}
    componentDidMount() {
        axiosCheck.then(res => {
            console.log(res.data)
            if (res.data.user) {
                this.setState({
                    username: res.data.user.username
                })
            }
        })
            .catch(err => console.log(err))
    }

    _onSearchChanged = text => this.setState({ searchString: text });

    render() {
        return (
            <div>
                <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light navbar navbar-dark bg-dark">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to='/' >Trang chủ <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/menu'>Menu</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/contact'><a className="nav-link" >Liên hệ</a></Link>
                            </li>
                        </ul>
                        <SearchField   onSearchChanged={this.props.onSearchChanged} />
                        <ProfilePanel  username={this.state.username} />
                    </div>
                </nav>
            </div>
        )
    }
}
