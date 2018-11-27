import React, { Component } from 'react';
import NavBar from '../Components/NavBar';

export default class Contact extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <div class="container"><br/><br/><br/><br/><br/><br/><br/>
                    <h3 class="text-center text-uppercase">Liên hệ</h3>
                    <p class="text-center w-75 m-auto"></p>
                    <div class="row">
                        <div class="col-sm-12 col-md-6 col-lg-3 my-5">
                            <div class="card border-0">
                                <div class="card-body text-center">
                                    <i class="fa fa-phone fa-5x mb-3" aria-hidden="true"></i>
                                    <h4 class="text-uppercase mb-5">Hotline</h4>
                                    <p>+84102221033 hoặc +343242342</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-6 col-lg-3 my-5">
                            <div class="card border-0">
                                <div class="card-body text-center">
                                    <i class="fa fa-map-marker fa-5x mb-3" aria-hidden="true"></i>
                                    <h4 class="text-uppercase mb-5">Trụ sở 1</h4>
                                    <address>Techkids Thành Công, Hoàn Kiếm, Hà Nội,</address>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-6 col-lg-3 my-5">
                            <div class="card border-0">
                                <div class="card-body text-center">
                                    <i class="fa fa-map-marker fa-5x mb-3" aria-hidden="true"></i>
                                    <h4 class="text-uppercase mb-5">Nhà sáng lập</h4>
                                    <address> BL, Luis, Duongnd, QuangAnh(pheda) </address>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-6 col-lg-3 my-5">
                            <div class="card border-0">
                                <div class="card-body text-center">
                                    <i class="fa fa-globe fa-5x mb-3" aria-hidden="true"></i>
                                    <h4 class="text-uppercase mb-5">email</h4>
                                    <p>khianhyeutrieutraitymtanvo@bcs.ok</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div></div>


        );
    }
}

