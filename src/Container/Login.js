import React, { Component } from 'react'
import { Container, Form, FormGroup, Input, Button } from 'reactstrap'
import axios from 'axios'

import { AUTH_ROOT } from '../statics/index'
// import NavBar from '../Components/NavBar';

import{Link} from 'react-router-dom'

export default class Login extends Component {
    state = {};

    _getAccount = (e) => {
        let name = e.target.name;
        let value = e.target.value
        this.setState({
            [name]: value
        })
    }

    _onLogin = (e) => {
        e.preventDefault();
        axios.defaults.withCredentials = true;
        axios
            .post(`${AUTH_ROOT}/login`, {
                username: this.state.username,
                password: this.state.password
            }, {
                    validateStatus: (status) => {
                        return status >= 200 && status < 500
                    }
                }
            )
            .then(response => {
                // console.log(response.data.success === 1)
                this.setState({ data: response.data })
                if (response.data.success === 1) {
                    // axiosCheck.then(res => console.log(res.data))
                    //     .catch(err => console.log(err))
                    //this.props.history.push("/")
                    window.location.href = "/"
                }
                else {
                    alert("SAI TAI KHOAN")
                }
            }
            )
            .catch(err => console.error(err))
    }
    render() {
        // console.log(this.props)
        return (
            <div className='Login'>          
                <Container>
                    <div className=' '>
                        <Form onSubmit={this._onLogin}>
                            <FormGroup>
                            <h3>Đăng nhập</h3>
                            </FormGroup>
                            <FormGroup>
                                <h4>Tên đăng nhập</h4><Input onChange={this._getAccount} name='username' type='text' placeholder='Tên đăng nhập...' />
                            </FormGroup>
                            <FormGroup>
                                <h4>Mật khẩu</h4><Input onChange={this._getAccount} name='password' type='password' placeholder='Mật khẩu...' />
                            </FormGroup>
                            <FormGroup >
                                <Button type='submit' color='primary' >Đăng nhập</Button>{' '}
                                <Link to='/'><Button type='submit' color='danger' >Hủy</Button></Link>
                            </FormGroup>
                        </Form>
                    </div>
                </Container>
            </div>
        )
    }
}