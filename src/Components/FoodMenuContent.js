import React, { Component } from 'react';
import { Button } from 'reactstrap'

export default class FoodMenuContent extends Component {
    render() {
        return (
            <div className="card text-white bg-dark mb-3">
                <img className="card-img-top" alt="img" src={this.props.dataRecived.imageUrl}  />
                <div className="card-body">
                    <h5 className="card-title">Món: {this.props.dataRecived.name}</h5>
                    <h5 className="card-title">Giá : {this.props.dataRecived.price}</h5>
                </div>
                <div className="col-2 offset-4 text-center">
                    {/* <Button color='success' >Mua Hàng</Button> */}
                </div>
            </div>
        );
    }
}