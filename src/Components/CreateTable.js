import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Container } from 'reactstrap';

import axiosCheck from '../networks/axiosCheck'
import axios from 'axios'

import { API_ROOT } from '../statics/index'

import { Link } from 'react-router-dom'


export default class CreateTable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    _authCheck = () => {
        axiosCheck
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    }

    _getTable = (e) => {
        let name = e.target.name;
        let value = e.target.value
        this.setState({
            [name]: value
        })

    }

    _addTable = (e) => {
        e.preventDefault();
        axios
            .post(`${API_ROOT}/tables`, {
                status: this.state.status,
                tableNumber: this.state.tableNumber,
                url: this.state.url,
                chairNumber: this.state.chairNumber
            }, {
                    validateStatus: (status) => {
                        return status >= 200 && status < 500
                    }
                }
            )
            .then(response => {
                console.log(response)
                if (response.data.success === 1) {

                    alert("Table created ")
                    window.location.href= '/'
                }
                else {
                    alert("loi ")
                }
            }
            )
            .catch(err => console.error(err))
    }

    render() {

        return (
            <div>
                <Container>
                    <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}Them ban</Button>
                    <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                        <ModalHeader toggle={this.toggle}><h3>New table</h3></ModalHeader>
                        <ModalBody>
                            <Form onSubmit={this._addTable} >
                                <FormGroup>
                                    <h5>Bàn số</h5><Input onChange={this._getTable} name='tableNumber' placeholder='Bàn số...' />
                                </FormGroup>
                                <FormGroup>
                                    <h5>Số ghế</h5><Input onChange={this._getTable} name='chairNumber' type='text' placeholder='CSố ghế...' />
                                </FormGroup>
                                {/* <FormGroup>
                                    <h5>Image Url</h5><Input onChange={this._getTable} name='url' type='text' placeholder='link ảnh...' />
                                </FormGroup> */}
                                {/* <FormGroup>
                                    <h5>Status</h5><Input onChange={this._getTable} name='status' type='text' placeholder='Status..' />
                                </FormGroup> */}
                                <FormGroup className="text-right">
                                    <Button type='submit'>Tạo bàn</Button>{' '}
                                    <Button color="secondary" onClick={this.toggle}>Hủy</Button>
                                </FormGroup>
                            </Form>
                        </ModalBody>
                        {/* <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '} */}

                    </Modal>
                    {/* <Button onClick={this._authCheck}>Test Session</Button> */}
                </Container>
            </div>
        );
    }
}

