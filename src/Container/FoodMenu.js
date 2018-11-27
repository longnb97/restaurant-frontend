import React, { Component } from 'react';
import axios from 'axios'
import { API_ROOT, } from '../statics';
import FoodMenuContent from '../Components/FoodMenuContent';
import { Container } from 'reactstrap'


import axiosCheck from '../networks/axiosCheck'
import NavBar from '../Components/NavBar';



export default class FoodMenu extends Component {
    state = {
        data: [],
        searchString: ''
    }

    componentDidMount() {
        axios
            .get(`${API_ROOT}/menu/`)
            .then(res => {
                console.log(res.data.menuFound)
                this.setState({
                    data: res.data.menuFound
                })
            })
            .catch(err => console.log(err))

        axiosCheck.then(res => console.log(res.data))
            .catch(err => console.log(err))


    }

    _onSearchChanged = text => this.setState({ searchString: text });

    render() {
        const allFood = this.state.data
            .filter(food => food.name.includes(this.state.searchString))
            .map((dataSent => <FoodMenuContent key={dataSent._id} dataRecived={dataSent} />))
        return (
            <div className='backround'>
                <NavBar onSearchChanged={this._onSearchChanged}/>
                <div className="menufood">
                    <Container>
                        <div className="card-columns">
                            {allFood}
                        </div>
                    </Container>
                </div>
            </div>
        );
    }
}
