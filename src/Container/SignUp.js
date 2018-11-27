import React, { Component } from 'react'
import { Container, Form, FormGroup, Input, Button, Label,Row } from 'reactstrap'
import axios from 'axios'

import { Link } from 'react-router-dom'
import NavBar from '../Components/NavBar';

export default class SignUp extends Component {
    state = {};

    _getAccount = (e) => {
        let name = e.target.name;
        let value = e.target.value
        this.setState({
            [name]: value
        })
    }

    _onSignup = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:5050/api/users", {
                username: this.state.username,
                password: this.state.password,
                email: this.state.email,
                avatarUrl: this.state.avatarUrl
            }, {
                    validateStatus: (status) => {
                        return status >= 200 && status < 500
                    }
                }
            )
            .then(response => {
                console.log(response.data.success === 1)
                this.setState({ data: response.data })
                console.log("1");

                // console.log(this.props)
                if (response.data.success === 1) {
                    this.props.history.push("/")
                }
                else {
                    alert("SAI TAI KHOAN")
                }
            }
            )
            .catch(err => console.error(err))
    }
    render() {


        return (
            <Container>
                <br/><br/><br/><br/><br/><br/>
                    <Row><Container className="border">
                        <Form onSubmit={this._onSignup}>
                            <FormGroup>
                                <h3>Tạo tài khoản</h3>
                            </FormGroup>
                            <FormGroup>
                                <Label>Tên đăng nhập</Label>
                                <Input onChange={this._getAccount} name='username' type='text' placeholder='Tên đăng nhập...' />
                            </FormGroup>
                            <FormGroup>
                                <Label>Mật khẩu</Label>
                                <Input onChange={this._getAccount} name='password' type='password' placeholder='Mật khẩu...' />
                            </FormGroup>
                            <FormGroup>
                                <Label>Email</Label>
                                <Input onChange={this._getAccount} name='email' type='text' placeholder='example@abc.com' />
                            </FormGroup>
                            <FormGroup>
                                <Label>Link ảnh đại diện</Label>
                                <Input onChange={this._getAccount} name='avatarUrl' type='text' placeholder='link ảnh...' />
                            </FormGroup>
                            <FormGroup>
                                <Link to='/login'><Button type='submit' color='primary'>Đăng Kí</Button></Link>{'  '}
                                <Link to='/'><Button type='submit' color='danger'>Hủy</Button></Link>
                            </FormGroup>
                        </Form>
                    </Container></Row>
            </Container>
        )
    }
}